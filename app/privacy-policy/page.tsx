import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - ToolMate",
  description: "Privacy Policy for ToolMate - Learn how we handle your data and protect your privacy.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="mt-2 text-slate-600">Last updated: November 28, 2024</p>
      </div>

      <div className="prose prose-slate max-w-none space-y-6">
        <section>
          <h2 className="text-2xl font-semibold">Introduction</h2>
          <p className="text-slate-600">
            Welcome to ToolMate. We respect your privacy and are committed to protecting your personal data. 
            This privacy policy will inform you about how we handle your data when you visit our website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Data Collection</h2>
          <p className="text-slate-600">
            ToolMate is designed with privacy in mind. All tools run entirely in your browser (client-side), 
            which means:
          </p>
          <ul className="list-disc pl-6 text-slate-600 space-y-2">
            <li>We do not store any data you input into our tools</li>
            <li>Your QR codes, passwords, and other generated content never leave your device</li>
            <li>We do not collect personal information unless you explicitly provide it</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Cookies and Tracking</h2>
          <p className="text-slate-600">
            We may use cookies and similar tracking technologies to improve your experience. This includes:
          </p>
          <ul className="list-disc pl-6 text-slate-600 space-y-2">
            <li>Analytics cookies to understand how visitors use our site</li>
            <li>Advertising cookies from Google AdSense to display relevant ads</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Third-Party Services</h2>
          <p className="text-slate-600">
            We use third-party services that may collect information:
          </p>
          <ul className="list-disc pl-6 text-slate-600 space-y-2">
            <li><strong>Google AdSense</strong>: For displaying advertisements</li>
            <li><strong>Vercel</strong>: For hosting our website</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Your Rights</h2>
          <p className="text-slate-600">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 text-slate-600 space-y-2">
            <li>Access any personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Opt-out of marketing communications</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Contact Us</h2>
          <p className="text-slate-600">
            If you have any questions about this Privacy Policy, please contact us through our{" "}
            <a href="/contact" className="text-blue-600 hover:underline">
              Contact Page
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
