"use client";
import Image from "next/image";

import { Carousel, CarouselItem } from "~/ui/primitives/carousel";

export function CarouselSection() {
  return (
    <section
      className={`
        py-12
        md:py-4
      `}
    >
      <div
        className={`
          max-w-9xl container mx-auto px-4
          sm:px-6
          lg:px-8
        `}
      >
        <Carousel className="mx-auto w-full">
          <CarouselItem>
            <div className="p-1">
              <div className="overflow-hidden rounded-xl">
                <Image
                  alt="Product 1"
                  className={`
                    h-[500px] w-full object-cover transition-transform
                    hover:scale-105
                  `}
                  height={800}
                  src="/carousel-img/2.png"
                  width={1200}
                />
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="p-1">
              <div className="overflow-hidden rounded-xl">
                <Image
                  alt="Product 2"
                  className={`
                    h-[500px] w-full object-cover transition-transform
                    hover:scale-105
                  `}
                  height={800}
                  src="/carousel-img/1.png"
                  width={1200}
                />
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="p-1">
              <div className="overflow-hidden rounded-xl">
                <Image
                  alt="Product 3"
                  className={`
                    h-[500px] w-full object-cover transition-transform
                    hover:scale-105
                  `}
                  height={800}
                  src="/carousel-img/3.png"
                  width={1200}
                />
              </div>
            </div>
          </CarouselItem>
        </Carousel>
      </div>
    </section>
  );
}
