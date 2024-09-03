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
          <img src={logo} alt="logo" className="w-full xl:w-2/3" />
        </div>

        <div className="relative mt-8 text-center md:mt-12 lg:mt-16">
          <h2 className="mb-4 text-3xl font-bold md:mb-6 md:text-3xl lg:text-5xl">
            Empresas parceiras
          </h2>
          <div className="grid grid-cols-4 place-items-center">
            {/* Logos das empresas parceiras */}
            <img src={azul} alt="azul" className="object-contain" />
            <img src={gol} alt="gol" className="object-contain" />
            <img src={tap} alt="tap" className="object-contain" />
            <img src={policia} alt="policia" className="object-contain" />
            <img src={xand} alt="xand" className="object-contain" />
            <img src={cordeiro} alt="cordeiro" className="object-contain" />
            <img src={a3} alt="a3" className="h-20 object-contain" />
            <img src={aviacao} alt="aviacao" className="object-contain" />
          </div>
        </div>
      </div>

      {/* Coluna Direita */}
      <div className="flex flex-col gap-6 bg-orange-500 text-center font-inter text-white md:w-1/2 md:justify-center lg:items-start lg:px-10 xl:space-y-14">
        <h1 className="mt-4 text-5xl font-bold lg:text-6xl">Quem somos?</h1>
        <p className="mx-4 text-justify text-2xl font-semibold lg:mx-0 xl:text-4xl">
          Somos uma empresa que atua no mercado de transporte há 15 anos.
          Oferecemos soluções de transporte personalizadas para eventos ou para
          empresas. Com uma frota de veículos moderna e de qualidade, a Locavans
          busca garantir segurança e conforto em todos os seus serviços de
          transporte de passageiros.
        </p>
        <div className="lg: flex flex-col items-center lg:items-start">
          <h3 className="mb-4 text-xl font-bold md:text-2xl lg:text-3xl xl:text-5xl">
            Nossos contatos
          </h3>
          <div className="flex flex-col items-center gap-4 font-outfit lg:mt-6 lg:items-start lg:space-y-2">
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
