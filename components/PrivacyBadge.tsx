import { Shield } from "lucide-react";

export function PrivacyBadge() {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
      <Shield className="h-5 w-5 text-green-600" />
      <div>
        <span className="font-semibold">100% Private:</span> All processing happens in your browser. Your data never leaves your device.
      </div>
    </div>
  );
}
