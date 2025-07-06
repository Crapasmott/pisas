// src/app/proyectos/page.tsx
"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import { proyectos } from "@/data/proyectos";
import Header from "@/components/Header";

export default function ProyectosPage() {
  return (
    <>
      <Header />

      <main className="pt-32 pb-24 bg-white text-gray-900">
        <section className="text-center px-6 mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-blue-800"
          >
            Nuestros Proyectos
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg"
          >
            Explora algunas de las obras que transforman la infraestructura del país.
          </motion.p>
        </section>

        {/* Tarjetas dinámicas con galería */}
        <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {proyectos.map((proyecto, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 14,
                delay: index * 0.1,
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 cursor-pointer"
            >
              {/* Galería */}
              <Swiper
                modules={[Autoplay, Pagination]}
                loop
                pagination={{ clickable: true }}
                autoplay={{ delay: 3500 }}
                className="h-56"
              >
                {proyecto.imagenes.map((img, i) => (
                  <SwiperSlide key={i}>
                    <img
                      src={img}
                      alt={proyecto.titulo}
                      className="w-full h-56 object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Contenido */}
              <div className="p-5 flex flex-col h-[260px]">
                <h2 className="text-xl font-bold text-blue-800 mb-2">
                  {proyecto.titulo}
                </h2>
                <p className="text-sm text-gray-700 line-clamp-4">
                  {proyecto.descripcion}
                </p>
                <Link
                  href={`/proyectos/${proyecto.slug}`}
                  className="mt-auto inline-block text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md transition mt-4"
                >
                  Ver más detalles →
                </Link>
              </div>
            </motion.div>
          ))}
        </section>
      </main>

    
    </>
  );
}
