"use client";

import Header from "@/components/Header";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactoPage() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Enviado:", form);
    setEnviado(true);
    setForm({ nombre: "", email: "", mensaje: "" });
  };

  return (
    <>
      <Header />
      <main className="pt-32 pb-24 bg-gray-50 text-gray-900 px-6">
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

        <motion.section
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 bg-white border border-gray-200 rounded-xl shadow-md p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
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

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">
              Información de contacto
            </h2>
            <p><strong>Dirección:</strong> Calle 123 #45-67, Bogotá</p>
            <p><strong>Correo:</strong> contacto@pisasguajira.com</p>
            <p><strong>Teléfono:</strong> (+57) 300 123 4567</p>
            <p><strong>Horario:</strong> Lunes a viernes, 8:00 a.m. - 5:00 p.m.</p>
          </div>
        </motion.section>

        {/* Google Maps */}
        <section className="mt-16 max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Nuestra ubicación</h2>
          <div className="w-full h-[450px] rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.396670220226!2d-74.03894992432383!3d4.700952341653928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9aac03bdca95%3A0x3ea1a9296fccbe3c!2sCl.%20123%20%2345A-11%2C%20Usaqu%C3%A9n%2C%20Bogot%C3%A1%2C%20Cundinamarca!5e0!3m2!1ses-419!2sco!4v1751792551393!5m2!1ses-419!2sco"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </main>
    </>
  );
}
