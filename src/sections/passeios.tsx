import {
  FaUserTie,
  FaUserFriends,
  FaCheck,
  FaCar,
  FaRoute,
} from "react-icons/fa";

import { passeios } from "../data/passeios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

// Promoção 3 praias em um dia
import morrobranco from "../assets/passeios/morrobranco.png";
import fontes from "../assets/passeios/fontes.png";
import canoaquebrada from "../assets/passeios/canoa.png";

// Imagens do passeio especial
import lagoaParaiso from "../assets/passeios/lagoadoparaiso.png";
import buracoAzul from "../assets/passeios/buracoazul.png";
import arvorePreguica from "../assets/passeios/arvoredapreguica.png";
import pedraFurada from "../assets/passeios/pedrafurada.png";

export function Passeios() {
  const iconesCaracteristicas: { [key: string]: JSX.Element } = {
    "Tipo: Privativo": <FaUserTie className="mr-2 text-orange-500" />,
    "Tipo: Privativo e compartilhado": (
      <FaUserFriends className="mr-2 text-orange-500" />
    ),
    "Transporte: Ida e volta": <FaCheck className="mr-2 text-orange-500" />,
    "Veículo: Hilux SW4": <FaCar className="mr-2 text-orange-500" />,
    "Veículo: Sprinter 415": <FaCar className="mr-2 text-orange-500" />,
    "Distância: 166 km": <FaRoute className="mr-2 text-orange-500" />,
    "Distância: 130 km": <FaRoute className="mr-2 text-orange-500" />,
    "Distância: 90 km": <FaRoute className="mr-2 text-orange-500" />,
    "Distância: 36 km": <FaRoute className="mr-2 text-orange-500" />,
    "Distância: 110 km": <FaRoute className="mr-2 text-orange-500" />,
    "Distância: 140 km": <FaRoute className="mr-2 text-orange-500" />,
    "Distância: 60 km": <FaRoute className="mr-2 text-orange-500" />,
    "Distância: 16 km": <FaRoute className="mr-2 text-orange-500" />,
  };

  return (
    <section id="passeios" className="py-16">
      <div className="container mx-auto max-w-7xl px-4 font-inter">
        <h2 className="mb-12 text-center text-4xl font-bold text-gray-800">
          Passeios pelo Nordeste
        </h2>

        {/* Promoção: Exibir 3 cards grandes lado a lado */}
        <div className="mb-8 rounded-3xl bg-orange-500 p-8">
          <h2 className="mb-8 text-center text-3xl font-semibold text-white">
            Promoção: Visite 3 praias em um único dia!
          </h2>
          <div className="grid justify-center gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center overflow-hidden rounded-3xl bg-black shadow-lg">
              <div className="relative h-64 w-full">
                <img
                  src={morrobranco}
                  alt="Morro Branco"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-center text-2xl font-bold text-white">
                  Morro Branco
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center overflow-hidden rounded-3xl bg-black shadow-lg">
              <div className="relative h-64 w-full">
                <img
                  src={fontes}
                  alt="Praia das Fontes"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-center text-2xl font-bold text-white">
                  Praia das Fontes
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center overflow-hidden rounded-3xl bg-black shadow-lg">
              <div className="relative h-64 w-full">
                <img
                  src={canoaquebrada}
                  alt="Canoa Quebrada"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-center text-2xl font-bold text-white">
                  Canoa Quebrada
                </span>
              </div>
            </div>
          </div>
          <p className="mt-8 text-center text-xl font-bold text-white">
            Apenas <span className="text-3xl">R$ 110,00</span> por pessoa
          </p>
          <div className="mt-4 flex justify-center">
            <a
              href="https://wa.me/+5585996237064?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20a%20promoção%20de%20visitar%203%20praias%20em%20um%20único%20dia."
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="rounded-full bg-black px-6 py-3 text-white transition duration-300 hover:bg-gray-800">
                Entre em contato
              </button>
            </a>
          </div>
        </div>

        {/* Passeio Especial: 1 dia em Jeri */}
        <div className="mb-8 rounded-3xl bg-orange-500 bg-gradient-to-r p-8 shadow-lg">
          <h2 className="mb-8 text-center text-3xl font-semibold text-white">
            Passeio Especial: 1 dia em Jericoacoara
          </h2>
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={20}
            slidesPerView={1}
            className="rounded-lg"
          >
            <SwiperSlide>
              <div className="relative h-96 w-full">
                <img
                  src={lagoaParaiso}
                  alt="Lagoa do Paraíso"
                  className="absolute inset-0 h-full w-full rounded-lg object-cover"
                  loading="lazy"
                  decoding="async"
                  style={{ imageRendering: "auto" }}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
                  <span className="text-xl font-semibold">
                    Lagoa do Paraíso
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-96 w-full">
                <img
                  src={buracoAzul}
                  alt="Buraco Azul"
                  className="absolute inset-0 h-full w-full rounded-lg object-cover"
                  loading="lazy"
                  decoding="async"
                  style={{ imageRendering: "auto" }}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
                  <span className="text-xl font-semibold">Buraco Azul</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-96 w-full">
                <img
                  src={arvorePreguica}
                  alt="Árvore da Preguiça"
                  className="absolute inset-0 h-full w-full rounded-lg object-cover"
                  loading="lazy"
                  decoding="async"
                  style={{ imageRendering: "auto" }}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
                  <span className="text-xl font-semibold">
                    Árvore da Preguiça
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-96 w-full">
                <img
                  src={pedraFurada}
                  alt="Pedra Furada"
                  className="absolute inset-0 h-full w-full rounded-lg object-cover"
                  loading="lazy"
                  decoding="async"
                  style={{ imageRendering: "auto" }}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
                  <span className="text-xl font-semibold">Pedra Furada</span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <p className="mt-8 text-center text-2xl font-bold text-white">
            Apenas <span className="text-3xl">R$ 290,00</span> por pessoa
          </p>
          <div className="mt-6 flex justify-center">
            <a
              href="https://wa.me/+5585996237064?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20o%20passeio%20especial%20de%201%20dia%20em%20Jeri."
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="rounded-full bg-black px-8 py-4 text-lg font-semibold text-white transition duration-300 hover:bg-gray-800">
                Reservar Passeio
              </button>
            </a>
          </div>
        </div>

        {/* Lista de Passeios */}
        <h2 className="mb-8 text-center text-2xl font-semibold text-gray-800">
          Outros Passeios
        </h2>
        <div className="grid justify-center gap-8 md:grid-cols-2 lg:grid-cols-3">
          {passeios.map((passeio, index) => (
            <div
              key={index}
              className="shadow- flex max-w-md flex-col items-center overflow-hidden rounded-3xl bg-black"
            >
              <div className="relative h-64 w-full">
                <img
                  src={passeio.imagem}
                  alt={passeio.titulo}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-grow flex-col justify-between p-6">
                <h3 className="mb-4 text-nowrap text-center text-2xl font-bold text-white">
                  {passeio.titulo}
                </h3>
                <ul className="text-white">
                  {passeio.caracteristicas.map((caracteristica, i) => (
                    <li key={i} className="mb-2 flex items-center space-x-2">
                      {iconesCaracteristicas[caracteristica]}
                      <span>{caracteristica}</span>
                    </li>
                  ))}
                </ul>
                <hr className="my-4 border-t-2 border-gray-300" />
                <p className="mt-4 flex flex-col text-center font-outfit text-2xl font-bold text-orange-500">
                  <span className="text-sm text-white">Por apenas</span>
                  R$ {passeio.valor},00
                  <span className="text-sm text-white">por pessoa</span>
                </p>
                <a
                  href={`https://wa.me/+5585996237064?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20o%20passeio%20para%20${encodeURIComponent(passeio.titulo)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="mt-4 w-full rounded-full bg-orange-500 py-2 text-white transition duration-300 hover:bg-orange-600">
                    Reservar
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
