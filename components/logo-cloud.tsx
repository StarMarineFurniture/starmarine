interface Logo {
  name: string;
  logo: string;
  className: string;
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
      name: "Ambiluux",
      logo: "/logos/Ambiluux Logo.webp",
      className: "h-8 w-auto",
    },
    {
      name: "Early Settler",
      logo: "/logos/earlysettler.png",
      className: "h-8 w-auto",
    },
    {
      name: "Moes",
      logo: "/logos/moeslogo.png",
      className: "h-12 w-auto",
    },
    {
      name: "Sundays",
      logo: "/logos/sundayslogo.webp",
      className: "h-12 w-auto",
    },
  ],
}: Logos8Props) => {
  return (
    <section className="py-10 lg:py-20">
      <div className="ax-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center ">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">{title}</h2>
          <p className="text-muted-foreground mt-1 lg:text-lg">{subtitle}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-6 lg:gap-12">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo.logo}
                alt={`${logo.name} logo`}
                width={109}
                height={48}
                className={logo.className}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Logos8 };
