import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { OpeningHours } from "@/components/OpeningHours";
import { Pricing } from "@/components/Pricing";
import { Services } from "@/components/Services";
import { Story } from "@/components/Story";
import { ScrollAnimations } from "@/components/animations/ScrollAnimations";
import { ScrollStory } from "@/components/animations/ScrollStory";

export default function Home() {
  return (
    <>
      <ScrollAnimations />
      <Header />
      <main>
        <Hero />
        <ScrollStory />
        <Services />
        <Story />
        <Pricing />
        <About />
        <OpeningHours />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
