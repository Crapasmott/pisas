"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const consorcios = [
    { ciudad: "PI SAS Guajira", slug: "pi-sas-guajira" },
    { ciudad: "PI SAS Santa Marta", slug: "pi-sas-santa-marta" },
    { ciudad: "PI SAS Valledupar", slug: "pi-sas-valledupar" },
    { ciudad: "PI SAS Cundinamarca", slug: "pi-sas-cundinamarca" },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all ${scrolled ? "shadow-md bg-white/90 backdrop-blur" : "bg-white/80"}`}>
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-800 to-blue-500 text-white text-xl font-bold flex items-center justify-center rounded-md -rotate-6">
            π
          </div>
          <div>
            <div className="text-blue-800 font-bold text-lg">PROYECTOS E INTERVENTORÍAS S.A.S</div>
            <div className="text-sm text-gray-500 font-medium">PI S.A.S</div>
          </div>
        </div>

        {/* Menú */}
        <ul className={`md:flex gap-6 font-medium text-gray-800 ${menuOpen ? "absolute top-20 left-0 w-full bg-white flex flex-col px-6 py-4 shadow z-40" : "hidden md:flex"}`}>
          {/* Links */}
          <li><Link href="/" className={`hover:text-blue-600 transition ${pathname === "/" ? "text-blue-700 font-semibold" : ""}`}>Inicio</Link></li>
          <li><Link href="/nosotros" className={`hover:text-blue-600 transition ${pathname === "/nosotros" ? "text-blue-700 font-semibold" : ""}`}>Nosotros</Link></li>
          <li><Link href="/servicios" className={`hover:text-blue-600 transition ${pathname === "/servicios" ? "text-blue-700 font-semibold" : ""}`}>Servicios</Link></li>
          <li><Link href="/proyectos" className={`hover:text-blue-600 transition ${pathname === "/proyectos" ? "text-blue-700 font-semibold" : ""}`}>Proyectos</Link></li>

          {/* Submenú Consorcios */}
          <li className="relative group">
            <span className={`cursor-pointer hover:text-blue-600 transition ${pathname.startsWith("/consorcios") ? "text-blue-700 font-semibold" : ""}`}>
              Consorcios
            </span>
            <div className="absolute top-full left-0 mt-2 hidden group-hover:block bg-white border rounded shadow-md w-56 z-50">
              <ul className="flex flex-col">
                {consorcios.map((sede) => (
                  <li key={sede.slug}>
                    <Link
                      href={`/consorcios/${sede.slug}`}
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-50 hover:text-blue-700"
                    >
                      {sede.ciudad}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>

          {/* Contacto */}
          <li><Link href="/contacto" className={`hover:text-blue-600 transition ${pathname === "/contacto" ? "text-blue-700 font-semibold" : ""}`}>Contacto</Link></li>
        </ul>

        {/* Hamburguesa móvil */}
        <div className="md:hidden flex flex-col gap-1 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="w-6 h-0.5 bg-blue-800"></span>
          <span className="w-6 h-0.5 bg-blue-800"></span>
          <span className="w-6 h-0.5 bg-blue-800"></span>
        </div>
      </nav>
    </header>
  );
}
