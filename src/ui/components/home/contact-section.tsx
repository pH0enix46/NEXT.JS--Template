"use client";
import Link from "next/link";

import { Button } from "~/ui/primitives/button";

export function ContactSection() {
  return (
    <section
      className={`
        py-12
        md:py-16
      `}
      id="contact"
    >
      <div
        className={`
          container mx-auto max-w-7xl px-4
          sm:px-6
          lg:px-8
        `}
      >
        <div
          className={`
            relative overflow-hidden rounded-xl bg-primary/10 p-8 shadow-lg
            md:p-12
          `}
        >
          <div
            className={`
              bg-grid-white/[0.05] absolute inset-0
              bg-[length:16px_16px]
            `}
          />
          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <h2
              className={`
                font-display text-3xl leading-tight font-bold tracking-tight
                md:text-4xl
              `}
            >
              Ready to Upgrade Your Tech?
            </h2>
            <p
              className={`
                mt-4 text-lg text-muted-foreground
                md:text-xl
              `}
            >
              Join thousands of satisfied customers and experience the best
              tech products on the market. Sign up today for exclusive deals
              and offers.
            </p>
            <div
              className={`
                mt-6 flex flex-col items-center justify-center gap-3
                sm:flex-row
              `}
            >
              <Link href="/auth/sign-up">
                <Button
                  className="h-12 px-8 transition-colors duration-200"
                  size="lg"
                >
                  Sign Up Now
                </Button>
              </Link>
              <Link href="/products">
                <Button
                  className="h-12 px-8 transition-colors duration-200"
                  size="lg"
                  variant="outline"
                >
                  Browse Products
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
