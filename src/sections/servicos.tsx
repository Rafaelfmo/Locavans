import { servicos } from "../data/servicos";
import {
  FaBus,
  FaUserTie,
  FaWifi,
  FaMapSigns,
  FaWind,
  FaBriefcase,
  FaStar,
  FaCity,
} from "react-icons/fa";

export function Servicos() {
  const iconesCaracteristicas: { [key: string]: JSX.Element } = {
    "Veículos para grupos": <FaBus className="mr-2 text-orange-500" />,
    "Ar condicionado": <FaWind className="mr-2 text-orange-500" />,
    "Wi-Fi": <FaWifi className="mr-2 text-orange-500" />,
    "Motorista experiente": <FaUserTie className="mr-2 text-orange-500" />,
    "Atendimento personalizado": <FaStar className="mr-2 text-orange-500" />,
    "Guias especializados": <FaMapSigns className="mr-2 text-orange-500" />,
  };

  const iconesServicos: { [key: string]: JSX.Element } = {
    Excursões: <FaBus className="mx-auto mb-4 text-4xl text-white" />,
    "Corporativo e Executivo": (
      <FaBriefcase className="mx-auto mb-4 text-4xl text-white" />
    ),
    Eventos: <FaMapSigns className="mx-auto mb-4 text-4xl text-white" />,
    Receptivas: <FaUserTie className="mx-auto mb-4 text-4xl text-white" />,
    "Transfer e Translados": (
      <FaBus className="mx-auto mb-4 text-4xl text-white" />
    ),
    Passeios: <FaCity className="mx-auto mb-4 text-4xl text-white" />,
  };

  return (
    <section id="servicos" className="bg-gray-900 py-16 text-white">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold">Serviços</h2>
        <div className="grid gap-8 font-inter sm:grid-cols-2 lg:grid-cols-3">
          {servicos.map((servico, index) => (
            <div
              key={index}
              className="flex h-full flex-col rounded-lg bg-gray-800 p-6 shadow-lg"
            >
              {iconesServicos[servico.titulo]}
              <h3 className="mb-4 text-nowrap text-center text-xl font-bold">
                {servico.titulo}
              </h3>
              <p className="mb-4 text-center">{servico.descricao}</p>
              <ul className="flex-grow text-gray-400">
                {servico.caracteristicas.map((caracteristica, i) => (
                  <li key={i} className="mb-2 flex items-center space-x-2">
                    {iconesCaracteristicas[caracteristica]}
                    <span>{caracteristica}</span>
                  </li>
                ))}
              </ul>
              <hr className="my-4 border-t-2 border-gray-500" />
              <div className="mt-auto flex justify-center">
                <button className="rounded bg-orange-500 px-4 py-2 font-semibold text-white hover:bg-orange-400">
                  Saiba mais
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
