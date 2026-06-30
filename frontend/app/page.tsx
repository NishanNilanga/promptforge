import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex min-h-screen items-center justify-center bg-[#0B1020]">
        <h1 className="text-6xl font-bold text-white">
          PromptForge 🚀
        </h1>
      </main>
    </>
  );
}