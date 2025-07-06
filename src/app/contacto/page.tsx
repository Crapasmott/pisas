"use client";

import Header from "@/components/Header";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactoPage() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Enviado:", form);
    setEnviado(true);
    setForm({ nombre: "", email: "", mensaje: "" });
  };

  return (
    <>
      <Header />

      <main className="pt-32 pb-24 bg-gray-50 text-gray-900 px-6">
        {/* Título */}
        <motion.section
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-extrabold text-blue-800 mb-4">
            Contáctanos
          </h1>
          <p className="text-gray-600 text-lg">
            Estamos para ayudarte. Completá el formulario o escribinos directamente.
          </p>
        </motion.section>

        {/* Sección principal */}
        <motion.section
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 bg-white border border-gray-200 rounded-xl shadow-md p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {/* Formulario */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-700 mb-6">
              Enviános tu mensaje
            </h2>
            {enviado ? (
              <div className="text-green-700 font-medium">
                ¡Gracias por escribirnos! Te responderemos pronto.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    required
                    className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Mensaje
                  </label>
                  <textarea
                    name="mensaje"
                    rows={5}
                    value={form.mensaje}
                    onChange={handleChange}
                    required
                    className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="text-right">
                  <button
                    type="submit"
                    className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition"
                  >
                    Enviar
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Información de contacto */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">
              Información de contacto
            </h2>
            <div>
              <p className="text-sm text-gray-600 mb-1">Dirección:</p>
              <p className="font-medium">Calle 123 #45-67, Riohacha, La Guajira</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Correo electrónico:</p>
              <p className="font-medium">contacto@pisasguajira.com</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Teléfono:</p>
              <p className="font-medium">(+57) 300 123 4567</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Horario de atención:</p>
              <p className="font-medium">Lunes a viernes, 8:00 am a 5:00 pm</p>
            </div>
          </div>
        </motion.section>
      </main>
    </>
  );
}
