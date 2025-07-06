"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    image: "/images/camino.jpg",
    title: "Ingeniería Civil de Excelencia",
    subtitle:
      "Más de 40 años construyendo el futuro de Colombia con interventoría especializada y obras civiles de la más alta calidad",
  },
  {
    image: "/images/carreteras1.jpg",
    title: "Infraestructura con Calidad",
    subtitle:
      "Supervisión y construcción de obras viales, aeroportuarias y sistemas estratégicos",
  },
  {
    image: "/images/terminal-de-aeropuerto.jpg",
    title: "Experiencia que Construye",
    subtitle:
      "Equipo técnico comprometido con el desarrollo sostenible del país",
  },
];

export default function Hero() {
  return (
    <section className="relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation
        className="h-screen"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-screen bg-cover bg-center flex items-center justify-center text-white text-center"
              style={{
                backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${slide.image})`,
              }}
            >
              <div className="max-w-3xl px-4 animate-fade-in-up">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">{slide.title}</h1>
                <p className="text-lg md:text-xl font-light mb-8">{slide.subtitle}</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a
                    href="#servicios"
                    className="px-6 py-3 bg-white text-blue-800 font-semibold rounded-full hover:shadow-lg transition"
                  >
                    Ver Servicios →
                  </a>
                  <a
                    href="#contacto"
                    className="px-6 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-800 transition"
                  >
                    Contactar 📞
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
