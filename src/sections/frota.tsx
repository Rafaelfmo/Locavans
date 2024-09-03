import { veiculos, Veiculo } from "../data/veiculos";
import {
  FaSnowflake,
  FaWifi,
  FaSuitcase,
  FaUserTie,
  FaCheck,
} from "react-icons/fa";

export function Frota() {
  const iconesCaracteristicas: { [key: string]: JSX.Element } = {
    "Ar condicionado": <FaSnowflake className="mr-2 text-orange-500" />,
    "Wi-Fi": <FaWifi className="mr-2 text-orange-500" />,
    "Espaço para bagagem": <FaSuitcase className="mr-2 text-orange-500" />,
    "Motorista experiente": <FaUserTie className="mr-2 text-orange-500" />,
    // Adicione mais mapeamentos de características e ícones conforme necessário
  };

  return (
    <section id="frota" className="bg-gray-900 py-16">
      <div className="container mx-auto px-4 font-inter">
        <h2 className="mb-12 text-center text-4xl font-bold text-white">
          Nossa Frota
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {veiculos.map((veiculo: Veiculo, index: number) => (
            <div key={index} className="rounded-lg bg-gray-800 p-6 shadow-lg">
              <img
                src={veiculo.imagem}
                alt={veiculo.nome}
                className="mb-4 h-48 w-full rounded-md object-cover text-white"
              />
              <h3 className="text-2xl font-bold text-white">{veiculo.nome}</h3>
              <ul className="mt-4 text-gray-300">
                {veiculo.caracteristicas.map((caracteristica, i) => (
                  <li key={i} className="flex items-center">
                    {iconesCaracteristicas[caracteristica] || (
                      <FaCheck className="mr-2 text-orange-500" />
                    )}
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
