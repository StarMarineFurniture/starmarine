"use client";

import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React, { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const Home = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const Images = [
    {
      image: "Website Header Image.png",
      title: "Star Marine Furniture",
      description: "Shaping Perfection. Delivering Comfort.",
      link: "#",
    },
    {
      image: "Website Header Image (1).png",
      title: "Star Marine Furniture",
      description: "IShaping Perfection. Delivering Comfort.",
      link: "#",
    },
    {
      image: "Website Header Image (2).png",
      title: "Star Marine Furniture",
      description: "Shaping Perfection. Delivering Comfort.",
      link: "#",
    },
  ];

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="pb-10 lg:pb-20 w-screen sm:ml-0 sm:w-auto px-0" id="home">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className=""
      >
        <Carousel
          setApi={setApi}
          className="w-full"
          opts={{
            loop: true,
            slidesToScroll: 1,
            align: "start",
            containScroll: false,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
              stopOnInteraction: true,
              stopOnMouseEnter: true,
            }),
          ]}
        >
          <CarouselContent className="flex w-full ml-0 sm:-ml-4">
            {Images.map((img, index) => (
              <CarouselItem key={index} className="w-full basis-full sm:basis-[91%] pl-0 sm:pl-4">
                <div className="p-0 sm:p-1">
                  <div
                    key={index}
                    className="h-166 bg-muted relative flex flex-col items-end justify-between p-4 sm:p-8"
                  >
                    <div className="pointer-events-none absolute left-0 top-0 h-full w-full">
                      <img
                        src={img.image}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="mt-36 z-10 text-white">
                      <h1 className="text-right text-6xl font-medium tracking-tight">
                        {img.title}
                      </h1>
                      <p className="my-6 max-w-lg text-right text-lg">
                        {img.description}
                      </p>
                    </div>
                    <div className="bg-muted00 z-10 flex w-full justify-between">
                      <a href={img.link}>
                        <Button
                          variant="outline"
                          className="text-md group flex w-fit items-center justify-center gap-2 rounded-full px-4 py-1 tracking-tight"
                        >
                          Try it for free
                          <ArrowRight className="size-4 -rotate-45 transition-all ease-out group-hover:ml-3 group-hover:rotate-0" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Dots */}
          <div className="mt-4 justify-center gap-2 hidden sm:flex">
            {Array.from({ length: 3 }).map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-2.5 w-2.5 rounded-full transition-all ${
                  current === index
                    ? "bg-primary w-4"
                    : "bg-muted-foreground/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </Carousel>
      </motion.div>
    </section>
  );
};

export { Home };

export const GRADIENT_ANGLES = {
  top: 0,
  right: 90,
  bottom: 180,
  left: 270,
};
