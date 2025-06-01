"use client";

export function AboutUsSection() {
  return (
    <section
      className={`
        py-12
        md:py-16
      `}
      id="about-us"
    >
      <div
        className={`
          container mx-auto max-w-7xl px-4
          sm:px-6
          lg:px-8
        `}
      >
        <div className="mb-8 text-left">
          <h2
            className={`
              font-display text-3xl leading-tight font-bold tracking-tight
              md:text-4xl
            `}
          >
            ABOUT US
          </h2>
          <div className="mt-2 h-1 w-12 rounded-full bg-primary" />
          <p
            className={`
              mt-6 text-muted-foreground
              md:text-lg
            `}
          >
            Nafisa Int'l Trading (BD) Ltd is a well-renowned Buying & Trading house which is vertically integrated through its own
            Garments Manufacturing & exporting unit EFL & Jarin Composite Mills Ltd, Printing & Embroider unit and Logistic unit
            Jarin Global Logistics
          </p>
        </div>
      </div>
    </section>
  );
}
