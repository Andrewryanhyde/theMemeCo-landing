import React from "react";
import Image from "next/image";
import logoWhite from "../../../assets/logoWhite.png";

export default function TermsAndConditions() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-black text-white font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-3xl w-full text-left">
        <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold">1. Introduction</h2>
          <p>
            Welcome to TheMemeCo. By accessing or using our application, you
            agree to be bound by these Terms and Conditions. Please read them
            carefully.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold">2. Use of the Application</h2>
          <p>
            TheMemeCo allows users to create, share, and discover memes. You
            agree to use the application in compliance with all applicable laws
            and regulations.
          </p>
          <p>
            You are responsible for maintaining the confidentiality of your
            account credentials and for all activities that occur under your
            account.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold">
            3. Content Ownership and Rights
          </h2>
          <p>
            You retain ownership of any content you create and upload to
            TheMemeCo. By uploading content, you grant TheMemeCo a
            non-exclusive, worldwide, royalty-free license to use, distribute,
            and display your content within the application.
          </p>
          <p>
            You are responsible for ensuring that your content does not infringe
            on the rights of any third parties.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold">4. Prohibited Activities</h2>
          <p>You agree not to:</p>
          <ul className="list-disc list-inside">
            <li>
              Upload or distribute content that is illegal, harmful, or violates
              the rights of others.
            </li>
            <li>
              Use the application for any unauthorized commercial purposes.
            </li>
            <li>
              Attempt to interfere with the security or performance of the
              application.
            </li>
            <li>
              Use automated systems or software to access the application
              without our express permission.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold">
            5. Data Collection and Privacy
          </h2>
          <p>
            We collect personal information such as your name, email address,
            and usage data to enhance your experience. This includes media files
            you upload, device information, and push notification tokens.
          </p>
          <p>
            Our use of third-party services like Supabase for data storage and
            OpenAI for content tagging is governed by our Privacy Policy.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold">6. Push Notifications</h2>
          <p>
            We use push notifications to keep you updated with the latest memes
            and interactions. You can manage your notification preferences in
            the application settings.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold">7. Third-Party Services</h2>
          <p>
            TheMemeCo integrates with third-party services such as Supabase,
            OpenAI, and Expo for various functionalities including data storage,
            content analysis, and push notifications. These services are subject
            to their own Terms and Conditions and Privacy Policies.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold">8. Termination</h2>
          <p>
            We reserve the right to suspend or terminate your access to
            TheMemeCo at our sole discretion, without notice, for conduct that
            we believe violates these Terms and Conditions or is harmful to
            other users of the application.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold">
            9. Disclaimer of Warranties
          </h2>
          <p>
            TheMemeCo is provided on an &ldquo;as is&rdquo; and &ldquo;as
            available&rdquo; basis. We disclaim all warranties of any kind,
            whether express or implied, including but not limited to warranties
            of merchantability, fitness for a particular purpose, and
            non-infringement.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold">
            10. Limitation of Liability
          </h2>
          <p>
            In no event shall TheMemeCo be liable for any indirect, incidental,
            special, consequential, or punitive damages arising out of your use
            of the application.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold">11. Changes to These Terms</h2>
          <p>
            We may modify these Terms and Conditions at any time. Any changes
            will be effective immediately upon posting. Continued use of the
            application constitutes your acceptance of the revised Terms.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold">
            13. End User License Agreement (EULA)
          </h2>
          <p>
            By using TheMemeCo, you agree to our End User License Agreement
            which includes:
          </p>
          <ul className="list-disc list-inside">
            <li>
              Zero tolerance for objectionable content including but not limited
              to: hate speech, explicit adult content, violence, harassment,
              discrimination, or any content that promotes illegal activities.
            </li>
            <li>
              Immediate account termination for users who engage in abusive
              behavior, including harassment of other users, spamming, or any
              form of malicious activity.
            </li>
            <li>
              TheMemeCo reserves the right to remove any content and terminate
              any user account without prior notice if found in violation of
              these terms.
            </li>
            <li>
              Users agree to indemnify TheMemeCo against any claims arising from
              their violation of these terms or misuse of the platform.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold">14. Contact Us</h2>
          <p>
            If you have any questions about these Terms and Conditions, please
            contact us at drew@thememeco.com.
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
