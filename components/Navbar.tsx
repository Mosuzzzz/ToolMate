import Link from "next/link"
import { Wrench } from "lucide-react"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Wrench className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block">
              ToolMate
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/tools/qr-code"
              className="transition-colors hover:text-slate-900/80 text-slate-900/60"
            >
              QR Code
            </Link>
            <Link
              href="/tools/password-generator"
              className="transition-colors hover:text-slate-900/80 text-slate-900/60"
            >
              Password
            </Link>
            <Link
              href="/tools/word-counter"
              className="transition-colors hover:text-slate-900/80 text-slate-900/60"
            >
              Word Counter
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* Search or other items could go here */}
          </div>
          <nav className="flex items-center">
             {/* Social links or login could go here */}
          </nav>
        </div>
      </div>
    </header>
  )
}
