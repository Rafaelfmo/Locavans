import { passeios } from "../data/passeios";

export function Passeios() {
  return (
    <section className="py-16">
      <div className="font-inter container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold text-gray-800">
          Passeios pelo Nordeste
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {passeios.map((passeio, index) => (
            <div
              key={index}
              className="flex flex-col rounded-3xl bg-black p-6 shadow-lg"
            >
              <div className="">
                <img
                  src={passeio.imagem}
                  alt={passeio.titulo}
                  className="rounded-2xl object-cover"
                />
              </div>
              <div className="flex flex-grow flex-col justify-between">
                <h3 className="mb-4 text-center text-2xl font-bold text-white">
                  {passeio.titulo}
                </h3>
                <ul className="text-white">
                  {passeio.caracteristicas.map((caracteristica, i) => (
                    <li key={i} className="mb-2">
                      {caracteristica}
                    </li>
                  ))}
                </ul>
                <p className="font-outfit mt-4 flex flex-col text-center text-2xl font-bold text-orange-500">
                  <span className="text-sm text-white">Por apenas</span>
                  R$ {passeio.valor},00
                  <span className="text-sm text-white">por pessoa</span>
                </p>
                <hr className="my-4 border-t-2 border-gray-300" />
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
