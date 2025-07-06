"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Header from "@/components/Header";

export default function NosotrosPage() {
  return (
    <>
      <Header />

      <main className="pt-32 pb-24 bg-white text-gray-900">
        {/* Título principal */}
        <section className="text-center px-6 mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-blue-800"
          >
            Sobre Nosotros
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg"
          >
            Comprometidos con la ingeniería, la infraestructura y el desarrollo de Colombia.
          </motion.p>
        </section>

        {/* Historia con imagen */}
        <section className="max-w-6xl mx-auto px-6 mb-24 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/historia.jpg" // Asegurate de tener esta imagen en public/nosotros/
              alt="Nuestra historia"
              width={600}
              height={400}
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Nuestra Historia</h2>
            <p className="text-gray-700 text-lg">
              Desde hace más de una década, nuestra empresa ha sido parte clave en el desarrollo de
              importantes obras de infraestructura a lo largo del país. Con un equipo de profesionales
              apasionados por la ingeniería y la sostenibilidad, hemos dejado huella en cada proyecto,
              construyendo conexiones, progreso y confianza.
            </p>
          </motion.div>
        </section>

        {/* Misión y Visión */}
        <section className="max-w-6xl mx-auto px-6 mb-24 grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-blue-50 p-6 rounded-xl shadow"
          >
            <h3 className="text-xl font-bold text-blue-800 mb-2">Misión</h3>
            <p className="text-gray-700 text-lg">
              Diseñar, desarrollar y ejecutar obras de infraestructura que generen impacto
              positivo en las comunidades, promoviendo la eficiencia, sostenibilidad y
              calidad técnica en cada proyecto.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-blue-50 p-6 rounded-xl shadow"
          >
            <h3 className="text-xl font-bold text-blue-800 mb-2">Visión</h3>
            <p className="text-gray-700 text-lg">
              Ser reconocidos como una empresa líder en infraestructura por nuestra capacidad
              de innovar, construir con responsabilidad y transformar entornos para el desarrollo
              del país.
            </p>
          </motion.div>
        </section>

        {/* Valores destacados */}
        <section className="max-w-6xl mx-auto px-6 mb-24 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold text-blue-700 mb-12"
          >
            Nuestros Pilares
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                titulo: "Compromiso",
                desc: "Cada proyecto lo asumimos como si fuera propio, cuidando cada detalle.",
              },
              {
                titulo: "Transparencia",
                desc: "Actuamos con ética y claridad en todas nuestras acciones y relaciones.",
              },
              {
                titulo: "Innovación",
                desc: "Aplicamos tecnología y mejores prácticas en la ejecución de obras.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-md transition"
              >
                <h3 className="text-xl font-bold text-blue-800 mb-2">{item.titulo}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
