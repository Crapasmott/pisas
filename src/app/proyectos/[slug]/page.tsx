"use client";

import { useParams } from "next/navigation";
import { proyectos } from "@/data/proyectos";
import dynamic from "next/dynamic";
import Image from "next/image";
import Header from "@/components/Header";
import BotonWhatsApp from "@/components/BotonWhatsApp";

const MapaLeafletProyecto = dynamic(() => import("@/components/MapaLeafletProyecto"), {
  ssr: false,
});

export default function ProyectoDetalle() {
  const { slug } = useParams();
  const proyecto = proyectos.find((p) => p.slug === slug);

  if (!proyecto) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Proyecto no encontrado</p>
      </div>
    );
  }

  return (
    <>
      <Header />
      <main className="pt-28 pb-24 px-6 bg-white text-gray-900">
        <h1 className="text-4xl font-bold text-blue-800 mb-4 text-center">
          {proyecto.titulo}
        </h1>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          {proyecto.descripcion}
        </p>

        {/* Galería tipo collage */}
        <section className="max-w-6xl mx-auto mb-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {proyecto.imagenes.map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl shadow hover:shadow-lg transition"
            >
              <Image
                src={img}
                alt={`${proyecto.titulo} ${i + 1}`}
                width={600}
                height={400}
                className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </section>

        {/* Mapa */}
        <section className="max-w-4xl mx-auto mb-20">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Ubicación del proyecto
          </h2>
          <MapaLeafletProyecto
            lat={proyecto.ubicacion.lat}
            lng={proyecto.ubicacion.lng}
          />
        </section>
      </main>

      <BotonWhatsApp />
    </>
  );
}
