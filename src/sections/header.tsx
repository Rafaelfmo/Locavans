import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export function Header() {
  const [isMenuMobileOpen, setIsMenuMobileOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuMobileOpen(!isMenuMobileOpen);
  };

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuMobileOpen(false);
  };

  return (
    <header id="inicio" className="bg-white shadow-md">
      <div className="container mx-auto flex items-baseline justify-between py-4">
        <div className="font-inter text-3xl font-bold">
          Locavans<span className="text-5xl text-orange-500">.</span>
        </div>
        <nav className="hidden space-x-6 md:flex">
          <button
            onClick={() => handleScroll("quem-somos")}
            className="font-inter font-bold text-black hover:text-orange-500"
          >
            Quem Somos
          </button>
          <button
            onClick={() => handleScroll("servicos")}
            className="font-inter font-bold text-black hover:text-orange-500"
          >
            Serviços
          </button>
          <button
            onClick={() => handleScroll("frota")}
            className="font-inter font-bold text-black hover:text-orange-500"
          >
            Frota
          </button>
          <button
            onClick={() => handleScroll("passeios")}
            className="font-inter font-bold text-black hover:text-orange-500"
          >
            Passeios
          </button>
          <button
            onClick={() => handleScroll("contatos")}
            className="font-inter font-bold text-black hover:text-orange-500"
          >
            Contatos
          </button>
        </nav>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-2xl text-black hover:text-orange-500 focus:outline-none"
          >
            {isMenuMobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {isMenuMobileOpen && (
        <nav className="absolute left-0 top-0 z-50 flex h-full w-full flex-col items-center justify-center space-y-4 bg-white font-inter">
          <button
            onClick={() => handleScroll("quem-somos")}
            className="font-bold text-black hover:text-orange-500"
          >
            Quem Somos
          </button>
          <button
            onClick={() => handleScroll("servicos")}
            className="font-bold text-black hover:text-orange-500"
          >
            Serviços
          </button>
          <button
            onClick={() => handleScroll("frota")}
            className="font-bold text-black hover:text-orange-500"
          >
            Frota
          </button>
          <button
            onClick={() => handleScroll("passeios")}
            className="font-bold text-black hover:text-orange-500"
          >
            Passeios
          </button>
          <button
            onClick={() => handleScroll("contatos")}
            className="font-bold text-black hover:text-orange-500"
          >
            Contatos
          </button>
        </nav>
      )}
    </header>
  );
}
