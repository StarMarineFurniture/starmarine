import React from "react";

const AboutUs = () => {
  return (
    <section className="py-10 lg:py-20" id="about-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-8 lg:gap-12">
          <p className="col-span-2 font-bold ">About Us</p>

          <div className="col-span-4 ml-auto max-w-4xl space-y-6 lg:pl-8">
            <h1 className="text-2xl font-medium tracking-tight">
              Established in 2009, Star Marine Furniture is a Vietnamese OEM and ODM manufacturer specializing in high-quality home furniture for living, dining, and bedroom spaces. 
            </h1>
            <p className="text-foreground/40 w-fit text-lg">
              Operating from a 7,000m² facility in Ho Chi Minh City with a dedicated team of around 100 professionals, we combine woodworking expertise with advanced CNC technology to deliver products that meet global standards of precision, comfort, and durability.

            </p>
          </div>
        </div>
        
        {/* First image - visible only on mobile */}
        <div className="my-8 lg:hidden">
          <img
            src="/Desk.png"
            alt=""
            className="h-100 w-full object-cover"
          />
        </div>
        
        {/* Both images - visible only on desktop */}
        <div className="my-16 hidden lg:grid grid-cols-2 items-center gap-4">
          <img
            src="/Desk.png"
            alt=""
            className="h-150 w-full object-cover"
          />
          <img
            src="/SideTable.png"
            alt=""
            className="h-150 w-full object-cover saturate-0"
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-8 lg:gap-12">
          <p className="col-span-2 font-bold">Our Specialty</p>

          <div className="col-span-4 ml-auto max-w-4xl space-y-6 lg:pl-8">
            <h1 className="text-2xl font-medium tracking-tight">
              As a medium-sized manufacturer, we take pride in our flexibility, attention to detail, and commitment to long-term partnerships. With expertise in oak, plywood, MDF, metal, shagreen, glass, and stone finishes, we provide smart material solutions that meet diverse design goals and budget requirements.
            </h1>
            <p className="text-foreground/40 w-fit text-lg">
              Trusted by distributors and retailers across Australia, Europe, and the United States, Star Marine Furniture continues to grow as a reliable manufacturing partner recognized for consistency, quality, and integrity in every collaboration.
            </p>
          </div>
        </div>
        
        {/* Second image - visible only on mobile */}
        <div className="my-8 lg:hidden">
          <img
            src="/SideTable.png"
            alt=""
            className="h-100 w-full object-cover saturate-0"
          />
        </div>
      </div>
    </section>
  );
};

export { AboutUs };
