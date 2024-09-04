import { useState } from "react";
import { FaBars, FaRegWindowClose } from "react-icons/fa";

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
        <span className="mx-2 font-inter text-5xl font-bold leading-none text-black">
          Locavans<span className="text-orange-500">.</span>
        </span>
        <nav className="hidden items-baseline space-x-6 md:flex">
          <button
            onClick={() => handleScroll("quem-somos")}
            className="font-inter font-bold text-black transition-colors duration-300 hover:text-orange-500"
          >
            Quem Somos
          </button>
          <button
            onClick={() => handleScroll("servicos")}
            className="font-inter font-bold text-black transition-colors duration-300 hover:text-orange-500"
          >
            Serviços
          </button>
          <button
            onClick={() => handleScroll("frota")}
            className="font-inter font-bold text-black transition-colors duration-300 hover:text-orange-500"
          >
            Frota
          </button>
          <button
            onClick={() => handleScroll("passeios")}
            className="font-inter font-bold text-black transition-colors duration-300 hover:text-orange-500"
          >
            Passeios
          </button>
          <button
            onClick={() => handleScroll("contatos")}
            className="font-inter font-bold text-black transition-colors duration-300 hover:text-orange-500"
          >
            Contatos
          </button>
        </nav>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="mx-2 text-3xl text-black transition-colors duration-300 hover:text-orange-500 focus:outline-none"
          >
            <FaBars />
          </button>
        </div>
      </div>

      {isMenuMobileOpen && (
        <nav className="absolute left-0 top-0 z-50 flex h-full w-full flex-col items-center justify-center space-y-4 bg-white font-inter">
          <FaRegWindowClose
            className="absolute right-4 top-4 text-3xl text-black"
            onClick={toggleMenu}
          />
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
