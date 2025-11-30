import Link from "next/link";
import { QrCode, Lock, FileText } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AdBanner } from "@/components/AdBanner";

export default function Home() {
  const tools = [
    {
      title: "QR Code Generator",
      description:
        "Generate QR codes for URLs, text, Wi-Fi, and more instantly.",
      icon: <QrCode className="h-10 w-10 text-blue-500" />,
      href: "/tools/qr-code",
    },
    {
      title: "Password Generator",
      description:
        "Create strong, secure random passwords to keep your accounts safe.",
      icon: <Lock className="h-10 w-10 text-green-500" />,
      href: "/tools/password-generator",
    },
    {
      title: "Word Counter",
      description:
        "Count words, characters, sentences, and estimate reading time.",
      icon: <FileText className="h-10 w-10 text-purple-500" />,
      href: "/tools/word-counter",
    },
  ];

  return (
    <div className="space-y-8">
      <section className="space-y-4 text-center pt-10 pb-6">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          Free Online Tools for Everyone
        </h1>
        <p className="mx-auto max-w-[700px] text-slate-600 md:text-xl">
          Simple, fast, and privacy-focused utilities. No sign-up required.
        </p>
      </section>

      {/* Privacy Features */}
      <section className="mx-auto max-w-3xl">
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="flex flex-col items-center text-center p-4 rounded-lg border border-slate-200 bg-white">
            <div className="mb-2 rounded-full bg-green-100 p-3">
              <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="font-semibold">100% Private</h3>
            <p className="text-sm text-slate-500">All processing happens in your browser</p>
          </div>
          <div className="flex flex-col items-center text-center p-4 rounded-lg border border-slate-200 bg-white">
            <div className="mb-2 rounded-full bg-blue-100 p-3">
              <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-semibold">Lightning Fast</h3>
            <p className="text-sm text-slate-500">No server delays, instant results</p>
          </div>
          <div className="flex flex-col items-center text-center p-4 rounded-lg border border-slate-200 bg-white">
            <div className="mb-2 rounded-full bg-purple-100 p-3">
              <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <h3 className="font-semibold">Always Free</h3>
            <p className="text-sm text-slate-500">No hidden fees or subscriptions</p>
          </div>
        </div>
      </section>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <Link key={tool.href} href={tool.href}>
            <Card className="h-full transition-all hover:shadow-md hover:border-slate-300">
              <CardHeader>
                <div className="mb-4">{tool.icon}</div>
                <CardTitle>{tool.title}</CardTitle>
                <CardDescription>{tool.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <span className="text-sm font-medium text-blue-600 hover:underline">
                  Open Tool &rarr;
                </span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Content Section */}
      <div className="prose prose-slate max-w-none mt-16 pt-8 border-t">
        <section>
          <h2 className="text-2xl font-bold tracking-tight mb-4">Your Go-To Suite for Digital Utilities</h2>
          <p className="text-slate-600 mb-4">
            ToolMate provides a collection of essential online tools designed to make your digital life easier. 
            Whether you need to generate a secure password, create a QR code for your business, or analyze text 
            for a writing project, our tools are here to help—completely free and without any installation.
          </p>
          <p className="text-slate-600 mb-4">
            We prioritize your privacy and security. Unlike many other online utilities, our tools run entirely 
            in your web browser. This means your sensitive data, such as passwords or personal text, never leaves 
            your device. You get the convenience of cloud tools with the security of offline software.
          </p>
        </section>
        
        <section className="mt-8">
           <h3 className="text-xl font-semibold mb-3">Why ToolMate?</h3>
           <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-slate-900 mb-2">Security First</h4>
                <p className="text-slate-600 text-sm">Client-side processing ensures your data stays yours.</p>
              </div>
              <div>
                 <h4 className="font-medium text-slate-900 mb-2">No Friction</h4>
                 <p className="text-slate-600 text-sm">No accounts, no logins, no paywalls. Just open and use.</p>
              </div>
              <div>
                 <h4 className="font-medium text-slate-900 mb-2">Fast &amp; Responsive</h4>
                 <p className="text-slate-600 text-sm">Optimized for performance on all devices, from desktop to mobile.</p>
              </div>
              <div>
                 <h4 className="font-medium text-slate-900 mb-2">Always Improving</h4>
                 <p className="text-slate-600 text-sm">We regularly add new tools and features based on user feedback.</p>
              </div>
           </div>
        </section>
      </div>

      {/* Ad Banner */}
      <AdBanner dataAdSlot="1234567890" />
    </div>
  );
}
