import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import { CartProvider } from "@/context/CartContext";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const sans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Machaan Cafe · Rooftop Chiya, Coffee & Lounge",
  description: "Machaan is Jhamsikhel's premier rooftop café escape. Savor our signature matka Masala Chiya, hand-poured artisan coffee, freshly baked pastries, and premium shisha lounge under Lalitpur's open skies.",
  openGraph: {
    title: "Machaan Café & Rooftop Connections Lounge",
    description: "Machaan is Jhamsikhel's premier rooftop café escape. Savor our signature matka Masala Chiya, hand-poured artisan coffee, freshly baked pastries, and premium shisha lounge under Lalitpur's open skies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`} suppressHydrationWarning>
      <body className="min-h-screen antialiased bg-brand-gray text-brand-dark" suppressHydrationWarning>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}


