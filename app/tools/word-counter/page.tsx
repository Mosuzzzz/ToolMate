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

      <div className="prose prose-slate max-w-none pt-8 border-t">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Free Online Word Counter</h2>
          <p className="text-slate-600 mb-4">
            Our Word Counter is more than just a simple tool for counting words. It provides a comprehensive 
            analysis of your text, including character count, sentence count, paragraph count, and estimated 
            reading time. It&apos;s perfect for writers, students, and professionals who need to meet specific 
            length requirements.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <ul className="list-disc pl-6 text-slate-600 space-y-2">
            <li><strong>Real-Time Counting:</strong> See the stats update instantly as you type or paste text.</li>
            <li><strong>Comprehensive Stats:</strong> Tracks words, characters (with and without spaces), sentences, and paragraphs.</li>
            <li><strong>Reading Time:</strong> Estimates how long it will take an average reader to read your text.</li>
            <li><strong>Privacy Guaranteed:</strong> Your text is processed locally in your browser and never sent to any server.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Who is this for?</h2>
          <ul className="list-disc pl-6 text-slate-600 space-y-2">
            <li><strong>Students:</strong> Ensure your essays and assignments meet word count requirements.</li>
            <li><strong>Bloggers & Writers:</strong> Optimize your content length for SEO and reader engagement.</li>
            <li><strong>Social Media Managers:</strong> Craft posts that fit within character limits for platforms like Twitter/X.</li>
            <li><strong>Translators:</strong> Estimate the volume of work for quotes and billing.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-slate-900">Is there a limit to how much text I can check?</h3>
              <p className="text-slate-600">There is no hard limit, but extremely large documents (hundreds of pages) might slow down your browser slightly.</p>
            </div>
            <div>
              <h3 className="font-medium text-slate-900">Do you store my text?</h3>
              <p className="text-slate-600">No. Your text remains on your device and is never uploaded to our servers.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
