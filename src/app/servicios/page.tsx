"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { motion } from "framer-motion";
import Link from "next/link";

const slides = [
  {
    titulo: "Interventoría con calidad",
    texto: "Supervisión de proyectos con altos estándares técnicos.",
    imagen: "/images/terminal-de-aeropuerto.jpg",
  },
  {
    titulo: "Consultoría Técnica",
    texto: "Diseño y estudios para obras civiles, viales e hidráulicas.",
    imagen: "/banners/banner2.jpg",
  },
  {
    titulo: "Auditoría Profesional",
    texto: "Control y análisis detallado de ejecución y presupuestos.",
    imagen: "/banners/banner3.jpg",
  },
];

const servicios = [
  {
    titulo: "Interventoría de Obras",
    resumen: "Supervisión técnica y administrativa en obras de infraestructura.",
    descripcion:
      "Supervisamos obras públicas y privadas para garantizar calidad, cumplimiento de normas y eficiencia en los recursos.",
    imagen: "/images/terminal-de-aeropuerto.jpg",
    link: "/servicios/interventoria",
  },
  {
    titulo: "Consultoría Técnica",
    resumen: "Diseño y estudios técnicos en obras civiles e hidráulicas.",
    descripcion:
      "Apoyamos con consultoría en ingeniería estructural, geotécnica, ambiental y vial para proyectos sostenibles.",
    imagen: "/images/terminal-de-aeropuerto.jpg",
    link: "/servicios/consultoria",
  },
  {
    titulo: "Supervisión de Concesiones",
    resumen: "Control de concesiones viales.",
    descripcion:
      "Verificamos cronogramas, entregables y cumplimiento de requisitos contractuales en concesiones de infraestructura.",
    imagen: "/images/terminal-de-aeropuerto.jpg",
    link: "/servicios/concesiones",
  },
  {
    titulo: "Auditoría de Proyectos",
    resumen: "Auditoría técnica y financiera independiente.",
    descripcion:
      "Auditamos la ejecución de proyectos con criterios de legalidad, calidad y uso eficiente de recursos.",
    imagen: "/images/terminal-de-aeropuerto.jpg",
    link: "/images/terminal-de-aeropuerto.jpg",
  },
];

export default function ServiciosPage() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1 },
    renderMode: "performance",
  });

  return (
    <main className="bg-white text-gray-900">
      {/* SLIDER */}
      <section className="relative h-[300px] md:h-[500px]">
        <div ref={sliderRef} className="keen-slider h-full">
          {slides.map((slide, index) => (
            <div key={index} className="keen-slider__slide relative w-full h-full">
              <img
                src={slide.imagen}
                alt={slide.titulo}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-start px-6 md:px-16">
                <h2 className="text-3xl md:text-5xl font-bold text-white drop-shadow mb-2">
                  {slide.titulo}
                </h2>
                <p className="text-lg md:text-xl text-white max-w-xl drop-shadow">
                  {slide.texto}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="pt-24 pb-20 px-6">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-blue-800"
          >
            Nuestros Servicios
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-gray-600 mt-4 max-w-xl mx-auto text-lg"
          >
            Soluciones integrales en interventoría, auditoría, consultoría y supervisión de infraestructura.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {servicios.map((servicio, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow hover:shadow-xl transition-all"
            >
              <img
                src={servicio.imagen}
                alt={servicio.titulo}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col justify-between h-[260px]">
                <h3 className="text-xl font-bold text-blue-800 mb-1">
                  {servicio.titulo}
                </h3>
                <p className="text-sm text-gray-600 mb-2">{servicio.resumen}</p>
                <p className="text-sm text-gray-700 mb-4 flex-grow">
                  {servicio.descripcion}
                </p>
                <Link
                  href={servicio.link}
                  className="mt-auto inline-block text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md transition"
                >
                  Conocer más →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FORMULARIO */}
      <section className="max-w-4xl mx-auto mt-24 px-6">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-blue-800 mb-4"
        >
          ¿Necesitas más información?
        </motion.h2>
        <p className="text-center text-gray-600 mb-10">
          Déjanos tus datos y te contactaremos lo antes posible.
        </p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-blue-50 p-6 rounded-xl shadow">
          <input
            type="text"
            placeholder="Nombre completo"
            className="p-3 rounded border border-gray-300 focus:outline-blue-500"
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            className="p-3 rounded border border-gray-300 focus:outline-blue-500"
          />
          <input
            type="tel"
            placeholder="Teléfono o WhatsApp"
            className="p-3 rounded border border-gray-300 focus:outline-blue-500"
          />
          <select
            className="p-3 rounded border border-gray-300 focus:outline-blue-500 bg-white text-gray-700"
            defaultValue=""
          >
            <option value="" disabled>
              Selecciona un servicio
            </option>
            {servicios.map((s, index) => (
              <option key={index} value={s.titulo}>
                {s.titulo}
              </option>
            ))}
          </select>
          <textarea
            rows={4}
            placeholder="Mensaje"
            className="md:col-span-2 p-3 rounded border border-gray-300 focus:outline-blue-500"
          />
          <button
            type="submit"
            className="md:col-span-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded transition"
          >
            Enviar solicitud
          </button>
        </form>
      </section>

      {/* CONTACTO DIRECTO */}
      <section className="text-center mt-10 text-sm text-gray-700 px-6 pb-32">
        También puedes llamarnos al{" "}
        <a
          href="tel:+573001234567"
          className="text-blue-700 font-semibold underline"
        >
          +57 300 123 4567
        </a>{" "}
        o escribirnos por{" "}
        <Link
          href="https://wa.me/573001234567"
          target="_blank"
          className="text-green-600 font-semibold underline"
        >
          WhatsApp
        </Link>
        .
      </section>

      {/* BOTÓN FLOTANTE WHATSAPP */}
      <a
        href="https://wa.me/573001234567"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full shadow-lg flex items-center gap-3 px-4 py-3 hover:scale-105 transition-transform"
      >
        <div className="bg-white bg-opacity-20 p-2 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={28}
            height={28}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12.001 2.002c-5.522 0-10 4.478-10 10 0 1.664.408 3.233 1.124 4.623L2 22l5.512-1.46A9.942 9.942 0 0012 22.002c5.522 0 10-4.478 10-10s-4.478-9.999-10-9.999zm0 17.999c-1.624 0-3.127-.436-4.435-1.192l-.318-.19-3.275.868.874-3.192-.207-.33a7.955 7.955 0 01-1.226-4.222c0-4.411 3.589-8 8-8s8 3.589 8 8c0 4.411-3.589 8-8 8.058zm4.421-5.578c-.246-.123-1.453-.717-1.678-.797s-.389-.123-.553.123-.635.797-.779.963c-.143.164-.287.184-.533.061-.246-.123-1.037-.381-1.976-1.216-.731-.653-1.223-1.461-1.366-1.707s-.015-.379.108-.501c.111-.111.246-.287.369-.43.123-.143.164-.246.246-.41.082-.164.041-.307-.02-.43-.061-.123-.553-1.334-.758-1.823-.2-.48-.404-.41-.553-.418-.143-.008-.307-.01-.471-.01s-.43.061-.655.287c-.225.225-.861.84-.861 2.049s.882 2.379 1.004 2.543c.123.164 1.74 2.662 4.217 3.731.59.255 1.05.407 1.408.522.592.188 1.132.161 1.56.098.476-.07 1.453-.594 1.659-1.167.205-.574.205-1.065.143-1.167-.061-.102-.225-.164-.471-.287z" />
          </svg>
        </div>
        <div className="text-left leading-tight text-sm">
          <strong className="block font-bold">¿Necesitas ayuda?</strong>
          <span>Escríbenos por WhatsApp</span>
        </div>
      </a>
    </main>
  );
}
