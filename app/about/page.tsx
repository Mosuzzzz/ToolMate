import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us - ToolMate",
  description: "Learn more about ToolMate, our mission to provide free, privacy-focused online tools for everyone.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">About ToolMate</h1>
        <p className="mt-2 text-slate-600">
          Empowering users with simple, fast, and secure online utilities.
        </p>
      </div>

      <div className="prose prose-slate max-w-none space-y-6">
        <section>
          <h2 className="text-2xl font-semibold">Our Mission</h2>
          <p className="text-slate-600">
            At ToolMate, we believe that essential digital tools should be accessible to everyone, 
            completely free of charge. Our mission is to build a comprehensive suite of utilities 
            that help students, professionals, and casual users perform daily tasks efficiently 
            without the need for complex software or paid subscriptions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Privacy First</h2>
          <p className="text-slate-600">
            In an age where data privacy is a major concern, we take a different approach. 
            <strong>ToolMate is designed to run entirely in your browser.</strong>
          </p>
          <p className="text-slate-600">
            When you use our Password Generator, QR Code Creator, or Word Counter, your data 
            never leaves your device. We don&apos;t store your passwords, we don&apos;t track your text, 
            and we don&apos;t analyze your QR codes. This &quot;client-side first&quot; architecture ensures 
            maximum security and peace of mind.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Why Choose ToolMate?</h2>
          <ul className="list-disc pl-6 text-slate-600 space-y-2">
            <li><strong>Instant Access:</strong> No registration or login required. Just open the site and start using the tools.</li>
            <li><strong>Lightning Fast:</strong> Since tools run locally on your device, there&apos;s no server latency.</li>
            <li><strong>Always Free:</strong> We are committed to keeping our core tools free forever.</li>
            <li><strong>Clean Interface:</strong> We prioritize user experience with a clutter-free, intuitive design.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Our Story</h2>
          <p className="text-slate-600">
            ToolMate started as a small project to solve a simple problem: finding a quick, 
            ad-free way to generate secure passwords. It has since grown into a collection 
            of essential utilities used by people all over the world. We are constantly 
            working on adding new tools and improving existing ones based on user feedback.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Get in Touch</h2>
          <p className="text-slate-600">
            We love hearing from our users. If you have a suggestion for a new tool, 
            found a bug, or just want to say hi, please visit our{" "}
            <Link href="/contact" className="text-blue-600 hover:underline">
              Contact Page
            </Link>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
