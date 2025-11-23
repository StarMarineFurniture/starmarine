import Image from "next/image";
import Header from "@/components/header";
import NavigationHeader from "@/components/navigation-header";
import ContactUs from "@/components/contact-us";
import { Logos8 } from "@/components/logo-cloud";
import { OurProcess } from "@/components/our-process";
import { AboutUs } from "@/components/about-us";
import { Home } from "@/components/home";
import { WhyUs } from "@/components/why-us";
import { Facility } from "@/components/facility";
import { ProductsGallery } from "@/components/products-gallery";

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <NavigationHeader />
      {/* Main content area with top padding to account for both headers */}
      <main className="pt-4">
        <Home />
        <AboutUs />
        <WhyUs />
        <Facility />
        <Logos8 />
        <ProductsGallery />
        <OurProcess />
        <ContactUs />
      </main>
    </div>
  );
}
