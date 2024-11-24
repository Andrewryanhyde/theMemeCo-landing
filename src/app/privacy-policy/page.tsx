"use client";

import Image from "next/image";
import logoWhite from "../../../assets/logoWhite.png";

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-black text-white font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-3xl w-full text-left">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold">1. Introduction</h2>
          <p>
            Welcome to TheMemeCo. We value your privacy and are committed to
            protecting your personal information. This Privacy Policy outlines
            how we collect, use, and safeguard your data.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold">2. Information We Collect</h2>
          <p>
            We may collect personal information such as your name, email
            address, and usage data when you interact with our services.
            Additionally, we collect media files like images and videos that you
            upload. This information is used to enhance your experience and
            provide personalised content.
          </p>
          <p>
            We also collect device information and push notification tokens to
            facilitate seamless communication and updates.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold">
            3. How We Use Your Information
          </h2>
          <p>
            The information we collect is used to improve our website, send you
            updates, and respond to your enquiries. Specifically, we utilise
            Supabase for data storage and management, ensuring your data is
            securely handled. Push notification tokens are used to send you
            timely updates and notifications.
          </p>
          <p>
            We employ analytics tools to understand user behaviour and
            interactions within the app, allowing us to enhance functionality
            and user experience. These analytics help us tailor content and
            features to better serve your needs.
          </p>
          <p>
            We do not sell or share your personal information with third parties
            without your consent, except as necessary to provide our services or
            comply with the law.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold">4. Data Security</h2>
          <p>
            We implement robust security measures to protect your data from
            unauthorised access, alteration, or disclosure. Our primary data
            storage solution, Supabase, employs industry-standard security
            protocols, including encryption and access controls, to safeguard
            your information.
          </p>
          <p>
            Despite our efforts, no method of transmission over the internet or
            electronic storage is completely secure. Therefore, while we strive
            to use commercially acceptable means to protect your personal
            information, we cannot guarantee its absolute security.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold">5. Your Rights</h2>
          <p>
            You have the right to access, update, or delete your personal
            information. If you have any concerns or requests regarding your
            data, please contact us at drew@thememeco.com.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold">
            6. Changes to This Privacy Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page, and the updated policy will be
            effective immediately upon posting.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold">7. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at drew@thememeco.com.
          </p>
        </section>
      </main>

      <footer className="flex gap-6 flex-wrap items-center justify-center w-full py-4 bg-black text-white">
        <Image src={logoWhite} alt="TheMemeCo logo" width={180} height={38} />
        <p>© TheMemeCo 2024</p>
      </footer>
    </div>
  );
}
