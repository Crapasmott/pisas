"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const projects = [
  {
    title: "Rehabilitación Vía Bogotá - Villavicencio",
    description:
      "Modernización y mantenimiento de corredores viales estratégicos para el desarrollo regional.",
    images: [
      "/images/aeropuerto.jpg",
      "/images/automar.jpg",
      "/images/santamarta.jpg",
    ],
  },
  {
    title: "Construcción Acueducto Urbano en Huila",
    description:
      "Obra hidráulica para garantizar acceso a agua potable a más de 10.000 habitantes.",
    images: [
    "/images/automar.jpg",
    "/images/santamarta.jpg",
    "/images/aeropuerto.jpg",  
    ],
  },
  {
    title: "Supervisión Terminal de Transporte Regional",
    description:
      "Interventoría técnica y administrativa del nuevo terminal intermunicipal.",
    images: [
    "/images/santamarta.jpg",
    "/images/automar.jpg",
    "/images/aeropuerto.jpg",
    ],
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Proyectos Destacados
          </h2>
          <p className="text-gray-600 mt-2 max-w-xl mx-auto">
            Obras de alto impacto ejecutadas o supervisadas en distintas regiones del país.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <div className="relative h-56">
                <Swiper
                  modules={[Autoplay]}
                  autoplay={{ delay: 3000 }}
                  loop={true}
                  className="h-full w-full"
                >
                  {project.images.map((img, i) => (
                    <SwiperSlide key={i}>
                      <img
                        src={img}
                        alt={`${project.title} ${i + 1}`}
                        className="h-56 w-full object-cover"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 mt-2">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
