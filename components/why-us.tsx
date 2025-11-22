"use client";

import { motion } from "framer-motion";
import { 
  Truck, 
  Award, 
  Target, 
  Settings, 
  Shield, 
  Clock 
} from "lucide-react";

const WhyUs = () => {
  const features = [
    {
      icon: Truck,
      title: "Scalable Production",
      description: "Up to 15 containers per month"
    },
    {
      icon: Award,
      title: "Continuous Innovation",
      description: "Over 15 years of continuous development and innovation"
    },
    {
      icon: Target,
      title: "Commitment to Detail & Quality",
      description: "Excellence in every piece we create"
    },
    {
      icon: Settings,
      title: "One-stop OEM/ODM Solutions",
      description: "Complete manufacturing solutions tailored to your needs"
    },
    {
      icon: Shield,
      title: "Quality Materials",
      description: "Durable and long-lasting furniture built to last"
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      description: "Quotation - 1 week, Sample - 15 days"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-background" id="why-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Why Choose Star Marine Furniture?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover what sets us apart in the furniture manufacturing industry
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-card rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export { WhyUs };