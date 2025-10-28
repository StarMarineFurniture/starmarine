import Image from "next/image";
import Header from "@/components/header";
import NavigationHeader from "@/components/navigation-header";
import ContactUs from "@/components/contact-us";
import { Logos8 } from "@/components/logo-cloud";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <NavigationHeader />
      {/* Main content area with top padding to account for both headers */}
      <main className="pt-4">
        {/* Your main content will go here */}
        <Logos8 />
        <ContactUs />
      </main>
    </div>
  );
}
