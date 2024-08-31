import { passeios } from "../data/passeios";

export function Passeios() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold text-gray-800">
          Passeios pelo Nordeste
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {passeios.map((passeio, index) => (
            <div key={index} className="rounded-lg bg-gray-100 p-6 shadow-lg">
              <img
                src={passeio.imagem}
                alt={passeio.titulo}
                className="mb-4 rounded-lg"
              />
              <h3 className="mb-4 text-center text-2xl font-bold text-gray-800">
                {passeio.titulo}
              </h3>
              <ul className="text-gray-600">
                {passeio.caracteristicas.map((caracteristica, i) => (
                  <li key={i} className="mb-2">
                    {caracteristica}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-center text-2xl font-bold text-orange-500">
                R$ {passeio.valor}
              </p>
              <button className="mt-4 w-full rounded-full bg-orange-500 py-2 text-white transition duration-300 hover:bg-orange-600">
                Reservar
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
