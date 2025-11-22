"use client";

import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden h-screen" id="about-us">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/DJI Photo 0515.jpg"
          alt="Star Marine Furniture Factory"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Additional shadow gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            About Star Marine Furniture
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="max-w-sm sm:max-w-md lg:max-w-2xl mx-auto text-center px-4 sm:px-0">
          {/* Content Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-white text-lg lg:text-xl leading-relaxed font-light text-justify">
              Established in 2009, Star Marine Furniture is a Vietnamese OEM and ODM manufacturer specializing in high-quality home furniture for living, dining, and bedroom spaces. Operating from a 7,000m² facility in Ho Chi Minh City with a dedicated team of around 100 professionals, we combine woodworking expertise with advanced CNC technology to deliver products that meet global standards of precision, comfort, and durability.
            </p>
            
            <p className="text-white/90 text-lg lg:text-xl leading-relaxed font-light text-justify">
              As a medium-sized manufacturer, we take pride in our flexibility, attention to detail, and commitment to long-term partnerships. With expertise in oak, plywood, MDF, metal, shagreen, glass, and stone finishes, we provide smart material solutions that meet diverse design goals and budget requirements.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export { AboutUs };
