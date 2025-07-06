"use client";
import { useState } from "react";

export default function PqrButton() {
  const [show, setShow] = useState(false);

  return (
    <>
      {/* Botón flotante */}
      <button
        onClick={() => setShow(true)}
        className="fixed bottom-28 right-6 bg-blue-700 hover:bg-blue-800 text-white px-5 py-3 rounded-full shadow-lg z-50"
      >
        📩 PQR
      </button>

      {/* Modal */}
      {show && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-lg relative">
            <button
              onClick={() => setShow(false)}
              className="absolute top-2 right-3 text-gray-500 hover:text-red-500"
            >
              ✖
            </button>
            <h2 className="text-xl font-bold mb-4 text-blue-800">Enviar PQR</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Nombre
                </label>
                <input
                  type="text"
                  className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Mensaje
                </label>
                <textarea
                  rows={4}
                  className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2"
                ></textarea>
              </div>
              <div className="text-right">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
