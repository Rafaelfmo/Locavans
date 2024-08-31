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
    "City Tour": <FaCity className="mx-auto mb-4 text-4xl text-white" />,
  };

  return (
    <section className="bg-gray-800 py-16 text-white">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold">Serviços</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {servicos.map((servico, index) => (
            <div key={index} className="rounded-lg bg-gray-900 p-6 shadow-lg">
              {iconesServicos[servico.titulo]}
              <h3 className="mb-4 text-center text-2xl font-bold">
                {servico.titulo}
              </h3>
              <p className="mb-4 text-center">{servico.descricao}</p>
              <ul className="text-gray-400">
                {servico.caracteristicas.map((caracteristica, i) => (
                  <li key={i} className="mb-2 flex items-center">
                    {iconesCaracteristicas[caracteristica]}
                    {caracteristica}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
