"use client";

import Image from "next/image";
import Link from "next/link";

const navigateLinks = [
  { label: "Home", href: "#" },
  { label: "Home V2", href: "#" },
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about-features" },
  { label: "Contact", href: "#contact" },
];

const menuCategories = [
  { label: "Burger", href: "#menu" },
  { label: "Pizza", href: "#menu" },
  { label: "Subway", href: "#menu" },
];

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/unifiedui" },
  { label: "Instagram", href: "https://www.instagram.com/unifiedui" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/unifiedui" },
  { label: "Twitter", href: "https://twitter.com/unifiedUI" },
];

export function Footer() {
  return (
    <footer className="bg-brand-gray text-brand-dark pt-16 pb-8 px-6 lg:px-8 border-t border-brand-dark/10">
      <div className="mx-auto max-w-7xl">
        {/* Footer Top Grid */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4 mb-14">
          
          {/* Column 1: Navigate */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-brand-orange mb-5">
              Navigate
            </h3>
            <ul className="space-y-3.5">
              {navigateLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-brand-dark/75 hover:text-brand-orange transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Menu */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-brand-orange mb-5">
              Menu
            </h3>
            <ul className="space-y-3.5">
              {menuCategories.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-brand-dark/75 hover:text-brand-orange transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Follow Us */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-brand-orange mb-5">
              Follow Us
            </h3>
            <ul className="space-y-3.5">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] text-brand-dark/75 hover:text-brand-orange transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-brand-orange mb-5">
              Contact
            </h3>
            <ul className="space-y-4">
              {/* Phone */}
              <li className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-dark/5 shrink-0">
                  <span className="text-xs">📞</span>
                </div>
                <a
                  href="tel:602-774-4735"
                  className="text-[14px] text-brand-dark/75 hover:text-brand-orange transition-colors duration-200"
                >
                  602-774-4735
                </a>
              </li>

              {/* Email */}
              <li className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-dark/5 shrink-0">
                  <span className="text-xs">✉️</span>
                </div>
                <a
                  href="mailto:hi@unidine.co"
                  className="text-[14px] text-brand-dark/75 hover:text-brand-orange transition-colors duration-200 truncate"
                >
                  hi@unidine.co
                </a>
              </li>

              {/* Address */}
              <li className="flex gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-dark/5 shrink-0 mt-1">
                  <span className="text-xs">📍</span>
                </div>
                <p className="text-[13px] text-brand-dark/70 leading-normal">
                  11022 South 51st Street <br />
                  Suite 105, Phoenix, AZ 85044
                </p>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright & utility links */}
        <div className="border-t border-brand-dark/10 pt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-xs text-brand-dark/50">
          <p>© {new Date().getFullYear()}, UnifiedUI | All right reserved.</p>
          <div className="flex flex-wrap gap-4 sm:gap-6">
            <a href="#" className="hover:text-brand-orange transition-colors text-brand-dark/60">
              License
            </a>
            <a href="#" className="hover:text-brand-orange transition-colors text-brand-dark/60">
              Changelog
            </a>
            <a href="#" className="hover:text-brand-orange transition-colors text-brand-dark/60">
              Style Guide
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
