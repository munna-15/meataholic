import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandIntro from "@/components/BrandIntro";
import Products from "@/components/Products";
import BrandStatement from "@/components/BrandStatement";
import HowToOrder from "@/components/HowToOrder";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#0a0908]">
      <Navbar />
      <Hero />
      <BrandIntro />
      <Products/>
      <BrandStatement/>
      <HowToOrder/>
      <WhatsAppButton/>
      <Footer/>
    </main>
  );
}
