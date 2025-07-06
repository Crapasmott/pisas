"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function BotonWhatsApp() {
  return (
    <a
      href="https://wa.me/573001234567" // ← reemplaza con tu número real
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-3 hover:scale-105 transition-transform duration-300"
    >
      <div className="bg-white/20 p-2 rounded-full">
        <FaWhatsapp className="text-xl" />
      </div>
      <div className="flex flex-col text-left leading-tight">
        <span className="font-bold text-sm">¿Necesitas ayuda?</span>
        <span className="text-xs opacity-90">Escríbenos por WhatsApp</span>
      </div>
    </a>
  );
}
