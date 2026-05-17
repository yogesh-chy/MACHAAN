"use client";

import Image from "next/image";

interface TestimonialItem {
  title: string;
  quote: string;
  name: string;
  role: string;
  avatar: string;
  bgColor: string;
}

const reviews: TestimonialItem[] = [
  {
    title: "Simply Delicious",
    quote: "Ground beef, grilled chicken, spicy turkey, or savory lamb - their burgers are cooked to pure perfection! Handpicked ingredients shine in every single bite.",
    name: "John Doe",
    role: "Regular Customer",
    avatar: "https://cdn.prod.website-files.com/67bc2569f0aeab61e1df6d68/67ffb5d8a349105824eaede8_19591.avif",
    bgColor: "bg-[#FBE2E8]", // Soft Pink
  },
  {
    title: "Our Go-To Spot",
    quote: "The pizza crust is exceptionally crispy, and the fresh mozzarella coupled with handpicked sweet basil leaves makes it the absolute finest Margherita in town.",
    name: "Sarah Miller",
    role: "Local Foodie",
    avatar: "https://cdn.prod.website-files.com/67bc2569f0aeab61e1df6d68/67ffb5d89210644abd6009d2_896.avif",
    bgColor: "bg-[#F9ECE0]", // Soft Peach
  },
  {
    title: "Top-Notch Service",
    quote: "I am absolutely blown away by their rapid home delivery service! Thermally sealed packaging means the sandwiches arrive fresh, crisp, and piping hot.",
    name: "Alex Rivera",
    role: "Daily Diner",
    avatar: "https://cdn.prod.website-files.com/67bc2569f0aeab61e1df6d68/67ffb5d8f27663ef9335ca65_5677.avif",
    bgColor: "bg-[#F3ECF8]", // Soft Lavender
  },
  {
    title: "Unforgettable Flavors",
    quote: "A premium masterclass in taste! We gathered here for a corporate lunch, and every colleague was delighted by the authentic recipes and modern presentation.",
    name: "Emma Watson",
    role: "Event Organiser",
    avatar: "https://cdn.prod.website-files.com/67bc2569f0aeab61e1df6d68/67bd6a653f7495f511046948_Avatar.avif",
    bgColor: "bg-[#FDF3DD]", // Soft Gold
  },
];

export function Testimonials() {
  return (
    <section className="bg-white py-20 md:py-28 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-brand-dark mb-4">
            They Love&apos;s Us
          </h2>
          <p className="text-base text-brand-dark/65 max-w-2xl mx-auto leading-relaxed">
            From classic favorites to modern culinary creations, our menu is designed to tantalize your taste buds. Every dish is made with the freshest ingredients and an extra dash of love.
          </p>
        </div>

        {/* Infinite Left-to-Right Scrolling Marquee Container */}
        <div className="relative w-full overflow-hidden py-4 select-none">
          {/* Subtle horizontal fade-out borders on left and right for high-end look */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          <div className="flex gap-6 w-max shrink-0 animate-marquee-right hover:[animation-play-state:paused]">
            {/* Render reviews repeated twice to create seamless loop */}
            {[...reviews, ...reviews].map((rev, idx) => (
              <div
                key={`${rev.title}-${idx}`}
                className={`flex-none w-[280px] sm:w-[320px] md:w-[340px] flex flex-col justify-between rounded-[32px_12px_32px_12px] p-8 border border-brand-dark/5 shadow-sm hover:shadow-md transition-all duration-300 ${rev.bgColor}`}
              >
                <div>
                  {/* 5 Gold Stars */}
                  <div className="mb-6 relative h-5 w-24">
                    <Image
                      src="https://cdn.prod.website-files.com/67bc2569f0aeab61e1df6d68/67bd63890a9390669cb52ba2_Group%2064%20(1).svg"
                      alt="5 Star Rating"
                      fill
                      className="object-contain object-left animate-pulse"
                    />
                  </div>

                  {/* Bold Review Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-brand-dark mb-3">
                    {rev.title}
                  </h3>

                  {/* Quote Body */}
                  <p className="text-sm leading-relaxed text-brand-dark/75 mb-8">
                    &ldquo;{rev.quote}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3 border-t border-brand-dark/5 pt-5 mt-auto">
                  <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-white shadow-sm">
                    <Image
                      src={rev.avatar}
                      alt={rev.name}
                      fill
                      className="object-cover"
                      sizes="44px"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-brand-dark">{rev.name}</p>
                    <p className="text-[11px] font-semibold text-brand-dark/45 uppercase tracking-wider">
                      {rev.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
