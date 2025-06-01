"use client";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "~/ui/primitives/button";

export function HeroSection() {
  return (
    <section
      className={`
        relative overflow-hidden py-24
        md:py-32
      `}
    >
      <div
        className={`
          bg-grid-black/[0.02] absolute inset-0
          bg-[length:20px_20px]
        `}
      />
      <div
        className={`
          relative z-10 container mx-auto max-w-7xl px-4
          sm:px-6
          lg:px-8
        `}
      >
        <div
          className={`
            grid items-center gap-10
            lg:grid-cols-2 lg:gap-12
          `}
        >
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              {/* <HeroBadge /> */}

              <motion.h1
                animate={{ opacity: 1, y: 0 }}
                className={`
                  font-display bg-gradient-to-r from-[#00C4CC] via-[#7D2AE8]
                  to-[#7D2AE8] bg-clip-text text-4xl leading-tight font-bold
                  tracking-tight text-transparent uppercase
                  sm:text-4xl
                  md:text-5xl
                  lg:leading-[1.1]
                `}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.7 }}
              >
                NAFISA International Trading(BD) LTD
              </motion.h1>
              <motion.p
                animate={{ opacity: 1, y: 0 }}
                className={`
                  max-w-[700px] text-lg text-muted-foreground
                  md:text-xl
                `}
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.2, duration: 0.7 }}
              >
                100% Export Oriented Germents Buying House, Exporting
                Germents Products to the World
              </motion.p>
            </div>
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className={`
                flex flex-col gap-3
                sm:flex-row
              `}
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <Link href="/products">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    className={`
                      h-12 cursor-pointer gap-1.5 px-8 transition-colors
                      duration-200
                    `}
                    size="lg"
                  >
                    Shop Now <ArrowRight className="h-4 w-4" />
                  </Button>
                </motion.div>
              </Link>
              {/* <Link href="/showcase">
                <Button
                  className="h-12 px-8 transition-colors duration-200"
                  size="lg"
                  variant="outline"
                >
                  View Showcase
                </Button>
              </Link> */}
            </motion.div>
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className={`
                flex flex-wrap gap-5 text-sm text-muted-foreground
              `}
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              <motion.div
                className="flex items-center gap-1.5"
                whileHover={{ y: -3 }}
              >
                <Truck className="h-5 w-5 text-primary/70" />
                <span>Free shipping over $50</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-1.5"
                whileHover={{ y: -3 }}
              >
                <Clock className="h-5 w-5 text-primary/70" />
                <span>24/7 Customer Support</span>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            className={`
              relative mx-auto hidden aspect-[4/3] w-full max-w-xl
              overflow-hidden rounded-xl border shadow-lg
              lg:block
            `}
            initial={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8 }}
          >
            <div
              className={`
                absolute inset-0 z-10 bg-gradient-to-tr from-primary/20
                via-transparent to-transparent
              `}
            />
            <Image
              alt="Shopping experience"
              className="object-cover"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              src="/hero-img.webp"
            />
          </motion.div>
        </div>
      </div>
      <div
        className={`
          absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent
          via-primary/20 to-transparent
        `}
      />
    </section>
  );
}
