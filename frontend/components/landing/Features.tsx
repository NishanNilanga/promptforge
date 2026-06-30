import {
  Sparkles,
  Library,
  Wand2,
  Users,
  BarChart3,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI Prompt Generator",
    description:
      "Generate high-quality prompts instantly with AI-powered assistance.",
  },
  {
    icon: Library,
    title: "Prompt Library",
    description:
      "Save, organize and manage all your prompts in one secure place.",
  },
  {
    icon: Wand2,
    title: "Prompt Optimizer",
    description:
      "Improve existing prompts for better AI responses and accuracy.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Share prompts and collaborate with your entire development team.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Track prompt performance and optimize your workflow with insights.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Cloud Storage",
    description:
      "Your prompts are encrypted and securely stored in the cloud.",
  },
];

export default function Features() {
  return (
    <section className="bg-[#0B1020] py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300">
            ✨ Features
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Everything You Need
            <span className="block text-violet-500">
              To Master AI Prompting
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Powerful tools designed to help developers create, organize,
            optimize and share prompts faster than ever.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-2xl border border-slate-800 bg-[#111827] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/40 hover:shadow-[0_0_40px_rgba(139,92,246,0.15)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-violet-600/15 text-violet-400 transition group-hover:bg-violet-600 group-hover:text-white">
                  <Icon size={28} />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}