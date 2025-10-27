import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900 border-b border-white/10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Company tagline */}
          <div className="shrink-0">
            <h1 className="text-white font-medium text-sm sm:text-base">
              Your Trusted OEM & ODM Furniture Partner
            </h1>
          </div>

          {/* Right side - Contact button */}
          <div className="shrink-0">
            <Button 
              variant="outline" 
              size="sm"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white hover:cursor-pointer rounded-full"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}