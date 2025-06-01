"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { featuredProductsHomepage } from "~/app/mocks";
import { ProductCard } from "~/ui/components/product-card";
import { Button } from "~/ui/primitives/button";

export function FeaturedProductsSection() {
  return (
    <section
      className={`
        bg-muted/50 py-12
        md:py-16
      `}
    >
      <div
        className={`
          container mx-auto max-w-7xl px-4
          sm:px-6
          lg:px-8
        `}
      >
        <div className="mb-8 flex flex-col items-center text-center">
          <h2
            className={`
              font-display text-3xl leading-tight font-bold tracking-tight
              md:text-4xl
            `}
          >
            Featured Products
          </h2>
          <div className="mt-2 h-1 w-12 rounded-full bg-primary" />
          <p className="mt-4 max-w-2xl text-center text-muted-foreground">
            Check out our latest and most popular tech items
          </p>
        </div>
        <div
          className={`
            grid grid-cols-1 gap-6
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
          `}
        >
          {featuredProductsHomepage.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link href="/products">
            <Button className="group h-12 px-8" size="lg" variant="outline">
              View All Products
              <ArrowRight
                className={`
                  ml-2 h-4 w-4 transition-transform duration-300
                  group-hover:translate-x-1
                `}
              />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
