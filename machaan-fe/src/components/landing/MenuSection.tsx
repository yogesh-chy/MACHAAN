"use client";

import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

interface MenuItem {
  name: string;
  category: "burger" | "pizza" | "subway";
  price: number;
  priceString: string;
  description: string;
  image: string;
  bgColor: string;
  btnBg: string;
}

const dishes: MenuItem[] = [
  {
    name: "Cheesy Delight",
    category: "burger",
    price: 8.99,
    priceString: "$ 8.99 USD",
    description: "Ground beef, grilled chicken, spicy turkey, or savory lamb.",
    image: "https://cdn.prod.website-files.com/67bc4e935e6c1d09740e0331/67bc58df02b88af8f9e9448e_67bc56484586166657ab903e_2b14c02189bf1f826c1546ad5d171d40%20(1).avif",
    bgColor: "bg-[#F9ECE0]", // Soft Peach
    btnBg: "bg-[#FEDF1A] !text-[#1E1611] hover:bg-[#E5A200]", // Brand Yellow
  },
  {
    name: "Margherita Delight",
    category: "pizza",
    price: 12.99,
    priceString: "$ 12.99 USD",
    description: "Mozzarella, pepperoni, bell peppers, or olives (fresh basil for a burst of flavor).",
    image: "https://cdn.prod.website-files.com/67bc4e935e6c1d09740e0331/67bc59fe1890b71ab3a28470_67bc57f31dcaa0bb6040a878_953326a26c7a0a6fb28ac4d571844bbb%20(1).avif",
    bgColor: "bg-[#F3ECF8]", // Soft Lavender
    btnBg: "bg-[#503A73] hover:bg-[#3f2d5c]", // Premium Deep Purple
  },
  {
    name: "Italian BMT",
    category: "subway",
    price: 8.99,
    priceString: "$ 8.99 USD",
    description: "Sliced salami, roasted peppers, fresh mozzarella, and arugula.",
    image: "https://cdn.prod.website-files.com/67bc4e935e6c1d09740e0331/67bc5ae1598588c3cd9623b4_67bc57f344a3c692ddd17fc1_65d7e5250343cc7cccde0962259b62b7%20(1)%20(1).avif",
    bgColor: "bg-[#E6F5F2]", // Soft Mint
    btnBg: "bg-[#1E6862] hover:bg-[#154c47]", // Dark Teal
  },
];

const categories = [
  { id: "all", label: "All Items" },
  { id: "burger", label: "Burgers" },
  { id: "pizza", label: "Pizzas" },
  { id: "subway", label: "Subways" },
];

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const { addToCart } = useCart();

  const filteredDishes =
    activeCategory === "all"
      ? dishes
      : dishes.filter((dish) => dish.category === activeCategory);

  return (
    <section id="menu" className="bg-brand-gray py-20 md:py-28 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-brand-dark mb-4">
            Our Signature Dishes
          </h2>
          <p className="text-base text-brand-dark/65 max-w-2xl mx-auto leading-relaxed">
            From classic favorites to modern culinary creations, our menu is designed to tantalize your taste buds. Every dish is made with the freshest ingredients and an extra dash of love.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-brand-dark text-white shadow-md shadow-brand-dark/15 scale-105"
                  : "bg-white text-brand-dark/70 hover:bg-brand-gray border border-brand-dark/5"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dishes Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredDishes.map((dish) => (
            <article
              key={dish.name}
              className={`flex flex-col rounded-[32px_12px_32px_12px] overflow-hidden ${dish.bgColor} border border-brand-dark/5 shadow-sm hover:shadow-md transition-all duration-300 group`}
            >
              {/* Product Thumbnail Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden p-6 pb-2">
                <div className="relative h-full w-full overflow-hidden rounded-[24px_8px_24px_8px]">
                  {/* Floating Custom Badge */}
                  {dish.category === "burger" && (
                    <div className="absolute top-3 right-3 z-10 bg-brand-orange text-brand-dark text-[11px] font-extrabold px-3 py-1 rounded-full shadow-md animate-pulse">
                      ✨ Chef's Special
                    </div>
                  )}
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 360px"
                  />
                </div>
              </div>

              {/* Card Details */}
              <div className="flex-1 flex flex-col justify-between p-6 pt-2">
                <div>
                  <div className="flex items-baseline justify-between gap-3 mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-brand-dark">
                      {dish.name}
                    </h3>
                  </div>
                  <span className="inline-block text-base font-bold text-brand-orange mb-3">
                    {dish.priceString}
                  </span>
                  <p className="text-sm leading-relaxed text-brand-dark/70 mb-6">
                    {dish.description}
                  </p>
                </div>

                {/* Add to Cart Button */}
                <button
                  type="button"
                  onClick={() =>
                    addToCart({
                      name: dish.name,
                      price: dish.price,
                      priceString: dish.priceString,
                      description: dish.description,
                      image: dish.image,
                    })
                  }
                  className={`w-full ${dish.btnBg} text-white font-bold py-3.5 px-6 rounded-full flex items-center justify-center gap-2.5 transition-all duration-300 hover:scale-[1.02] active:scale-100 shadow-md shadow-brand-dark/5`}
                >
                  <Image
                    src="https://cdn.prod.website-files.com/67bc2569f0aeab61e1df6d68/67bc2b1ec4a256d6098e6170_Cart%2016.svg"
                    alt="Cart"
                    width={16}
                    height={16}
                    className={dish.category === "burger" ? "brightness-0" : "brightness-0 invert"}
                  />
                  Add to cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
