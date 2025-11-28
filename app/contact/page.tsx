import type { Metadata } from "next";
import { Mail, MessageSquare, Globe } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Contact Us - ToolMate",
  description: "Get in touch with ToolMate. We'd love to hear your feedback and suggestions.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight">Contact Us</h1>
        <p className="mt-2 text-slate-600">
          Have questions or feedback? We&apos;d love to hear from you!
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <Mail className="h-10 w-10 text-blue-500 mb-2" />
            <CardTitle>Email</CardTitle>
            <CardDescription>Send us an email anytime</CardDescription>
          </CardHeader>
          <CardContent>
            <a 
              href="mailto:devpatiphan@gmail.com" 
              className="text-blue-600 hover:underline"
            >
              devpatiphan@gmail.com
            </a>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <MessageSquare className="h-10 w-10 text-green-500 mb-2" />
            <CardTitle>Feedback</CardTitle>
            <CardDescription>Share your ideas</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600">
              We&apos;re always looking to improve our tools based on user feedback.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Globe className="h-10 w-10 text-purple-500 mb-2" />
            <CardTitle>Social Media</CardTitle>
            <CardDescription>Follow us online</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600">
              Connect with us on social media for updates and tips.
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold">Is ToolMate really free?</h3>
            <p className="text-slate-600">
              Yes! All our tools are completely free to use with no registration required.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Do you store my data?</h3>
            <p className="text-slate-600">
              No. All tools run client-side in your browser. We never see or store your data.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Can I suggest a new tool?</h3>
            <p className="text-slate-600">
              Absolutely! Email us your suggestions and we&apos;ll consider adding them.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">How do you make money?</h3>
            <p className="text-slate-600">
              We display non-intrusive ads to keep the service free for everyone.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
