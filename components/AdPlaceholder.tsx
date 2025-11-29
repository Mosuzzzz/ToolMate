export function AdPlaceholder({ label }: { label: string }) {
  return (
    <div className="my-8 flex justify-center">
      <div className="w-full max-w-3xl rounded-lg border-2 border-dashed border-slate-300 bg-slate-50 p-8 text-center">
        <div className="space-y-2">
          <div className="text-sm font-medium text-slate-500">
            📢 Ad Space
          </div>
          <div className="text-xs text-slate-400">
            {label}
          </div>
          <div className="text-xs text-slate-400">
            Configure AdSense to show ads here
          </div>
        </div>
      </div>
    </div>
  );
}
