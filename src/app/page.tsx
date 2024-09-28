"use client";

import { useState } from "react";
import Image from "next/image";
import logoWhite from "../../assets/logoWhite.png";

export default function Home() {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const validateEmail = (email: string) => {
    // Simple email regex for validation
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setIsValidEmail(validateEmail(e.target.value));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] text-center">
      <main className="flex flex-col gap-8 items-center">
        <Image
          src={logoWhite}
          alt="TheMemeCo logo"
          width={180}
          height={38}
          priority
        />
        <div className="text-sm font-[family-name:var(--font-geist-mono)]">
          <p>
            TheMemeCo is a meme-focused social media platform that allows users
            to create, share, and discover memes.
          </p>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <form
            action="https://thememeco.us12.list-manage.com/subscribe/post"
            method="POST"
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44 w-full sm:w-auto"
            noValidate
            target="_blank"
          >
            {/* Hidden inputs required by Mailchimp */}
            <input type="hidden" name="u" value="902796d0f4e40defacd1e0da0" />
            <input type="hidden" name="id" value="5e2aa8a818" />
            {/* You might need to include the 'f_id' as well */}
            <input type="hidden" name="f_id" value="000ad4e8f0" />

            <input
              type="email"
              name="EMAIL"
              placeholder="Enter your email"
              className={`bg-transparent border-none outline-none text-sm sm:text-base h-full px-2 ${
                !isValidEmail ? "border-b-2 border-red-500" : ""
              }`}
              value={email}
              onChange={handleEmailChange}
              required
            />
            <button
              type="submit"
              className="bg-transparent border-none outline-none text-sm sm:text-base h-full px-2 disabled:opacity-50"
              disabled={!isValidEmail || !email}
            >
              Sign Up
            </button>
          </form>
        </div>
      </main>
      <footer className="flex gap-6 flex-wrap items-center justify-center fixed bottom-0 w-full py-4 bg-white dark:bg-black">
        <p>© TheMemeCo 2024</p>
      </footer>
    </div>
  );
}
