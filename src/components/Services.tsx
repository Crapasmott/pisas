"use client";
import { motion } from "framer-motion";

const services = [
  {
    title: "Interventoría Técnica",
    description:
      "Supervisión técnica integral, control administrativo, gestión de costos, seguridad laboral y gestión ambiental en proyectos de infraestructura de gran envergadura.",
    icon: "🧾",
    color: "from-orange-500 to-pink-500",
  },
  {
    title: "Construcción Civil",
    description:
      "Construcción de carreteras, puentes, túneles, edificaciones, infraestructura aeroportuaria y sistemas de transporte masivo con tecnología de vanguardia.",
    icon: "🏢",
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "Consultoría Especializada",
    description:
      "Estudios de factibilidad técnica y económica, diseño arquitectónico y estructural, planificación de obra y gestión integral de proyectos complejos.",
    icon: "📄",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Gestión Ambiental",
    description:
      "Estudios de impacto ambiental, implementación de planes de mitigación y construcción de infraestructuras sostenibles con certificaciones internacionales.",
    icon: "🌱",
    color: "from-purple-500 to-fuchsia-500",
  },
  {
    title: "Mantenimiento Integral",
    description:
      "Restauración y refuerzo estructural, mantenimiento preventivo y correctivo de carreteras, y rehabilitación de redes de servicios públicos.",
    icon: "🔧",
    color: "from-orange-500 to-yellow-500",
  },
  {
    title: "Infraestructura Energética",
    description:
      "Desarrollo de plantas hidroeléctricas, térmicas, eólicas y solares con tecnología sustentable y eficiencia energética comprobada.",
    icon: "⚡",
    color: "from-cyan-500 to-sky-500",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Nuestros Servicios
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Soluciones integrales para el desarrollo y supervisión de obras civiles en todo el territorio colombiano.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-md border hover:shadow-xl transition-transform duration-300 hover:-translate-y-1 text-left"
            >
              <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center text-white text-xl font-bold bg-gradient-to-br ${service.color} mb-4`}
              >
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
