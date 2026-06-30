import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0B1020]">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-[120%] rounded-full bg-violet-600/20 blur-[120px]" />
        <div className="absolute right-1/2 bottom-0 h-96 w-96 translate-x-[120%] rounded-full bg-cyan-500/20 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-24 pb-20">

        {/* Hero Content */}
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">

          {/* Badge */}
          <div className="mb-8 rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-sm font-medium text-violet-300">
            🚀 AI Prompt Engineering Platform
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-white md:text-7xl">
            Build Better AI Prompts
            <span className="mt-2 block text-violet-500">
              Faster &amp; Smarter
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
            Create, organize and optimize prompts for ChatGPT, Claude,
            Gemini and other AI models with a clean developer-first workspace.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button
              size="lg"
              className="group bg-violet-600 px-8 hover:bg-violet-700"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 transition group-hover:translate-x-1" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-slate-700 bg-transparent text-white hover:bg-slate-800"
            >
              <Play className="mr-2 h-4 w-4 fill-current" />
              Live Demo
            </Button>
          </div>

        </div>

        {/* Dashboard Preview */}
        <div className="mx-auto mt-24 max-w-5xl">
          <div className="overflow-hidden rounded-3xl border border-slate-800 bg-[#111827]/80 shadow-2xl backdrop-blur-xl">

            {/* Browser Top */}
            <div className="flex items-center gap-2 border-b border-slate-800 px-6 py-4">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />

              <div className="ml-5 flex-1 rounded-lg bg-slate-900 px-4 py-2 text-center text-xs text-slate-500">
                https://app.promptforge.ai
              </div>
            </div>

            {/* Preview */}
            <div className="flex h-[380px] items-center justify-center bg-[#0F172A]">
              <p className="text-lg font-medium text-slate-500">
                Dashboard Preview (Next Step)
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}