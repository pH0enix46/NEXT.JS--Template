import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

import { cn } from "~/lib/cn";

interface ProductCategory {
  items: {
    href: string;
    name: string;
  }[];
  title: string;
}

const productCategories: ProductCategory[] = [
  {
    items: [
      { href: "/", name: "Men's" },
      { href: "/", name: "Ladies" },
      { href: "/", name: "Kids" },
      { href: "/", name: "Fleece" },
      { href: "/", name: "Babies" },
      { href: "/", name: "Baby Rompers" },
      { href: "/", name: "Lingerie" },
      { href: "/", name: "Underwear" },
    ],
    title: "KNIT",
  },
  {
    items: [
      { href: "/", name: "Shirts" },
      { href: "/", name: "Ladies Woven Tops, Dress" },
      { href: "/", name: "Woven Bottom" },
      { href: "/", name: "Cargo Shorts" },
      { href: "/", name: "Swimming Wear" },
      { href: "/", name: "Jacket" },
      { href: "/", name: "Nightwear" },
      { href: "/", name: "Workwear" },
      { href: "/", name: "Blazer" },
    ],
    title: "WOVEN",
  },
  {
    items: [{ href: "/", name: "Flat Knit Sweater" }],
    title: "FLAT KNIT",
  },
  {
    items: [
      { href: "/", name: "Cap" },
      { href: "/", name: "Bed Sheet" },
      { href: "/", name: "Towel" },
    ],
    title: "OTHERS",
  },
];

export function ProductsModal() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        aria-expanded={isOpen}
        aria-haspopup="true"
        className={`
          flex cursor-pointer items-center gap-1 text-base font-medium uppercase
          hover:text-primary
        `}
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        type="button"
      >
        OUR PRODUCTS
      </button>

      {isOpen && (
        <div
          className={`
            absolute top-full left-1/2 z-50 mt-2 w-[90vw] max-w-[850px]
            -translate-x-1/2 overflow-hidden rounded-md bg-white shadow-lg
          `}
          onMouseLeave={() => setIsOpen(false)}
        >
          <div
            className={`
              grid grid-cols-2 gap-4 p-6
              md:grid-cols-4 md:gap-0 md:p-8
            `}
          >
            {productCategories.map((category) => (
              <div className="px-4" key={category.title}>
                <h3 className="mb-4 text-lg font-bold uppercase">
                  {category.title}
                </h3>
                <ul className="space-y-3 border-t pt-3">
                  {category.items.map((item) => (
                    <li key={item.name}>
                      <Link
                        className={cn(
                          `
                            block text-sm text-gray-600
                            hover:text-gray-900
                          `,
                          `
                            border-b border-transparent pb-1
                            hover:border-gray-400
                          `
                        )}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
