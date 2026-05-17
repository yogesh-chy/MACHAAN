import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { MenuSection } from "@/components/landing/MenuSection";
import { AboutFeatures } from "@/components/landing/AboutFeatures";
import { Testimonials } from "@/components/landing/Testimonials";
import { Gallery } from "@/components/landing/Gallery";
import { CtaBanner } from "@/components/landing/CtaBanner";
import { Visit } from "@/components/landing/Visit";
import { Footer } from "@/components/landing/Footer";
import { CartDrawer } from "@/components/landing/CartDrawer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MenuSection />
        <AboutFeatures />
        <Testimonials />
        <Gallery />
        <CtaBanner />
        <Visit />
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}
