import type { Metadata } from "next";
import { QrTool } from "./QrTool";
import { PrivacyBadge } from "@/components/PrivacyBadge";
import { AdBanner } from "@/components/AdBanner";

export const metadata: Metadata = {
  title: "QR Code Generator - ToolMate",
  description: "Generate free QR codes instantly. Enter your text or URL and download the QR code image.",
};

export default function QrCodePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">QR Code Generator</h1>
        <p className="text-slate-600">
          Create QR codes for URLs, text, and more.
        </p>
      </div>
      <PrivacyBadge />
      <QrTool />
      <AdBanner dataAdSlot="1234567891" />
      
      <div className="prose prose-slate max-w-none pt-8 border-t">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Free Online QR Code Generator</h2>
          <p className="text-slate-600 mb-4">
            Our free QR Code Generator is a simple yet powerful tool that allows you to create custom QR codes 
            instantly. Whether you need a QR code for a website URL, plain text, or Wi-Fi credentials, 
            our tool handles it all directly in your browser.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc pl-6 text-slate-600 space-y-2">
            <li><strong>Instant Generation:</strong> See your QR code update in real-time as you type.</li>
            <li><strong>High Quality:</strong> Download your QR codes in high-resolution PNG format.</li>
            <li><strong>Privacy Focused:</strong> All processing happens locally. Your data is never sent to a server.</li>
            <li><strong>Multiple Formats:</strong> Support for URLs, Text, and more coming soon.</li>
            <li><strong>Customizable:</strong> Clean and standard design compatible with all QR code scanners.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">How to Use</h2>
          <ol className="list-decimal pl-6 text-slate-600 space-y-2">
            <li>Enter your content (URL or text) in the input field.</li>
            <li>Watch the QR code generate instantly.</li>
            <li>Click the &quot;Download&quot; button to save the image to your device.</li>
            <li>Share your QR code or print it out for use.</li>
          </ol>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-slate-900">Do these QR codes expire?</h3>
              <p className="text-slate-600">No, the QR codes generated here are static and will work forever.</p>
            </div>
            <div>
              <h3 className="font-medium text-slate-900">Is there a scan limit?</h3>
              <p className="text-slate-600">No, you can scan these codes an unlimited number of times.</p>
            </div>
            <div>
              <h3 className="font-medium text-slate-900">Is it free for commercial use?</h3>
              <p className="text-slate-600">Yes, you can use the generated QR codes for any purpose, including commercial projects.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
