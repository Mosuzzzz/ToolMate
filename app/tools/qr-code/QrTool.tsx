"use client";

import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function QrTool() {
  const [text, setText] = useState("https://example.com");

  const downloadQrCode = () => {
    const canvas = document.getElementById("qr-code") as HTMLCanvasElement;
    if (canvas) {
      const pngUrl = canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = "qrcode.png";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  };

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Configuration</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="text">Content (URL or Text)</Label>
            <Input
              id="text"
              placeholder="Enter text or URL"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Preview</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-6">
          <div className="rounded-lg border bg-white p-4 shadow-sm">
            <QRCodeCanvas
              id="qr-code"
              value={text}
              size={200}
              level={"H"}
              includeMargin={true}
            />
          </div>
          <Button onClick={downloadQrCode} className="w-full sm:w-auto">
            <Download className="mr-2 h-4 w-4" />
            Download PNG
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
