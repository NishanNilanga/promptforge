import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B1020]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-white"
        >
          Prompt<span className="text-violet-500">Forge</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link href="#" className="text-sm text-slate-300 transition hover:text-white">
            Features
          </Link>

          <Link href="#" className="text-sm text-slate-300 transition hover:text-white">
            Pricing
          </Link>

          <Link href="#" className="text-sm text-slate-300 transition hover:text-white">
            Docs
          </Link>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <Button variant="ghost">
            Login
          </Button>

          <Button>
            Get Started
          </Button>
        </div>

      </div>
    </header>
  );
}