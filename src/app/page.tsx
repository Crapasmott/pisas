"use client"; // o mantener como Server Component

import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Projects from "@/components/Projects";
import PqrButton from "@/components/PqrButton";

const MapaLeaflet = dynamic(() => import("@/components/MapaLeaflet"), {
  ssr: false,
});
const BotonWhatsApp = dynamic(() => import("@/components/BotonWhatsApp"), {
  ssr: false,
});

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
       <PqrButton />
    </>
  );
}
