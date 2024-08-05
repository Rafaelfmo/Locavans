import { FaWhatsapp } from "react-icons/fa";

export function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <div>
              <a
                href="/"
                className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"
              >
                <span className="font-bold text-4xl">
                  LOCAVANS<span className="text-orange-400">.</span>
                </span>
              </a>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <a
              href="#services"
              className="py-5 px-3 text-gray-700 text-2xl hover:text-orange-300"
            >
              Serviços
            </a>
            <a
              href="#about"
              className="py-5 px-3 text-gray-700 text-2xl hover:text-orange-300"
            >
              Sobre
            </a>
            <a
              href="#contact"
              className="py-5 px-3 text-gray-700 text-2xl hover:text-orange-300"
            >
              Contato
            </a>
          </div>
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              className="bg-orange-500 text-white py-2 px-4 rounded-full flex items-center hover:bg-orange-600"
            >
              <FaWhatsapp className="mr-2 size-5" />
              ORÇAMENTO
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
