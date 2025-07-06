"use client";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

type Stat = {
  label: string;
  value: number;
  suffix?: string;
};

const stats: Stat[] = [
  { label: "Años de Experiencia", value: 40, suffix: "+" },
  { label: "Proyectos Ejecutados", value: 500, suffix: "+" },
  { label: "Departamentos de Colombia", value: 15 },
  { label: "Satisfacción del Cliente", value: 100, suffix: "%" },
];

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section className="bg-blue-50 py-20" ref={ref}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="bg-white p-8 rounded-xl shadow-lg text-center"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            <p className="text-gray-600 font-medium mt-2">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function AnimatedCounter({ value, suffix }: { value: number; suffix?: string }) {
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
      className="text-4xl text-blue-800 font-extrabold"
    ></span>
  );
}
