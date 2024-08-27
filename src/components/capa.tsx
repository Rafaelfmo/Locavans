import { FaWhatsapp } from "react-icons/fa";

export function Capa() {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/banner.png')" }}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-orange-400">
          A MELHOR EM ALUGUEL E FRETAMENTO DE VANS PARA PASSEIOS, TRANSLADO E
          EXECUTIVO
        </h1>
        <p className="text-lg md:text-4xl mb-6">
          Fale agora com um de nossos atendentes
        </p>
        <button className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition text-lg">
            <FaWhatsapp className="inline-block size-6 m-2" />
            Fale com a gente
        </button>
      </div>
    </section>
  );
}
