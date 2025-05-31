"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { cn } from "~/lib/utils";
import { Button } from "~/ui/primitives/button";

// Simple client-side carousel component for Next.js 15
const Carousel = ({
  opts,
  orientation = "horizontal",
  className,
  children,
  ...props
}: {
  opts?: any;
  orientation?: "horizontal" | "vertical";
  className?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    ...opts,
    axis: orientation === "horizontal" ? "x" : "y",
  });
  
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  const scrollPrev = React.useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = React.useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  
  const onSelect = React.useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className={cn("relative", className)} {...props}>
      <div ref={emblaRef} className="overflow-hidden">
        <div className={cn(
          "flex", 
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col"
        )}>
          {children}
        </div>
      </div>
      <Button
        variant="outline"
        size="icon"
        className={cn(
          "absolute h-8 w-8 rounded-full",
          orientation === "horizontal"
            ? "left-2 top-1/2 -translate-y-1/2"
            : "top-2 left-1/2 -translate-x-1/2 rotate-90",
          !canScrollPrev && "opacity-50 cursor-not-allowed"
        )}
        disabled={!canScrollPrev}
        onClick={scrollPrev}
      >
        <ArrowLeft className="h-4 w-4" />
        <span className="sr-only">Previous slide</span>
      </Button>
      <Button
        variant="outline"
        size="icon"
        className={cn(
          "absolute h-8 w-8 rounded-full",
          orientation === "horizontal"
            ? "right-2 top-1/2 -translate-y-1/2"
            : "bottom-2 left-1/2 -translate-x-1/2 rotate-90",
          !canScrollNext && "opacity-50 cursor-not-allowed"
        )}
        disabled={!canScrollNext}
        onClick={scrollNext}
      >
        <ArrowRight className="h-4 w-4" />
        <span className="sr-only">Next slide</span>
      </Button>
    </div>
  );
};

const CarouselItem = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn("min-w-0 shrink-0 grow-0 basis-full pl-4", className)}
      {...props}
    >
      {children}
    </div>
  );
};

// Empty component that just renders children directly
const CarouselContent = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

// These components are no longer needed but exported for compatibility
const CarouselPrevious = () => null;
const CarouselNext = () => null;

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
};
