"use client";

import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
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
    },
    {
      image: "Website Header Image (1).png",
      title: "Star Marine Furniture",
      description: "Shaping Perfection. Delivering Comfort.", 
    }
  ];

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="w-full sm:w-auto" id="home">
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
          <CarouselContent className="flex w-full ml-0">
            {Images.map((img, index) => (
              <CarouselItem key={index} className="w-full basis-full pl-0">
                <div className="p-0">
                  <div
                    key={index}
                    className="h-screen bg-muted relative flex flex-col items-center justify-center"
                  >
                    <div className="pointer-events-none absolute left-0 top-0 h-full w-full">
                      <img
                        src={img.image}
                        alt=""
                        className="h-full w-ful object-cover"
                      />
                      {/* Dark overlay for better text readability */}
                      <div className="absolute inset-0 bg-black/20"></div>
                      {/* Additional gradient overlay */}
                      <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/20 to-black/10"></div>
                    </div>
                    <div className="z-10 text-white text-center">
                      <h1 className="text-center text-6xl font-medium tracking-tight">
                        {img.title}
                      </h1>
                      <p className="my-6 max-w-lg text-center text-lg mx-auto">
                        {img.description}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
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
