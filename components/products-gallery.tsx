"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const ProductsGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const baseProducts = [
    { id: 1, image: "/products/anh-san-pham-1 (1).png" },
    { id: 2, image: "/products/anh-san-pham-1.png" },
    { id: 3, image: "/products/anh-san-pham-2 (1).png" },
    { id: 4, image: "/products/anh-san-pham-2.png" },
    { id: 5, image: "/products/anh-san-pham-3.png" },
    { id: 6, image: "/products/Bedroom Product Image 3.png" },
    { id: 7, image: "/products/product-image-1 (1).png" },
    { id: 8, image: "/products/product-image-1 (3).png" },
    { id: 9, image: "/products/product-image-1.png" },
    { id: 10, image: "/products/product-image-1761734240566.png" },
    { id: 11, image: "/products/product-image-1761734299095.png" },
    { id: 12, image: "/products/product-image-1761734338782.png" },
    { id: 13, image: "/products/product-image-1761734467174.png" },
    { id: 14, image: "/products/product-image-1761734596864.png" },
    { id: 15, image: "/products/product-image-1761735190995.png" },
    { id: 16, image: "/products/product-image-1761735237389.png" },
    { id: 17, image: "/products/product-image-1761735278376.png" },
    { id: 18, image: "/products/product-image-1761735442467.png" },
    { id: 19, image: "/products/product-image-1761735507125.png" },
    { id: 20, image: "/products/product-image-1761735622201.png" },
    { id: 21, image: "/products/product-image-1761735678145.png" },
    { id: 22, image: "/products/product-image-1761735733799.png" },
    { id: 23, image: "/products/product-image-1761736126351.png" },
    { id: 24, image: "/products/product-image-1761736176248.png" },
    { id: 25, image: "/products/product-image-1761736198365.png" },
    { id: 26, image: "/products/product-image-1761736239538.png" },
    { id: 27, image: "/products/product-image-1761815012130.png" },
    { id: 28, image: "/products/product-image-1761815185329.png" },
    { id: 29, image: "/products/product-image-1761815222493.png" },
    { id: 30, image: "/products/product-image-1761815507074.png" },
    { id: 31, image: "/products/product-image-1761815563850.png" },
    { id: 32, image: "/products/product-image-1761815680836.png" },
    { id: 33, image: "/products/product-image-1761816869282.png" },
    { id: 34, image: "/products/product-image-2 (1).png" },
    { id: 35, image: "/products/product-image-2 (2).png" },
    { id: 36, image: "/products/product-image-2 (3).png" },
    { id: 37, image: "/products/product-image-2 (4).png" },
    { id: 38, image: "/products/product-image-2 (5).png" },
    { id: 39, image: "/products/product-image-2 (6).png" },
    { id: 40, image: "/products/product-image-2 (7).png" },
    { id: 41, image: "/products/product-image-2 (8).png" },
    { id: 42, image: "/products/product-image-2.png" },
    { id: 43, image: "/products/product-image-3 (1).png" },
    { id: 44, image: "/products/product-image-3 (2).png" },
    { id: 45, image: "/products/product-image-3 (3).png" },
    { id: 46, image: "/products/product-image-3.png" },
    { id: 47, image: "/products/z7222320120330_a141535896b011d02b690f53f746285f.jpg" },
    { id: 48, image: "/products/z7222320210065_7855d74a72dcce0d39c7c296622a9098.jpg" }
  ];

  // Auto-advance slides
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % baseProducts.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [autoPlay, baseProducts.length]);

  const handlePrevious = () => {
    setAutoPlay(false);
    setCurrentIndex((prev) => (prev - 1 + baseProducts.length) % baseProducts.length);
    setTimeout(() => setAutoPlay(true), 5000);
  };

  const handleNext = () => {
    setAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % baseProducts.length);
    setTimeout(() => setAutoPlay(true), 5000);
  };

  // Get 3 thumbnails: current + next 2
  const getThumbnails = () => {
    return Array.from({ length: 3 }, (_, i) => {
      const index = (currentIndex + i) % baseProducts.length;
      return { ...baseProducts[index], thumbnailIndex: i };
    });
  };

  const handleThumbnailClick = (thumbnailIndex: number) => {
    if (thumbnailIndex === 0) return; // Already current image
    
    setAutoPlay(false);
    
    // Calculate target index
    const targetIndex = (currentIndex + thumbnailIndex) % baseProducts.length;
    setCurrentIndex(targetIndex);
    
    setTimeout(() => setAutoPlay(true), 5000);
  };

  return (
    <section className="w-full bg-slate-900 py-16" id="our-products">
      <div className="w-full">
        {/* Desktop Layout */}
        <div className="hidden md:block">
          <div className="grid grid-cols-2 min-h-[700px]">
            {/* Left Column - Main Image Only */}
            <div className="relative overflow-hidden">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={baseProducts[currentIndex].image}
                  alt={`Product ${baseProducts[currentIndex].id}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </motion.div>
            </div>

            {/* Right Column - Title, Description, Thumbnails, and Navigation */}
            <div className="p-12 flex flex-col justify-center text-white">
              {/* Section Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <h2 className="text-5xl font-bold mb-6 text-amber-400">
                  Featured Products
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-2">
                  With our extensive experience and established craftsmanship, we help you satisfy your clients' strict requirements.
                </p>
              </motion.div>

              {/* Thumbnails - 3 images with sliding animation */}
              <div className="mb-8">
                <div className="flex gap-6 w-fit">
                  <AnimatePresence mode="popLayout" initial={false}>
                    {getThumbnails().map((product) => (
                      <motion.div
                        key={`${product.id}-${currentIndex}`}
                        initial={{ x: 300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -300, opacity: 0 }}
                        transition={{ 
                          duration: 0.5, 
                          ease: "easeInOut",
                          delay: product.thumbnailIndex * 0.1 
                        }}
                        className="relative aspect-square cursor-pointer group overflow-hidden shadow-lg shrink-0 w-48"
                        onClick={() => handleThumbnailClick(product.thumbnailIndex)}
                      >
                        <Image
                          src={product.image}
                          alt={`Product ${product.id}`}
                          fill
                          sizes="(max-width: 768px) 96px, 192px"
                          className="object-cover transition-all duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-300" />
                        
                        {/* Current image indicator */}
                        {product.thumbnailIndex === 0 && (
                          <div className="absolute inset-0 border-4 border-amber-400/70" />
                        )}
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-transparent border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900 transition-colors duration-300"
                  onClick={handlePrevious}
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                
                <Button
                  variant="outline"
                  size="icon" 
                  className="bg-transparent border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900 transition-colors duration-300"
                  onClick={handleNext}
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden">
          <div className="min-h-[600px] flex flex-col">
            {/* Main Image */}
            <div className="flex items-center justify-center p-6">
              <div className="relative h-64 w-full max-w-sm overflow-hidden shadow-2xl">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={baseProducts[currentIndex].image}
                    alt={`Product ${baseProducts[currentIndex].id}`}
                    fill
                    sizes="(max-width: 640px) 100vw, 384px"
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 text-white">
              {/* Section Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <h2 className="text-3xl font-bold mb-4 text-amber-400">
                  Featured Products
                </h2>
                <p className="text-sm text-gray-300 leading-relaxed mb-4">
                  With our extensive experience and established craftsmanship, we help you satisfy your clients' strict requirements.
                </p>
              </motion.div>

              {/* Thumbnails - 3 images with sliding animation */}
              <div className="mb-6">
                <div className="flex space-x-4 justify-center w-fit mx-auto">
                  <AnimatePresence mode="popLayout" initial={false}>
                    {getThumbnails().map((product) => (
                      <motion.div
                        key={`${product.id}-mobile-${currentIndex}`}
                        initial={{ x: 150, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -150, opacity: 0 }}
                        transition={{ 
                          duration: 0.5, 
                          ease: "easeInOut",
                          delay: product.thumbnailIndex * 0.1 
                        }}
                        className="relative shrink-0 w-24 h-24 cursor-pointer group overflow-hidden shadow-lg"
                        onClick={() => handleThumbnailClick(product.thumbnailIndex)}
                      >
                        <Image
                          src={product.image}
                          alt={`Product ${product.id}`}
                          fill
                          sizes="96px"
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
                        
                        {/* Current image indicator */}
                        {product.thumbnailIndex === 0 && (
                          <div className="absolute inset-0 border-2 border-amber-400/70" />
                        )}
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-transparent border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900 transition-colors duration-300"
                  onClick={handlePrevious}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-transparent border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900 transition-colors duration-300"
                  onClick={handleNext}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ProductsGallery };