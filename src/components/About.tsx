"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

type Stat = {
  label: string;
  value: number;
  suffix?: string;
};

const stats: Stat[] = [
  { label: "Años de Experiencia", value: 30, suffix: "+" },
  { label: "Proyectos Completados", value: 500, suffix: "+" },
  { label: "Departamentos", value: 15, suffix: "+" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  return (
    <section id="nosotros" className="bg-[#f8faff] py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="bg-purple-100 text-purple-700 text-xs font-bold px-4 py-1 rounded-full">
            Nuestra Historia
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4">
            Experiencia que Transforma
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Más de tres décadas liderando proyectos de infraestructura que han
            transformado el paisaje colombiano y conectado comunidades
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Imagen con texto */}
          <div className="relative rounded-2xl overflow-hidden shadow-md">
            <img
              src="/images/historia.jpg"
              alt="Fundación PI SAS"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 bg-black/60 text-white p-4 w-full">
              <h4 className="text-lg font-bold">1992</h4>
              <p className="text-sm">
                Fundación de PI S.A.S con la visión de transformar la
                infraestructura colombiana
              </p>
            </div>
          </div>

          {/* Misión, Visión y contadores */}
          <div>
            <h3 className="text-xl font-bold text-purple-700 mb-4">
              Misión & Visión
            </h3>

            <p className="text-gray-800 text-sm mb-4">
              <strong>Misión:</strong> Somos una empresa de Ingeniería Civil
              especializada en interventoría, construcción y consultoría.
              Ofrecemos experiencia, cumplimiento y confiabilidad, buscando el
              mejoramiento continuo para aportar al desarrollo de la
              infraestructura nacional.
            </p>
            <p className="text-gray-800 text-sm mb-8">
              <strong>Visión:</strong> Ser reconocidos como la empresa líder en
              interventoría y construcción, distinguidos por nuestra calidad,
              innovación tecnológica y compromiso con el desarrollo sostenible
              del país.
            </p>

            {/* Contadores animados */}
            <div className="grid grid-cols-3 gap-4 text-center">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow p-4"
                  initial="hidden"
                  animate={controls}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AnimatedCounter({
  value,
  suffix,
}: {
  value: number;
  suffix?: string;
}) {
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 1000;
    const stepTime = 16;
    const increment = end / (duration / stepTime);

    const timer = setInterval(() => {
      start += increment;
      if (nodeRef.current) {
        const val = Math.floor(start);
        nodeRef.current.textContent = `${val}${suffix || ""}`;
      }
      if (start >= end) {
        clearInterval(timer);
        if (nodeRef.current) {
          nodeRef.current.textContent = `${end}${suffix || ""}`;
        }
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [value, suffix]);

  return (
    <span
      ref={nodeRef}
      className="text-2xl font-bold text-purple-700"
    ></span>
  );
}
