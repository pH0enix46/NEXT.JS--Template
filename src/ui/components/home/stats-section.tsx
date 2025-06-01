"use client";
import { Building, Calendar, Factory, Users } from "lucide-react";

export function StatsSection() {
  return (
    <section className="bg-background py-16">
      <div
        className={`
          container mx-auto max-w-7xl px-4
          sm:px-6
          lg:px-8
        `}
      >
        <div
          className={`
            grid grid-cols-2 gap-8 text-center
            md:grid-cols-4
          `}
        >
          <div className="flex flex-col items-center">
            <div className="mb-4">
              <Calendar className="h-12 w-12 text-gray-500" />
            </div>
            <h2 className="text-5xl font-bold text-[#ffd700]">1998</h2>
            <p className="mt-2 font-semibold text-gray-500">Established</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="mb-4">
              <Users className="h-12 w-12 text-gray-500" />
            </div>
            <h2 className="text-5xl font-bold text-[#ffd700]">350</h2>
            <p className="mt-2 font-semibold text-gray-500">Skilled Employees</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="mb-4">
              <Factory className="h-12 w-12 text-gray-500" />
            </div>
            <h2 className="text-5xl font-bold text-[#ffd700]">134</h2>
            <p className="mt-2 font-semibold text-gray-500">Associated Factories</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="mb-4">
              <Building className="h-12 w-12 text-gray-500" />
            </div>
            <h2 className="text-5xl font-bold text-[#ffd700]">4</h2>
            <p className="mt-2 font-semibold text-gray-500">Locations</p>
          </div>
        </div>
      </div>
    </section>
  );
}
