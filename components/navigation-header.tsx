"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigation } from "@/hooks/use-navigation";

const navigationItems = [
   "Home",
   "About us",
   "Why Us",
   "Facility",
   "Our Products",
   "Our Process",
   "Contact Us"
];

// Menu icon component
const MenuIcon = () => (
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
   </svg>
);

export default function NavigationHeader() {
  const { navigateToSection } = useNavigation();

  const handleNavClick = (item: string) => {
    navigateToSection(item);
  };

  return (
    <nav className="bg-background border-b border-border sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left side - Logo space */}
          <div className="shrink-0">
            <div className="flex items-center">
              <img 
                src="/logos/logo.png" 
                alt="Star Marine Furniture Logo" 
                className="h-10 w-auto object-contain hover:opacity-80 transition-opacity duration-200 cursor-pointer" 
                onClick={() => handleNavClick("Home")}
              />
            </div>
          </div>

          {/* Desktop Navigation - Right side */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className="text-foreground hover:text-primary hover:cursor-pointer transition-colors duration-200 text-sm font-medium"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile menu dropdown */}
          <div className="lg:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground">
                  <MenuIcon />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80 max-w-[calc(100vw-2rem)]">
                {navigationItems.map((item) => (
                  <DropdownMenuItem
                    key={item}
                    onClick={() => handleNavClick(item)}
                    className="cursor-pointer text-base py-3 px-4"
                  >
                    {item}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
}