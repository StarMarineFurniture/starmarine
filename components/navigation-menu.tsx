"use client"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { useTheme } from "next-themes"
import { Menu, Moon, Sun, Home, ShoppingBag, Info, Phone, User, Settings, Star } from "lucide-react"

export function NavigationMenu() {
  const { theme, setTheme } = useTheme()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button 
          variant="outline" 
          size="sm" 
          className="relative hover:bg-primary/10 hover:text-primary hover:border-primary/20 transition-all duration-200"
        >
          <Menu className="h-4 w-4" />
          <span className="sr-only">Open navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[320px] sm:w-[400px] p-0">
        {/* Header */}
        <div className="px-6 py-6 bg-primary/5 border-b">
          <SheetHeader className="text-left">
            <div className="flex items-center gap-2 mb-2">
              <Star className="h-5 w-5 text-primary" />
              <SheetTitle className="text-xl font-bold">StarMarine</SheetTitle>
            </div>
            <SheetDescription className="text-sm text-muted-foreground">
              Navigate through our premium furniture collection
            </SheetDescription>
          </SheetHeader>
        </div>
        
        <div className="flex flex-col h-full">
          {/* Main Navigation */}
          <div className="flex-1 px-6 py-6 space-y-6">
            {/* Navigation Links */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-1 w-1 rounded-full bg-primary"></div>
                <h3 className="text-sm font-semibold text-foreground">Navigation</h3>
              </div>
              
              <div className="space-y-1">
                <Button 
                  variant="ghost" 
                  className="w-full justify-start h-11 px-3 hover:bg-primary/10 hover:text-primary transition-colors" 
                  size="sm"
                >
                  <Home className="mr-3 h-4 w-4" />
                  <span className="font-medium">Home</span>
                </Button>
                
                <Button 
                  variant="ghost" 
                  className="w-full justify-start h-11 px-3 hover:bg-primary/10 hover:text-primary transition-colors" 
                  size="sm"
                >
                  <ShoppingBag className="mr-3 h-4 w-4" />
                  <span className="font-medium">Shop Collection</span>
                </Button>
                
                <Button 
                  variant="ghost" 
                  className="w-full justify-start h-11 px-3 hover:bg-primary/10 hover:text-primary transition-colors" 
                  size="sm"
                >
                  <Info className="mr-3 h-4 w-4" />
                  <span className="font-medium">About Us</span>
                </Button>
                
                <Button 
                  variant="ghost" 
                  className="w-full justify-start h-11 px-3 hover:bg-primary/10 hover:text-primary transition-colors" 
                  size="sm"
                >
                  <Phone className="mr-3 h-4 w-4" />
                  <span className="font-medium">Contact</span>
                </Button>
                
                <Button 
                  variant="ghost" 
                  className="w-full justify-start h-11 px-3 hover:bg-primary/10 hover:text-primary transition-colors" 
                  size="sm"
                >
                  <User className="mr-3 h-4 w-4" />
                  <span className="font-medium">My Account</span>
                </Button>
              </div>
            </div>
            
            <Separator className="my-6" />
            
            {/* Theme Selection */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-1 w-1 rounded-full bg-primary"></div>
                <h3 className="text-sm font-semibold text-foreground">Appearance</h3>
              </div>
              
              <div className="space-y-2">
                <Button 
                  variant={theme === "light" ? "default" : "ghost"} 
                  className={`w-full justify-start h-11 px-3 transition-all ${
                    theme === "light" 
                      ? "bg-primary text-primary-foreground shadow-sm" 
                      : "hover:bg-muted"
                  }`}
                  size="sm"
                  onClick={() => setTheme("light")}
                >
                  <Sun className="mr-3 h-4 w-4" />
                  <span className="font-medium">Light Mode</span>
                  {theme === "light" && <span className="ml-auto">✓</span>}
                </Button>
                
                <Button 
                  variant={theme === "dark" ? "default" : "ghost"} 
                  className={`w-full justify-start h-11 px-3 transition-all ${
                    theme === "dark" 
                      ? "bg-primary text-primary-foreground shadow-sm" 
                      : "hover:bg-muted"
                  }`}
                  size="sm"
                  onClick={() => setTheme("dark")}
                >
                  <Moon className="mr-3 h-4 w-4" />
                  <span className="font-medium">Dark Mode</span>
                  {theme === "dark" && <span className="ml-auto">✓</span>}
                </Button>
                
                <Button 
                  variant={theme === "system" ? "default" : "ghost"} 
                  className={`w-full justify-start h-11 px-3 transition-all ${
                    theme === "system" 
                      ? "bg-primary text-primary-foreground shadow-sm" 
                      : "hover:bg-muted"
                  }`}
                  size="sm"
                  onClick={() => setTheme("system")}
                >
                  <Settings className="mr-3 h-4 w-4" />
                  <span className="font-medium">System</span>
                  {theme === "system" && <span className="ml-auto">✓</span>}
                </Button>
              </div>
            </div>
          </div>
          
          {/* Footer Actions */}
          <div className="p-6 bg-muted/30 border-t space-y-3">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-1 w-1 rounded-full bg-primary"></div>
              <h3 className="text-sm font-semibold text-foreground">Quick Actions</h3>
            </div>
            
            <Button className="w-full h-11 font-medium shadow-sm" size="sm">
              <ShoppingBag className="mr-2 h-4 w-4" />
              Shop Now
            </Button>
            
            <Button variant="outline" className="w-full h-11 font-medium" size="sm">
              <Info className="mr-2 h-4 w-4" />
              View Catalog
            </Button>
            
            <div className="pt-2 text-center">
              <p className="text-xs text-muted-foreground">
                © 2025 StarMarine Furniture
              </p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
