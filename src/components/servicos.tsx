import {
  FaBus,
  FaCar,
  FaMapSigns,
  FaUserTie,
  FaCheck,
  FaPlane,
} from "react-icons/fa";

export function NossosServicos() {
  return (
    <section className="bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold text-white">
          Nossos Serviços
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Serviço 1 */}
          <div className="rounded-lg border border-gray-700 bg-gray-800 p-6 text-center shadow-lg">
            <h3 className="mb-4 text-2xl font-bold text-orange-500">
              Excursões
            </h3>
            <FaBus className="mx-auto mb-4 text-4xl text-white" />
            <p className="mb-4 text-gray-400">
              Realizamos excursões para grupos com roteiros personalizados e
              confortáveis.
            </p>
            <ul className="mb-6 text-left text-gray-400">
              <li className="flex items-center">
                <FaCheck className="mr-2 text-orange-500" /> Carro com motorista
              </li>
              <li className="flex items-center">
                <FaCheck className="mr-2 text-orange-500" /> Ar condicionado,
                DVD, Bluetooth, Wi-Fi
              </li>
            </ul>
            <button className="mt-auto rounded-full bg-orange-500 px-4 py-2 font-bold text-white">
              Reservar Online
            </button>
          </div>

          {/* Serviço 2 */}
          <div className="rounded-lg border border-gray-700 bg-gray-800 p-6 text-center shadow-lg">
            <h3 className="mb-4 text-2xl font-bold text-orange-500">
              Corporativo e executivo
            </h3>
            <FaCar className="mx-auto mb-4 text-4xl text-white" />
            <p className="mb-4 text-gray-400">
              Realizamos transporte corporativo e executivo com conforto e
              segurança.
            </p>
            <ul className="mb-6 text-left text-gray-400">
              <li className="flex items-center">
                <FaCheck className="mr-2 text-orange-500" /> Van equipada
              </li>
              <li className="flex items-center">
                <FaCheck className="mr-2 text-orange-500" /> Motorista
                experiente
              </li>
            </ul>
            <button className="mt-auto rounded-full bg-orange-500 px-4 py-2 font-bold text-white">
              Reservar Online
            </button>
          </div>

          {/* Serviço 3 */}
          <div className="rounded-lg border border-gray-700 bg-gray-800 p-6 text-center shadow-lg">
            <h3 className="mb-4 text-2xl font-bold text-orange-500">Eventos</h3>
            <FaMapSigns className="mx-auto mb-4 text-4xl text-white" />
            <p className="mb-4 text-gray-400">
              Realizamos transportes de ida e volta para eventos e festas.
            </p>
            <ul className="mb-6 text-left text-gray-400">
              <li className="flex items-center">
                <FaCheck className="mr-2 text-orange-500" /> Carro com motorista
              </li>
              <li className="flex items-center">
                <FaCheck className="mr-2 text-orange-500" /> Ar condicionado,
                DVD, Bluetooth, Wi-Fi
              </li>
            </ul>
            <button className="mt-auto rounded-full bg-orange-500 px-4 py-2 font-bold text-white">
              Reservar Online
            </button>
          </div>

          {/* Serviço 4 */}
          <div className="rounded-lg border border-gray-700 bg-gray-800 p-6 text-center shadow-lg lg:col-span-2">
            <h3 className="mb-4 text-2xl font-bold text-orange-500">
              Transfer/Translado
            </h3>
            <FaUserTie className="mx-auto mb-4 text-4xl text-white" />
            <p className="mb-4 text-gray-400">
              Realizamos transfer e translado com motorista particular para onde
              você precisar.
            </p>
            <ul className="mb-6 text-left text-gray-400">
              <li className="flex items-center">
                <FaCheck className="mr-2 text-orange-500" /> Motorista
                particular
              </li>
              <li className="flex items-center">
                <FaCheck className="mr-2 text-orange-500" /> Carro executivo
              </li>
            </ul>
            <button className="mt-auto rounded-full bg-orange-500 px-4 py-2 font-bold text-white">
              Reservar Online
            </button>
          </div>

          {/* Serviço 5 */}
          <div className="rounded-lg border border-gray-700 bg-gray-800 p-6 text-center shadow-lg lg:col-span-2">
            <h3 className="mb-4 text-2xl font-bold text-orange-500">
              Receptivo em aeroporto
            </h3>
            <FaPlane className="mx-auto mb-4 text-4xl text-white" />
            <p className="mb-4 text-gray-400">
              Realizamos receptivo em aeroporto com conforto e segurança.
            </p>
            <ul className="mb-6 text-left text-gray-400">
              <li className="flex items-center">
                <FaCheck className="mr-2 text-orange-500" /> Motorista
                particular
              </li>
              <li className="flex items-center">
                <FaCheck className="mr-2 text-orange-500" /> Carro executivo
              </li>
            </ul>
            <button className="mt-auto rounded-full bg-orange-500 px-4 py-2 font-bold text-white">
              Reservar Online
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
