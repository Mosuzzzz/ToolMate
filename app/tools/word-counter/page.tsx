import type { Metadata } from "next";
import { WordCounterTool } from "./WordCounterTool";
import { PrivacyBadge } from "@/components/PrivacyBadge";
import { AdBanner } from "@/components/AdBanner";

export const metadata: Metadata = {
  title: "Word Counter - ToolMate",
  description: "Free online word counter. Count words, characters, sentences, paragraphs, and estimate reading time instantly.",
};

export default function WordCounterPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Word Counter</h1>
        <p className="text-slate-600">
          Count words, characters, sentences, and more in real-time.
        </p>
      </div>
      <PrivacyBadge />
      <WordCounterTool />
      <AdBanner dataAdSlot="1234567893" />
    </div>
  );
}
