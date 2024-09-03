import { FaUserTie, FaUserFriends, FaCheck, FaCar } from "react-icons/fa";
import { passeios } from "../data/passeios";

export function Passeios() {
  const iconesCaracteristicas: { [key: string]: JSX.Element } = {
    "Tipo: Privativo": <FaUserTie className="mr-2 text-orange-500" />,
    "Tipo: Privativo e compartilhado": (
      <FaUserFriends className="mr-2 text-orange-500" />
    ),
    "Transporte: Ida e volta": <FaCheck className="mr-2 text-orange-500" />,
    "Veículo: Hilux SW4": <FaCar className="mr-2 text-orange-500" />,
    "Veículo: Sprinter 415": <FaCar className="mr-2 text-orange-500" />,
  };

  return (
    <section id="passeios" className="py-16">
      <div className="container mx-auto max-w-7xl px-4 font-inter">
        <h2 className="mb-12 text-center text-4xl font-bold text-gray-800">
          Passeios pelo Nordeste
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
                <button className="mt-4 w-full rounded-full bg-orange-500 py-2 text-white transition duration-300 hover:bg-orange-600">
                  Reservar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
