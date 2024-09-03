import {
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import logo from "../assets/logo.png";
import azul from "../assets/parceiros/azul.png";
import gol from "../assets/parceiros/gol.png";
import tap from "../assets/parceiros/tap.png";
import policia from "../assets/parceiros/policia.png";
import xand from "../assets/parceiros/xand.png";
import cordeiro from "../assets/parceiros/cordeiro.png";
import a3 from "../assets/parceiros/a3.png";
import aviacao from "../assets/parceiros/aviacao.png";

export function QuemSomos() {
  return (
    <section id="quem-somos" className="flex flex-col md:flex-row">
      {/* Coluna Esquerda */}
      <div className="flex w-full flex-col items-center justify-center bg-white md:w-1/2 lg:px-12 xl:px-20">
        {/* Logo Principal */}
        <div className="flex w-full justify-center">
          <img
            src={logo}
            alt="logo"
            className="w-2/3 max-w-[250px] md:w-full"
          />
        </div>

        <div className="relative mt-8 text-center md:mt-12 lg:mt-16">
          <h2 className="mb-4 text-2xl font-bold md:mb-6 md:text-3xl lg:text-4xl">
            Empresas parceiras
          </h2>
          <div className="grid grid-cols-3 place-items-center gap-4 md:grid-cols-4 lg:grid-cols-4">
            {/* Logos das empresas parceiras */}
            <img src={azul} alt="azul" className="h-16 object-contain" />
            <img src={gol} alt="gol" className="h-16 object-contain" />
            <img src={tap} alt="tap" className="h-16 object-contain" />
            <img src={policia} alt="policia" className="h-16 object-contain" />
            <img src={xand} alt="xand" className="h-16 object-contain" />
            <img
              src={cordeiro}
              alt="cordeiro"
              className="h-16 object-contain"
            />
            <img src={a3} alt="a3" className="h-16 object-contain" />
            <img src={aviacao} alt="aviacao" className="h-16 object-contain" />
          </div>
        </div>
      </div>

      {/* Coluna Direita */}
      <div className="flex flex-col gap-6 bg-orange-500 text-center font-inter text-white md:w-1/2 lg:justify-around lg:px-12 lg:text-left xl:px-20">
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
          <div className="flex flex-col items-center gap-4 font-outfit lg:items-start">
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
