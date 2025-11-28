"use client";

import { useState, useCallback, useEffect } from "react";
import { Copy, RefreshCw, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export function PasswordTool() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(16);
  const [options, setOptions] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
  });
  const [copied, setCopied] = useState(false);

  const generatePassword = useCallback(() => {
    const charset = {
      uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      lowercase: "abcdefghijklmnopqrstuvwxyz",
      numbers: "0123456789",
      symbols: "!@#$%^&*()_+~`|}{[]:;?><,./-=",
    };

    let chars = "";
    if (options.uppercase) chars += charset.uppercase;
    if (options.lowercase) chars += charset.lowercase;
    if (options.numbers) chars += charset.numbers;
    if (options.symbols) chars += charset.symbols;

    if (chars === "") {
      setPassword("");
      return;
    }

    let generated = "";
    for (let i = 0; i < length; i++) {
      generated += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(generated);
  }, [length, options]);

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Configuration</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="length">Password Length</Label>
              <span className="text-sm font-medium text-slate-500">
                {length}
              </span>
            </div>
            <input
              id="length"
              type="range"
              min="6"
              max="32"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-slate-900"
            />
          </div>

          <div className="space-y-4">
            <Label>Options</Label>
            <div className="grid gap-2">
              {[
                { id: "uppercase", label: "Uppercase (A-Z)" },
                { id: "lowercase", label: "Lowercase (a-z)" },
                { id: "numbers", label: "Numbers (0-9)" },
                { id: "symbols", label: "Symbols (!@#$)" },
              ].map((opt) => (
                <div key={opt.id} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={opt.id}
                    checked={options[opt.id as keyof typeof options]}
                    onChange={(e) =>
                      setOptions({
                        ...options,
                        [opt.id]: e.target.checked,
                      })
                    }
                    className="h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-900"
                  />
                  <Label htmlFor={opt.id} className="font-normal">
                    {opt.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Generated Password</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="relative">
            <div className="flex h-14 w-full items-center justify-center rounded-md border border-slate-200 bg-slate-50 px-4 text-center text-xl font-mono tracking-wider text-slate-900 break-all">
              {password || "Select options"}
            </div>
          </div>

          <div className="flex gap-2">
            <Button
              onClick={copyToClipboard}
              className="flex-1"
              disabled={!password}
            >
              {copied ? (
                <>
                  <Check className="mr-2 h-4 w-4" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="mr-2 h-4 w-4" />
                  Copy
                </>
              )}
            </Button>
            <Button
              variant="outline"
              onClick={generatePassword}
              title="Regenerate"
            >
              <RefreshCw className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
