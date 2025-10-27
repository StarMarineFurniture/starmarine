import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { NavigationMenu } from "@/components/navigation-menu";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-foreground">StarMarine</h1>
            </div>
            <NavigationMenu />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background py-16 sm:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            {/* Big Header */}
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Exquisite Furniture for
              <span className="block text-primary">Modern Living</span>
            </h1>
            
            {/* Description Text */}
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              Discover our carefully curated collection of premium furniture pieces that blend 
              timeless elegance with contemporary design. Transform your space into a sanctuary 
              of comfort and style.
            </p>
            
            {/* Buttons */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <Button size="lg" className="w-full sm:w-auto">
                Shop Collection
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                View Catalog
              </Button>
            </div>
            
            {/* Big Picture */}
            <div className="mt-16 relative">
              <div className="relative overflow-hidden rounded-2xl bg-muted shadow-2xl">
                <Image
                  src="/hero-furniture.svg"
                  alt="StarMarine Furniture Collection"
                  width={1200}
                  height={600}
                  className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover"
                  priority
                />
                {/* Overlay for better text readability if needed */}
                <div className="absolute inset-0 bg-linear-to-t from-background/20 to-transparent" />
              </div>
              
              {/* Floating feature cards */}
              <div className="absolute -bottom-8 left-4 right-4 sm:-bottom-12 sm:left-8 sm:right-8">
                <div className="grid gap-4 sm:grid-cols-3">
                  <Card className="bg-card/95 backdrop-blur supports-backdrop-filter:bg-card/60">
                    <CardContent className="p-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">500+</div>
                        <div className="text-sm text-muted-foreground">Premium Pieces</div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-card/95 backdrop-blur supports-backdrop-filter:bg-card/60">
                    <CardContent className="p-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">15+</div>
                        <div className="text-sm text-muted-foreground">Years Experience</div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-card/95 backdrop-blur supports-backdrop-filter:bg-card/60">
                    <CardContent className="p-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">24/7</div>
                        <div className="text-sm text-muted-foreground">Customer Support</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why Choose StarMarine?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Experience the difference with our premium furniture and exceptional service
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Premium Quality</CardTitle>
                <CardDescription>
                  Handcrafted pieces made from the finest materials
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Each piece is carefully selected and crafted to ensure lasting beauty and durability.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Custom Design</CardTitle>
                <CardDescription>
                  Personalized solutions for your unique space
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Work with our designers to create furniture that perfectly fits your vision and space.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Fast Delivery</CardTitle>
                <CardDescription>
                  Quick and secure shipping to your doorstep
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Professional delivery and setup service to ensure your furniture arrives in perfect condition.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
