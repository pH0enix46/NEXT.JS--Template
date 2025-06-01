"use client";
import Image from "next/image";
import Link from "next/link";

// Sample data for employees with random names and designations
const employees = [
  {
    name: "Alex Johnson",
    designation: "Software Engineer",
  },
  {
    name: "Samantha Lee",
    designation: "UX Designer",
  },
  {
    name: "Michael Chen",
    designation: "Product Manager",
  },
  {
    name: "Emily Rodriguez",
    designation: "Marketing Specialist",
  },
  {
    name: "David Kim",
    designation: "Data Scientist",
  },
  {
    name: "Jessica Taylor",
    designation: "Frontend Developer",
  },
  {
    name: "Ryan Patel",
    designation: "DevOps Engineer",
  },
  {
    name: "Olivia Wilson",
    designation: "Content Strategist",
  }
];

export function CategorySection() {
  return (
    <section
      className={`
        py-12
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
            Our Employees
          </h2>
          <div className="mt-2 h-1 w-12 rounded-full bg-primary" />
          <p className="mt-4 max-w-2xl text-center text-muted-foreground">
           Our employees are the best in the business, we are committed to providing the best service to our customers
          </p>
        </div>
        <div
          className={`
            flex overflow-x-auto pb-4 gap-4 snap-x
            scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent
          `}
        >
          {employees.map((employee, index) => (
            <div
              className={`
                group relative flex flex-col space-y-4 overflow-hidden
                rounded-2xl border bg-card shadow transition-all duration-300
                hover:shadow-lg min-w-[250px] snap-start
                flex-shrink-0
              `}
              key={index}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <div
                  className={`
                    absolute inset-0 z-10 bg-gradient-to-t from-background/80
                    to-transparent
                  `}
                />
                <div className="flex items-center justify-center h-full">
                  <Image
                    alt={employee.name}
                    className={`
                      object-cover transition duration-300 rounded-full
                      group-hover:scale-105 w-32 h-32
                    `}
                    width={128}
                    height={128}
                    src="/default-avatar.png"
                  />
                </div>
              </div>
              <div className="relative z-20 -mt-6 p-4 text-center">
                <div className="mb-1 text-lg font-medium">
                  {employee.name}
                </div>
                <p className="text-sm text-muted-foreground">
                  {employee.designation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
