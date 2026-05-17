"use client";

import Image from "next/image";

const galleryPhotos = [
  {
    src: "https://cdn.prod.website-files.com/67bc2569f0aeab61e1df6d68/67bdb559e45073bed154269e_Rectangle%2012243%20(1).avif",
    alt: "Spaghetti Bolognese",
  },
  {
    src: "https://cdn.prod.website-files.com/67bc2569f0aeab61e1df6d68/67bd5ebb22d243173d631e7e_6a6e95f804855ddd06f965d910c49a12.avif",
    alt: "Avocado Chicken Bowl",
  },
  {
    src: "https://cdn.prod.website-files.com/67bc2569f0aeab61e1df6d68/67bd5c87bb5faf182984b460_marquee-image-2.avif",
    alt: "Loaded Mexican Tacos",
  },
  {
    src: "https://cdn.prod.website-files.com/67bc2569f0aeab61e1df6d68/67bd50d2571d879de0d4dd99_fc2aa01e62e1f104bc0935e8d987ea0c.avif",
    alt: "Gourmet Burger and Fries",
  },
  {
    src: "https://cdn.prod.website-files.com/67bc2569f0aeab61e1df6d68/67bd5483d586870e58ed4a5a_Union.avif",
    alt: "Crunchy Soft Tacos",
  },
  {
    src: "https://cdn.prod.website-files.com/67bc2569f0aeab61e1df6d68/67bc3127c169326a2294e4d8_7bde71aea418e622523427f5eae5c86e.avif",
    alt: "Crispy Spring Rolls",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="bg-brand-gray py-20 md:py-28 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Gallery Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-brand-dark mb-4">
            A Feast for Your Eyes
          </h2>
          <p className="text-sm sm:text-base text-brand-dark/60 leading-relaxed max-w-md mx-auto">
            Step inside our visual kitchen and browse through our daily gourmet culinary showcase.
          </p>
        </div>
 
        {/* Infinite Right-to-Left Scrolling Photo Ribbon */}
        <div className="relative w-full overflow-hidden py-4 select-none">
          {/* Subtle horizontal fade-out borders on left and right for high-end look */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-brand-gray to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-brand-gray to-transparent z-10 pointer-events-none" />
          
          <div className="flex gap-6 w-max shrink-0 animate-marquee-left hover:[animation-play-state:paused]">
            {/* Render photos repeated twice for seamless loop */}
            {[...galleryPhotos, ...galleryPhotos].map((photo, i) => (
              <div
                key={`${photo.src}-${i}`}
                className={`relative overflow-hidden border border-brand-dark/5 bg-white shadow-sm h-[260px] sm:h-[300px] aspect-[4/3] shrink-0 transition-all duration-300 ${
                  i % 2 === 0 ? "rounded-[32px_12px_32px_12px]" : "rounded-[12px_32px_12px_32px]"
                }`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 250px, 350px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
