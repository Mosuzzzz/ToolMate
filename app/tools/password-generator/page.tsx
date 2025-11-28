import type { Metadata } from "next";
import { PasswordTool } from "./PasswordTool";
import { PrivacyBadge } from "@/components/PrivacyBadge";

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
    </div>
  );
}
