"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { href: "#", label: "Home", active: true },
  { href: "#menu", label: "Menu", active: false },
  { href: "#about-features", label: "About", active: false },
  { href: "#contact", label: "Contact", active: false },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#");
  const { cartCount, setIsOpen } = useCart();

  useEffect(() => {
    const onScroll = () => {
      // 1. Scrolled Navbar floating capsule state
      setScrolled(window.scrollY > 20);

      // 2. ScrollSpy highlight matching active sections
      const scrollPosition = window.scrollY + 160; // 160px buffer for smooth early highlight
      const sections = [
        { id: "#", offset: 0 },
        { id: "#menu", el: document.getElementById("menu") },
        { id: "#about-features", el: document.getElementById("about-features") },
        { id: "#contact", el: document.getElementById("contact") },
      ];

      let currentSection = "#";
      for (const section of sections) {
        if (section.el) {
          const top = section.el.offsetTop;
          if (scrollPosition >= top) {
            currentSection = section.id;
          }
        }
      }
      setActiveSection(currentSection);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pointer-events-none transition-all duration-300">
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between pointer-events-auto transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-2 px-6 sm:px-8 border border-brand-dark/5 mt-2 rounded-full"
            : "bg-white/80 backdrop-blur-sm py-3.5 px-6 sm:px-8 border border-brand-dark/10 mt-4 rounded-full shadow-sm"
        }`}
      >
        {/* Left Side: Logo */}
        <Link href="#" className="flex items-center group pl-3 sm:pl-6 lg:pl-8">
          <img
            src="/images/logo_transparent.png"
            alt="Machaan Logo"
            className="h-12 sm:h-14 w-auto object-contain"
          />
        </Link>











        {/* Middle Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`text-[15px] font-semibold transition-colors duration-200 hover:text-brand-orange ${
                activeSection === item.href ? "text-brand-orange" : "text-brand-dark/75"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Side: See Locations Button */}
        <div className="hidden md:flex items-center gap-4">
          {/* See Locations Pill Button */}
          <Link
            href="#contact"
            className="btn-dark !py-2.5 !px-6 text-[14px] flex items-center gap-2 group"
          >
            <Image
              src="https://cdn.prod.website-files.com/67bc2569f0aeab61e1df6d68/67bc2cae202fa4e17694ede8_Map%20Point.svg"
              alt="Map pin"
              width={14}
              height={14}
              className="group-hover:animate-bounce"
            />
            See Locations
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-3">
          {/* Hamburger Trigger */}
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-dark/15 hover:bg-brand-gray transition-colors duration-200"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <svg className="h-5 w-5 text-brand-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {open && (
        <div className="md:hidden border-t border-brand-dark/5 bg-white shadow-lg py-5 px-6 animate-fade-in">
          <nav className="flex flex-col gap-4">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`text-[15px] font-semibold py-1 hover:text-brand-orange transition-colors ${
                  activeSection === item.href ? "text-brand-orange" : "text-brand-dark"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <hr className="border-brand-dark/5 my-1" />
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-dark w-full mt-1 flex items-center justify-center gap-2"
            >
              <Image
                src="https://cdn.prod.website-files.com/67bc2569f0aeab61e1df6d68/67bc2cae202fa4e17694ede8_Map%20Point.svg"
                alt="Map pin"
                width={14}
                height={14}
              />
              See Locations
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
