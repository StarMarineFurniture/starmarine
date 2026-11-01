interface Logo {
  name: string;
  logo: string;
  className: string;
  href?: string;
}

interface Logos8Props {
  title?: string;
  subtitle?: string;
  logos?: Logo[];
}

const Logos8 = ({
  title = "Our Clients",
  subtitle = "We are proud to partner with leading furniture distributors and retailers across US, Australia, and Europe.",
  logos = [
    {
      name: "Moes",
      logo: "/logos/moeslogo.png",
      className: "h-12 w-auto",
      href: "https://www.moeshome.com/currentcollections/featured-collections/mako",
    },
    {
      name: "Sundays",
      logo: "/logos/sundayslogo.webp",
      className: "h-12 w-auto",
      href: "https://www.sundays-company.com/collections/best-sellers/products/square-up-sideboard-oak#internal",
    },
    {
      name: "Ambiluux",
      logo: "/logos/Ambiluux Logo.webp",
      className: "h-8 w-auto",
    },
    {
      name: "Early Settler",
      logo: "/logos/earlysettler.png",
      className: "h-8 w-auto",
    },
  ],
}: Logos8Props) => {
  return (
    <section className="py-10 lg:py-20" id="our-clients">
      <div className="ax-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center ">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">{title}</h2>
          <p className="text-muted-foreground mt-1 lg:text-lg">{subtitle}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-6 lg:gap-12">
            {logos.map((logo, index) => {
              const img = (
                <img
                  src={logo.logo}
                  alt={`${logo.name} logo`}
                  width={109}
                  height={48}
                  className={logo.className}
                />
              );
              return logo.href ? (
                <a key={index} href={logo.href} target="_blank" rel="noopener noreferrer">
                  {img}
                </a>
              ) : (
                <div key={index}>{img}</div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Logos8 };
