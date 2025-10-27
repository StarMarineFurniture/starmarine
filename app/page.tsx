import Image from "next/image";
import Header from "@/components/header";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Main content area with top padding to account for fixed header */}
      <main className="pt-16">
        {/* Your main content will go here */}
      </main>
    </div>
  );
}
