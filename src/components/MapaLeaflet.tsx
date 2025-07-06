"use client";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Tooltip,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Corrección de íconos en Next.js
delete ((L.Icon.Default.prototype as unknown) as Record<string, unknown>)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
});

// Lista de puntos aproximados
const puntos = [
  {
    nombre: "Túnel de Tesalia (UF1)",
    lat: 4.985,
    lng: -75.768,
    descripcion:
      "Conexión subterránea clave para el eje cafetero. Mejora la movilidad y reduce tiempos de viaje.",
    imagen: "/images/carreteras1.jpg",
    link: "/proyectos",
  },
  {
    nombre: "Puente 1 (UF3)",
    lat: 5.12,
    lng: -75.645,
    descripcion:
      "Puente elevado con tecnología antisísmica. Parte crítica del corredor vial.",
    imagen: "/images/carreteras1.jpg",
    link: "/proyectos",
  },
  {
    nombre: "Intersección Tres Puertas (UF4)",
    lat: 5.015,
    lng: -75.735,
    descripcion:
      "Nodo estratégico que conecta múltiples corredores hacia Manizales y Pereira.",
    imagen: "/images/carreteras1.jpg",
    link: "/proyectos",
  },
  {
    nombre: "Cruce La Manuela (UF5)",
    lat: 5.06,
    lng: -75.75,
    descripcion:
      "Paso vial sobre intersección con rutas nacionales. Alta conectividad regional.",
    imagen: "/images/carreteras1.jpg",
    link: "/proyectos",
  },
  {
    nombre: "Viaducto UF7",
    lat: 5.08,
    lng: -75.79,
    descripcion:
      "Viaducto sobre zona montañosa. Estructura moderna con mínimo impacto ambiental.",
    imagen: "/images/carreteras1.jpg",
    link: "/proyectos",
  },
  {
    nombre: "Túnel El Descanso (UF8)",
    lat: 5.04,
    lng: -75.71,
    descripcion:
      "Túnel secundario complementario. Mejora accesos al sur del proyecto.",
    imagen: "/images/carreteras1.jpg",
    link: "/proyectos",
  },
];

export default function MapaLeaflet() {
  return (
    <section className="py-20 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">Concesión</h2>
        <p className="text-gray-600">
          Visualiza túneles, puentes e intersecciones clave de la concesión Pacífico Tres.
        </p>
      </div>

      <div className="max-w-6xl mx-auto rounded-xl overflow-hidden shadow-xl h-[500px]">
        <MapContainer
          center={[5.0, -75.7]}
          zoom={10}
          scrollWheelZoom={true}
          className="w-full h-full z-0"
        >
          <TileLayer
            attribution='&copy; OpenStreetMap'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {puntos.map((p, i) => (
            <Marker key={i} position={[p.lat, p.lng]}>
              <Popup>
                <div className="max-w-[220px]">
                  <img
                    src={p.imagen}
                    alt={p.nombre}
                    className="w-full h-24 object-cover rounded mb-2"
                  />
                  <h4 className="font-bold text-sm mb-1">{p.nombre}</h4>
                  <p className="text-xs text-gray-700 mb-3">{p.descripcion}</p>
                 <a
  href={p.link}
  className="inline-block w-full text-center px-3 py-1.5 bg-blue-600 hover:bg-blue-700 !text-white text-xs font-semibold rounded transition"

>
  Ver proyecto →
</a>

                </div>
              </Popup>
              <Tooltip>{p.nombre}</Tooltip>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </section>
  );
}
