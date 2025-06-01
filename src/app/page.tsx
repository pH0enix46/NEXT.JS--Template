"use client";

import United24Banner from "~/ui/components/banners/u24";
import {
  AboutUsSection,
  CarouselSection,
  CategorySection,
  ContactSection,
  FeaturedProductsSection,
  FeaturesSection,
  GallerySection,
  HeroSection,
  StatsSection,
} from "~/ui/components/home";
import { TestimonialsSection } from "~/ui/components/testimonials/testimonials-with-marquee";

import { testimonials } from "./mocks";

export default function HomePage() {
  return (
    <>
      <main
        className={`
          flex min-h-screen flex-col gap-y-16 scroll-smooth bg-gradient-to-b
          from-muted/50 via-muted/25 to-background
        `}
        style={{ scrollBehavior: 'smooth' }}
      >
        {/* Hero Section */}
        <HeroSection />

        {/* Carousel Section */}
        <CarouselSection />

        {/* Stats Section */}
        <StatsSection />
        
{/* Gallery Section */}
        <GallerySection />

        {/* Category Section */}
        <CategorySection />

        {/* Featured Products Section */}
        <FeaturedProductsSection />

        {/* Testimonials Section */}
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
            <TestimonialsSection
              className="py-0"
              description="Don't just take our word for it - hear from our satisfied customers"
              testimonials={testimonials}
              title="What Our Customers Say"
            />
          </div>
        </section>

        {/* Features Section */}
        <FeaturesSection />

        {/* Contact Section */}
        <ContactSection />

        {/* About Us Section */}
        <AboutUsSection />

        {/* Sample banner */}
        <United24Banner animateGradient={false} />
      </main>
    </>
  );
}



