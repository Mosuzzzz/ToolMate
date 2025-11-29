import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ToolMate - Free Online Tools",
  description: "A collection of free online tools including QR Code Generator, Password Generator, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={cn(inter.className, "min-h-screen bg-slate-50 font-sans antialiased leading-relaxed text-slate-900")}>
        <div className="relative flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1 container py-6">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
