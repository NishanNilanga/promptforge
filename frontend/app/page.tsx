import Button from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8">
      <h1 className="text-6xl font-bold">
        PromptForge 🚀
      </h1>

      <Button>
        Get Started
      </Button>
    </main>
  );
}