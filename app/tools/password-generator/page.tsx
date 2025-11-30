import type { Metadata } from "next";
import { PasswordTool } from "./PasswordTool";
import { PrivacyBadge } from "@/components/PrivacyBadge";
import { AdBanner } from "@/components/AdBanner";

export const metadata: Metadata = {
  title: "Strong Password Generator - ToolMate",
  description: "Generate secure, random passwords instantly. Customize length and characters for maximum security.",
};

export default function PasswordPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Password Generator</h1>
        <p className="text-slate-600">
          Create strong, secure passwords to protect your accounts.
        </p>
      </div>
      <PrivacyBadge />
      <PasswordTool />
      <AdBanner dataAdSlot="1234567892" />

      <div className="prose prose-slate max-w-none pt-8 border-t">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Secure Random Password Generator</h2>
          <p className="text-slate-600 mb-4">
            Create strong, secure passwords instantly with our free online Password Generator. 
            In today&apos;s digital age, using weak passwords is a major security risk. Our tool helps you 
            generate complex passwords that are difficult to crack, keeping your accounts safe from hackers.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Why Use a Password Generator?</h2>
          <ul className="list-disc pl-6 text-slate-600 space-y-2">
            <li><strong>Enhanced Security:</strong> Randomly generated passwords are much harder to guess than human-created ones.</li>
            <li><strong>Customizable:</strong> Choose the length and character types (uppercase, lowercase, numbers, symbols) to meet specific requirements.</li>
            <li><strong>Client-Side Processing:</strong> Your passwords are generated locally in your browser. We never see or store them.</li>
            <li><strong>Convenience:</strong> Generate a secure password in a single click.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Tips for Secure Passwords</h2>
          <ul className="list-disc pl-6 text-slate-600 space-y-2">
            <li><strong>Length Matters:</strong> Aim for at least 12 characters. Longer passwords are exponentially stronger.</li>
            <li><strong>Mix it Up:</strong> Use a combination of uppercase letters, lowercase letters, numbers, and special symbols.</li>
            <li><strong>Unique Passwords:</strong> Never reuse the same password across multiple sites.</li>
            <li><strong>Use a Manager:</strong> Use a reputable password manager to store your complex passwords securely.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-slate-900">Is it safe to use this generator?</h3>
              <p className="text-slate-600">Yes, absolutely. The password generation happens entirely within your web browser using the crypto API. No data is sent to our servers.</p>
            </div>
            <div>
              <h3 className="font-medium text-slate-900">Do you save the passwords?</h3>
              <p className="text-slate-600">No. We do not store, log, or transmit any passwords generated on this site.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
