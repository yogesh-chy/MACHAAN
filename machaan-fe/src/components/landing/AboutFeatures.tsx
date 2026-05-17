"use client";

import Image from "next/image";
import Link from "next/link";

export function AboutFeatures() {
  return (
    <section id="about-features" className="bg-white py-20 md:py-28 px-6 lg:px-8 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-brand-dark mb-4">
            A Rooftop Haven
          </h2>
          <p className="text-base text-brand-dark/65 max-w-2xl mx-auto leading-relaxed">
            From artisan wood-steeped Chiya to hand-poured coffee, fresh golden pastries, and premium shisha lounge zones. Your warm, elevated oasis built for great conversations.
          </p>
        </div>

        {/* Alternate Rows Container */}
        <div className="space-y-24 md:space-y-36">
          {/* Row 1: Lavender Theme (Image Left, Text Right) */}
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Tilted / Overlapping Food Images */}
            <div className="relative flex justify-center items-center h-[320px] sm:h-[400px] lg:h-[450px]">
              {/* Image 1: Bottom Layer, Tilted Left */}
              <div className="absolute w-[60%] aspect-[4/3] rounded-3xl overflow-hidden shadow-md transform -rotate-6 -translate-x-12 translate-y-4 hover:rotate-0 hover:scale-105 transition-all duration-500 border-4 border-white z-10">
                <Image
                  src="https://cdn.prod.website-files.com/67bc2569f0aeab61e1df6d68/67bd50d2a53ab32d33ec2541_67bc57f39d697f0af49a856d_6797a7fd4031d62a158775455cad0c3d.avif"
                  alt="Food dish specialty"
                  fill
                  className="object-cover"
                  sizes="320px"
                />
              </div>
              {/* Image 2: Top Layer, Tilted Right */}
              <div className="absolute w-[55%] aspect-[4/3] rounded-3xl overflow-hidden shadow-xl transform rotate-6 translate-x-12 -translate-y-4 hover:rotate-0 hover:scale-105 transition-all duration-500 border-4 border-white z-20">
                <Image
                  src="https://cdn.prod.website-files.com/67bc2569f0aeab61e1df6d68/67bd50d2571d879de0d4dd99_fc2aa01e62e1f104bc0935e8d987ea0c.avif"
                  alt="Tasty burger basket"
                  fill
                  className="object-cover"
                  sizes="300px"
                />
              </div>
            </div>

            {/* Lavender Details Card */}
            <div className="bg-[#F3ECF8] rounded-[32px] p-8 sm:p-12 border border-brand-dark/5 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="h-14 w-14 rounded-2xl bg-white flex items-center justify-center shadow-sm mb-6 border border-purple-100">
                <Image
                  src="https://cdn.prod.website-files.com/67bc2569f0aeab61e1df6d68/67bc6db15d6b1e3357d2aaf0_Sketch-annotation-element-brush-pen-icon-heart.svg"
                  alt="Heart sticker"
                  width={28}
                  height={28}
                />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-brand-dark mb-4 leading-tight">
                Artisanal Chiya & Rich Blends.
              </h3>
              <p className="text-sm sm:text-base text-brand-dark/70 leading-relaxed mb-8">
                We source the finest organic tea leaves from the hills of Ilam and premium single-origin coffee beans roasted in the Himalayas. Every cup is brewed to aromatic perfection with spices crushed daily.
              </p>
              <Link
                href="#menu"
                className="group inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange/90 text-white font-bold text-[14px] px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
              >
                View Menu
                <Image
                  src="https://cdn.prod.website-files.com/67bc2569f0aeab61e1df6d68/67bc347e890c25592bb7a5e6_Arrow%20Right.svg"
                  alt="Arrow"
                  width={14}
                  height={14}
                  className="brightness-0 invert group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </div>

          {/* Row 2: Peach Theme (Text Left, Image Right) */}
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:grid-flow-row-dense">
            {/* Peach Details Card */}
            <div className="lg:col-start-1 bg-[#F9ECE0] rounded-[32px] p-8 sm:p-12 border border-brand-dark/5 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="h-14 w-14 rounded-2xl bg-white flex items-center justify-center shadow-sm mb-6 border border-orange-100">
                <Image
                  src="https://cdn.prod.website-files.com/67bc2569f0aeab61e1df6d68/67bd558c467ea09b7ceaadfa_Sketch-annotation-element-brush-pen-icon-ok-hand.svg"
                  alt="OK-hand sticker"
                  width={28}
                  height={28}
                />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-brand-dark mb-4 leading-tight">
                Bespoke Coffee & Fresh Bakery.
              </h3>
              <p className="text-sm sm:text-base text-brand-dark/70 leading-relaxed mb-8">
                Crispy golden croissants, soft almond pastries, and decadent wild-berry cakes baked fresh in-house every single morning. The perfect companions for long afternoons and warm rooftop vibes.
              </p>
              <Link
                href="#menu"
                className="group inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange/90 text-white font-bold text-[14px] px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
              >
                View Menu
                <Image
                  src="https://cdn.prod.website-files.com/67bc2569f0aeab61e1df6d68/67bc347e890c25592bb7a5e6_Arrow%20Right.svg"
                  alt="Arrow"
                  width={14}
                  height={14}
                  className="brightness-0 invert group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>

            {/* Masked Taco Image */}
            <div className="lg:col-start-2 relative flex justify-center items-center h-[320px] sm:h-[400px]">
              <div className="relative w-[75%] aspect-[5/4] rounded-[40px] overflow-hidden shadow-xl hover:scale-105 transition-transform duration-500 border-4 border-white">
                <Image
                  src="https://cdn.prod.website-files.com/67bc2569f0aeab61e1df6d68/67bd5483d586870e58ed4a5a_Union.avif"
                  alt="Delicious loaded taco"
                  fill
                  className="object-cover"
                  sizes="400px"
                />
              </div>
            </div>
          </div>

          {/* Row 3: Teal Theme (Image Left, Text Right) */}
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Overlapping Circles/Images */}
            <div className="relative flex justify-center items-center h-[340px] sm:h-[420px] lg:h-[450px]">
              {/* Image 1: Bottom Right */}
              <div className="absolute w-[45%] aspect-square rounded-full overflow-hidden shadow-md transform translate-x-16 translate-y-12 hover:scale-110 transition-transform duration-500 border-4 border-white z-10">
                <Image
                  src="https://cdn.prod.website-files.com/67bc2569f0aeab61e1df6d68/67bd56df571d879de0db3bc9_38f79f0a76517bf113ebafe57af183f0%20(1).avif"
                  alt="French fries"
                  fill
                  className="object-cover"
                  sizes="200px"
                />
              </div>
              {/* Image 2: Middle Center */}
              <div className="absolute w-[50%] aspect-square rounded-full overflow-hidden shadow-lg transform -translate-x-10 -translate-y-8 hover:scale-110 transition-transform duration-500 border-4 border-white z-20">
                <Image
                  src="https://cdn.prod.website-files.com/67bc2569f0aeab61e1df6d68/67bd56df36814c8a81d64d6a_72b026cd5da4f4fb297d0461cc99b8fd%20(2)%20(1).avif"
                  alt="Dipped bread rolls"
                  fill
                  className="object-cover"
                  sizes="220px"
                />
              </div>
              {/* Image 3: Top Right */}
              <div className="absolute w-[40%] aspect-square rounded-full overflow-hidden shadow-xl transform translate-x-10 -translate-y-16 hover:scale-110 transition-transform duration-500 border-4 border-white z-30">
                <Image
                  src="https://cdn.prod.website-files.com/67bc2569f0aeab61e1df6d68/67bd56dfa22422143989d898_4fb07b2b101cdecf642dd8ea9628453b%20(1).avif"
                  alt="Loaded pizza dish"
                  fill
                  className="object-cover"
                  sizes="180px"
                />
              </div>
            </div>

            {/* Mint/Teal Details Card */}
            <div className="bg-[#E6F5F2] rounded-[32px] p-8 sm:p-12 border border-brand-dark/5 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="h-14 w-14 rounded-2xl bg-white flex items-center justify-center shadow-sm mb-6 border border-teal-100">
                <Image
                  src="https://cdn.prod.website-files.com/67bc2569f0aeab61e1df6d68/67bd56df35ca1a8fc231f01a_Sketch-annotation-element-brush-pen-icon-smiley-smile.svg"
                  alt="Smile sticker icon"
                  width={28}
                  height={28}
                />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-brand-dark mb-4 leading-tight">
                Cozy Vibe & Open Rooftop Spaces.
              </h3>
              <p className="text-sm sm:text-base text-brand-dark/70 leading-relaxed mb-8">
                Whether you are looking to catch up with friends over high-grade matka chiya, finish your workspace projects, or relax in our premium shisha lounge zones, Machaan is built for warm, quiet connections.
              </p>
              <Link
                href="#menu"
                className="group inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange/90 text-white font-bold text-[14px] px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
              >
                View Menu
                <Image
                  src="https://cdn.prod.website-files.com/67bc2569f0aeab61e1df6d68/67bc347e890c25592bb7a5e6_Arrow%20Right.svg"
                  alt="Arrow"
                  width={14}
                  height={14}
                  className="brightness-0 invert group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
