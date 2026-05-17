"use client";

import Image from "next/image";
import Link from "next/link";

export function CtaBanner() {
  return (
    <section className="bg-brand-gray py-16 md:py-24 px-6 lg:px-8 overflow-hidden">
      <div className="mx-auto max-w-7xl relative">
        {/* Main CTA Card Inset Container */}
        <div className="relative bg-[#F9ECE0] rounded-[32px] border border-brand-dark/5 shadow-md p-8 sm:p-16 text-center max-w-5xl mx-auto overflow-hidden">
          
          {/* Floating Left Decoration (Tilted Burger) */}
          <div className="hidden lg:block absolute -left-16 top-1/2 -translate-y-1/2 w-48 h-40 transform -rotate-12 hover:rotate-0 hover:scale-105 transition-all duration-500 z-10">
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-md border-2 border-white">
              <Image
                src="https://cdn.prod.website-files.com/67bc2569f0aeab61e1df6d68/67bd50d2571d879de0d4dd99_fc2aa01e62e1f104bc0935e8d987ea0c.avif"
                alt="Burger basket decor"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Floating Right Decoration (Tilted Dish) */}
          <div className="hidden lg:block absolute -right-16 top-1/2 -translate-y-1/2 w-48 h-40 transform rotate-12 hover:rotate-0 hover:scale-105 transition-all duration-500 z-10">
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-md border-2 border-white">
              <Image
                src="https://cdn.prod.website-files.com/67bc2569f0aeab61e1df6d68/67bd7486c17570aff76bff97_Group%2062.avif"
                alt="Avocado toast decor"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Central Content */}
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            {/* Logo chef badge */}
            <img
              src="/images/logo_transparent.png"
              alt="Machaan Logo"
              className="h-20 w-auto object-contain mb-6"
            />







            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-brand-dark mb-4">
              Don’t Wait – Explore Our Menu!
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-brand-dark/70 mb-10 leading-relaxed font-medium">
              Artisanal wood-steeped Chiya, single-origin roasted coffees, fresh daily pastries, and premium shisha under Jhamsikhel's open skies.
            </p>

            {/* Explore Menu Pill Button */}
            <Link
              href="#menu"
              className="group inline-flex items-center justify-between gap-6 bg-brand-orange hover:bg-brand-orange/90 text-brand-dark font-bold text-[14px] pl-6 pr-2 py-2 rounded-full shadow-md shadow-brand-orange/25 transition-all duration-300 hover:scale-105"
            >
              Explore Menu
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white transition-transform duration-300 group-hover:translate-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-3.5 h-3.5 text-brand-dark"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
