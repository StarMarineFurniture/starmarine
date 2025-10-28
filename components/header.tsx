import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-foreground border-b border-white/10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Company tagline */}
          <div className="shrink-0">
            <h1 className="text-white font-medium text-xs sm:text-base">
              Your Trusted OEM & ODM Furniture Partner
            </h1>
          </div>

          {/* Right side - Contact button */}
          <div className="shrink-0">
            <Button 
              variant="default" 
              size="sm"
              className="hover:cursor-pointer rounded-full text-xs"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}