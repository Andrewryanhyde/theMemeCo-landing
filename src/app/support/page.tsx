"use client";

import { useState } from "react";
import Image from "next/image";
import logoWhite from "../../../assets/logoWhite.png";

export default function Support() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-black text-white font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-2xl w-full">
        <div className="mb-8 flex flex-col items-center">
          <Image
            src={logoWhite}
            alt="TheMemeCo logo"
            width={180}
            height={38}
            priority
          />
          <h1 className="text-3xl font-bold mt-8 mb-4">Support</h1>
          <p className="text-center mb-8">
            Have a question or need help? Send us a message and we&apos;ll get
            back to you as soon as possible.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              className="w-full px-4 py-2 rounded-lg bg-[#1a1a1a] border border-gray-700 focus:border-white focus:outline-none"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-4 py-2 rounded-lg bg-[#1a1a1a] border border-gray-700 focus:border-white focus:outline-none"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={4}
              className="w-full px-4 py-2 rounded-lg bg-[#1a1a1a] border border-gray-700 focus:border-white focus:outline-none"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-2 px-4 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition-colors disabled:opacity-50"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-green-500 text-center">
              Message sent successfully!
            </p>
          )}
          {status === "error" && (
            <p className="text-red-500 text-center">
              Failed to send message. Please try again.
            </p>
          )}
        </form>
      </main>

      <footer className="flex gap-6 flex-wrap items-center justify-center fixed bottom-0 w-full py-4 bg-black text-white">
        <p>© TheMemeCo 2024</p>
        <a href="/terms-conditions" className="hover:underline">
          Terms & Conditions
        </a>
        <a href="/privacy-policy" className="hover:underline">
          Privacy Policy
        </a>
      </footer>
    </div>
  );
}
