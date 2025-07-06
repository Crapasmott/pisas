// src/components/Footer.tsx

export default function Footer() {
  return (
    <footer className="bg-[#122D8C] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sobre */}
        <div>
          <h4 className="font-bold text-lg mb-2">PI S.A.S</h4>
          <p className="text-sm">
            Empresa de ingeniería civil con más de 30 años de experiencia en
            interventoría, consultoría y construcción de obras públicas.
          </p>
        </div>

        {/* Enlaces */}
        <div>
          <h4 className="font-bold mb-2">Enlaces rápidos</h4>
          <ul className="text-sm space-y-1">
            <li><a href="/">Inicio</a></li>
            <li><a href="/servicios">Servicios</a></li>
            <li><a href="/proyectos">Proyectos</a></li>
            <li><a href="/contacto">Contacto</a></li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="font-bold mb-2">Contáctanos</h4>
          <ul className="text-sm space-y-1">
            <li>📍 Calle 123 # 45 - 67, Bogotá</li>
            <li>📞 (1) 123 4567</li>
            <li>📱 +57 300 123 4567</li>
            <li>✉️ contacto@pi-sas.com</li>
          </ul>
        </div>

        {/* Redes */}
        <div>
          <h4 className="font-bold mb-2">Síguenos</h4>
          <div className="flex gap-4 text-lg">
            <a href="#"><i className="ri-whatsapp-line" /></a>
            <a href="#"><i className="ri-facebook-line" /></a>
            <a href="#"><i className="ri-instagram-line" /></a>
            <a href="#"><i className="ri-youtube-line" /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-blue-900 mt-10 pt-4 text-center text-sm">
        © 2025 PI S.A.S. Todos los derechos reservados.
      </div>
    </footer>
  );
}
