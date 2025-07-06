import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Projects from "@/components/Projects";
import MapaLeaflet from "@/components/MapaLeaflet";
import BotonWhatsApp from "@/components/BotonWhatsApp";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <MapaLeaflet />
      <BotonWhatsApp />
    </>
  );
}
