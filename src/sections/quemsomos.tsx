import {
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import logo from "../assets/logo.png";

export function QuemSomos() {
  return (
    <section className="flex flex-col md:flex-row">
      {/* Coluna Esquerda */}
      <div className="flex w-full flex-col items-center bg-white md:w-1/2 lg:px-12 xl:px-20">
        {/* Logo Principal */}
        <div className="mt-8 flex w-full justify-center md:mt-12 lg:mt-16">
          <img src={logo} alt="logo" className="w-2/3 md:w-full" />
        </div>

        <div className="md:mt-12lg:mt-16 relative mt-8 text-center">
          <h2 className="mb-4 text-2xl font-bold md:mb-6 md:text-3xl lg:text-4xl">
            Empresas parceiras
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {/* Logos das empresas parceiras */}
            <img
              src="logo1.png"
              alt="Parceiro 1"
              className="h-12 object-contain md:h-14 lg:h-16 xl:h-20"
            />
            <img
              src="logo2.png"
              alt="Parceiro 2"
              className="h-12 object-contain md:h-14 lg:h-16 xl:h-20"
            />
            <img
              src="logo3.png"
              alt="Parceiro 3"
              className="h-12 object-contain md:h-14 lg:h-16 xl:h-20"
            />
            <img
              src="logo4.png"
              alt="Parceiro 4"
              className="h-12 object-contain md:h-14 lg:h-16 xl:h-20"
            />
            <img
              src="logo5.png"
              alt="Parceiro 5"
              className="h-12 object-contain md:h-14 lg:h-16 xl:h-20"
            />
            <img
              src="logo6.png"
              alt="Parceiro 6"
              className="h-12 object-contain md:h-14 lg:h-16 xl:h-20"
            />
            <img
              src="logo7.png"
              alt="Parceiro 7"
              className="h-12 object-contain md:h-14 lg:h-16 xl:h-20"
            />
            <img
              src="logo8.png"
              alt="Parceiro 8"
              className="h-12 object-contain md:h-14 lg:h-16 xl:h-20"
            />
          </div>
        </div>
      </div>

      {/* Coluna Direita */}
      <div className="font-inter flex flex-col gap-6 bg-orange-500 text-center text-white md:w-1/2 md:justify-center lg:justify-around lg:px-12 lg:text-left xl:px-20">
        <h1 className="mt-4 text-5xl font-bold lg:text-6xl">Quem somos?</h1>
        <p className="mx-auto max-w-96 text-2xl font-semibold lg:mx-0 lg:max-w-full lg:text-3xl">
          Somos uma empresa que atua no mercado de transporte há 15 anos.
          Oferecemos soluções de transporte personalizadas para eventos ou para
          empresas. Com uma frota de veículos moderna, a Locavans busca garantir
          segurança, conforto e qualidade em todos os seus serviços de
          transporte.
        </p>
        <div className="flex flex-col items-center lg:items-start">
          <h3 className="mb-4 text-xl font-bold md:text-2xl lg:text-3xl">
            Nossos contatos
          </h3>
          <div className="font-outfit flex flex-col items-center gap-4 lg:items-start">
            <div className="flex items-center gap-2 text-lg lg:text-xl">
              <FaPhone className="rotate-90 transform text-2xl" />
              <p>
                <span className="font-bold">:</span> (85) 9 9999-9999
              </p>
            </div>
            <div className="flex items-center gap-2 text-lg lg:text-xl">
              <FaWhatsapp className="text-2xl" />
              <p>
                <span className="font-bold">:</span> (85) 9 9999-9999
              </p>
            </div>
            <div className="flex items-center gap-2 text-lg lg:text-xl">
              <FaEnvelope className="text-2xl" />
              <p>
                <span className="font-bold">:</span> locavans@gmail.com.br
              </p>
            </div>
            <div className="flex items-center gap-2 text-lg lg:text-xl">
              <FaMapMarkerAlt className="text-2xl" />
              <p>
                <span className="font-bold">:</span> Av. Desembargador Moreira,
                2800
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
