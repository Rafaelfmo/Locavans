import {
  FaInstagram,
  FaWhatsapp,
  FaTripadvisor,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export function Footer() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="contatos" className="bg-black py-12 text-white">
      <div className="flex flex-col items-center justify-around font-inter md:flex-row md:items-baseline">
        {/* Seção de Informações da Empresa */}
        <div className="mb-8 md:mb-0 md:text-left">
          <h3 className="text-5xl font-bold md:text-3xl lg:text-4xl">
            Locavans<span className="text-orange-500">.</span>
          </h3>
        </div>

        {/* Seção de Links de Navegação */}
        <div className="mb-8 md:mb-0">
          <p className="mb-4 text-xl font-semibold">Navegação</p>
          <ul className="flex flex-col space-y-2 text-center md:space-y-0 md:text-left">
            <li>
              <button
                onClick={() => handleScroll("inicio")}
                className="hover:text-orange-400"
              >
                Início
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("quem-somos")}
                className="hover:text-orange-400"
              >
                Quem Somos
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("servicos")}
                className="hover:text-orange-400"
              >
                Serviços
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("frota")}
                className="hover:text-orange-400"
              >
                Frota
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("passeios")}
                className="hover:text-orange-400"
              >
                Passeios
              </button>
            </li>
          </ul>
        </div>

        {/* Seção de Contatos */}
        <div className="text-center md:text-left">
          <p className="mb-4 text-xl font-semibold">Contatos</p>
          <div className="flex flex-col items-center gap-4 md:items-start">
            <div className="flex items-center gap-2 text-lg md:text-sm">
              <FaPhone className="text-md rotate-90 transform" />
              <p>
                <span className="font-bold">:</span> (85) 9 9999-9999
              </p>
            </div>
            <div className="flex items-center gap-2 text-lg md:text-sm">
              <FaWhatsapp className="text-xl" />
              <p>
                <span className="font-bold">:</span> (85) 9 9999-9999
              </p>
            </div>
            <div className="flex items-center gap-2 text-lg md:text-sm">
              <FaEnvelope className="text-md" />
              <p>
                <span className="font-bold">:</span> locavans@gmail.com.br
              </p>
            </div>
            <div className="flex items-center gap-2 text-lg md:text-sm">
              <FaMapMarkerAlt className="text-md" />
              <p>
                <span className="font-bold">:</span> Av. Desembargador Moreira,
                2800
              </p>
            </div>
          </div>
        </div>

        {/* Seção de Redes Sociais */}
        <div className="mt-8 md:mt-0 md:text-left">
          <p className="mb-4 text-xl font-semibold">Redes Sociais</p>
          <div className="mx-3 flex justify-center space-x-4 md:justify-start">
            <a href="#" className="hover:text-orange-400">
              <FaWhatsapp size={25} />
            </a>
            <a href="#" className="hover:text-orange-400">
              <FaInstagram size={25} />
            </a>
            <a href="#" className="hover:text-orange-400">
              <FaTripadvisor size={25} />
            </a>
          </div>
        </div>
      </div>

      {/* Seção de Direitos Autorais */}
      <div className="mt-12 text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Locavans. Todos os direitos reservados.
        </p>
        <p className="text-gray-400">
          Projetado por{" "}
          <a
            href="https://github.com/Rafaelfmo"
            className="font-bold text-white"
          >
            Rafaelfmo
          </a>
        </p>
      </div>
    </footer>
  );
}
