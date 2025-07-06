"use client";

import { proyectos } from "@/data/proyectos";
import Header from "@/components/Header";
import Link from "next/link";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

type Proyecto = {
  slug: string;
  titulo: string;
  descripcion: string;
  region?: string;
  imagenes: string[];
  // agrega aquí otros campos si existen en tu modelo de datos
};

export default function GuajiraLanding() {
  const proyectosGuajira = (proyectos as Proyecto[]).filter(
    (p) => p.region?.toLowerCase() === "guajira"
  );

  return (
    <>
      <Header />

      <main className="pt-32 pb-24 bg-gray-50 text-gray-900 px-6">
        {/* HERO */}
        <motion.section
          className="text-center max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-extrabold text-blue-800 mb-4">
            PI S.A.S. Guajira
          </h1>
          <p className="text-gray-700 text-lg">
            Obras estratégicas que transforman la infraestructura de La Guajira. Conectamos comunidades, impulsamos desarrollo y construimos futuro.
          </p>
        </motion.section>

        {/* PROYECTOS */}
        <section className="max-w-7xl mx-auto grid gap-16">
          {proyectosGuajira.map((proyecto, i) => (
            <motion.div
              key={proyecto.slug}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
            >
              {/* Galería */}
              <Swiper
                modules={[Autoplay, Pagination]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000 }}
                loop
                className="h-64 md:h-80"
              >
                {proyecto.imagenes.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={img}
                      alt={`Imagen ${index + 1} - ${proyecto.titulo}`}
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Contenido */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-blue-800 mb-3">
                  {proyecto.titulo}
                </h2>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {proyecto.descripcion}
                </p>
                <Link
                  href={`/proyectos/${proyecto.slug}`}
                  className="inline-block text-sm bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  Ver más detalles →
                </Link>
              </div>
            </motion.div>
          ))}
        </section>

        {/* CTA final */}
        <motion.section
          className="max-w-4xl mx-auto bg-blue-800 text-white rounded-xl p-10 text-center mt-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold mb-4">¿Necesitás asesoría o colaboración?</h3>
          <p className="mb-6">
            Nuestro equipo en La Guajira está listo para ayudarte en tus proyectos de infraestructura, transporte o desarrollo social.
          </p>
          <Link
            href="/contacto"
            className="inline-block bg-white text-blue-800 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition"
          >
            Contactanos
          </Link>
        </motion.section>
      </main>

    </>
  );
}
