import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export function Header() {
  const [isMenuMobileOpen, setIsMenuMobileOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuMobileOpen(!isMenuMobileOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-baseline">
        <div className="text-4xl font-bold">
          Locavans<span className="text-5xl text-orange-500">.</span>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#inicio" className="font-bold text-gray-600 hover:text-orange-500">Início</a>
          <a href="#quem-somos" className="font-bold text-gray-600 hover:text-orange-500">Quem Somos</a>
          <a href="#servicos" className="font-bold text-gray-600 hover:text-orange-500">Serviços</a>
          <a href="#frota" className="font-bold text-gray-600 hover:text-orange-500">Frota</a>
          <a href="#passeios" className="font-bold text-gray-600 hover:text-orange-500">Passeios</a>
          <a href="#contatos" className="font-bold text-gray-600 hover:text-orange-500">Contatos</a>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl text-gray-600 hover:text-orange-500 focus:outline-none">
            {isMenuMobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {isMenuMobileOpen && (
        <nav className="absolute top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center space-y-4 z-50">
          <a href="#inicio" className="font-bold text-gray-600 hover:text-orange-500" onClick={toggleMenu}>Início</a>
          <a href="#quem-somos" className="font-bold text-gray-600 hover:text-orange-500" onClick={toggleMenu}>Quem Somos</a>
          <a href="#servicos" className="font-bold text-gray-600 hover:text-orange-500" onClick={toggleMenu}>Serviços</a>
          <a href="#frota" className="font-bold text-gray-600 hover:text-orange-500" onClick={toggleMenu}>Frota</a>
          <a href="#passeios" className="font-bold text-gray-600 hover:text-orange-500" onClick={toggleMenu}>Passeios</a>
          <a href="#contatos" className="font-bold text-gray-600 hover:text-orange-500" onClick={toggleMenu}>Contatos</a>
        </nav>
      )}
    </header>
  );
}