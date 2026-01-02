"use client";

import { motion } from "framer-motion";

const Facility = () => {
  const facilityImages = [
    {
      src: "Cropped DJI 0506.jpg", // You'll need to replace with actual image paths
      alt: "CNC Manufacturing Equipment"
    },
    {
      src: "Cropped DJI 0544.jpg", // Replace with your uploaded image paths
      alt: "Precision Cutting Technology"
    },
    {
      src: "Cropped DJI 0642.jpg",
      alt: "Quality Control and Assembly"
    },
    {
      src: "Cropped Image.jpg",
      alt: "Wood Processing Department"
    },
    {
      src: 'Product Image (3).png',
      alt: 'Machine Picture'
    },
    {
      src: 'Product Image (4).png',
      alt: 'Assembly Line'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-background" id="facility">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Manufacturing Facility
          </h2>
          <p className="lg:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            7,000m² facility in Ho Chi Minh City with a dedicated team of around 100 professionals
          </p>
        </motion.div>

        {/* Image Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="md:grid md:grid-cols-3 md:grid-rows-2 md:gap-6 lg:gap-8"
        >
          {/* Mobile horizontal scroll */}
          <div className="flex overflow-x-auto gap-4 pb-4 md:hidden snap-x snap-mandatory scrollbar-hide">
            {facilityImages.map((image, index) => (
              <motion.div
                key={index}
                variants={imageVariants}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 shrink-0 w-80 snap-start"
              >
                <div className="aspect-4/3 overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Overlay for better text visibility if needed */}
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
          
          {/* Desktop grid */}
          <div className="hidden md:contents">
            {facilityImages.map((image, index) => (
              <motion.div
                key={index}
                variants={imageVariants}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-4/3 overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Overlay for better text visibility if needed */}
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export { Facility };