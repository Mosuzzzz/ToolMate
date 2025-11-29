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
    </div>
  );
}
