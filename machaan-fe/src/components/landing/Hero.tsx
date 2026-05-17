"use client";

import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative pt-28 pb-12 bg-brand-gray px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Inset Rounded Hero Card */}
        <div className="relative overflow-hidden rounded-[32px] bg-brand-dark min-h-[580px] sm:min-h-[640px] flex items-center shadow-lg border border-brand-dark/10">
          {/* Background Image of Spring Rolls */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://cdn.prod.website-files.com/67bc2569f0aeab61e1df6d68/67bc3127c169326a2294e4d8_7bde71aea418e622523427f5eae5c86e.avif"
              alt="Delicious Spring Rolls"
              fill
              className="object-cover object-center"
              sizes="100vw"
              priority
            />
            {/* Soft dark radial-linear overlay for premium look */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/85 via-brand-dark/65 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-transparent to-transparent" />
          </div>

          {/* Hero Content Area */}
          <div className="relative z-10 w-full max-w-3xl px-8 py-16 sm:px-16 lg:py-24 text-white">
            {/* H1 Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6 animate-fade-in font-sans">
              Savor the Taste of <br className="hidden sm:inline" /> Perfection.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-white/80 max-w-lg mb-10 leading-relaxed font-sans font-medium">
              A cozy rooftop escape serving artisanal wood-steeped Chiya, single-origin coffees, fresh daily bakery treats, and premium shisha under Jhamsikhel's open skies.
            </p>

            {/* Explore Menu Pill Button */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="#menu"
                className="group inline-flex items-center justify-between gap-6 bg-brand-orange hover:bg-brand-orange/90 text-brand-dark font-bold text-[15px] pl-7 pr-2.5 py-2.5 rounded-full shadow-lg shadow-brand-orange/25 transition-all duration-300 hover:scale-105"
              >
                Explore Menu
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white transition-transform duration-300 group-hover:translate-x-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 text-brand-dark"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
