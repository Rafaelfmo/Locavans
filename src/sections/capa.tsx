import { FaWhatsapp } from "react-icons/fa";
import banner from "../assets/banner.png";

export function Capa() {
  return (
    <section
      className="relative flex h-screen items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative z-10 px-4 text-center text-white">
        <h1 className="mb-4 text-3xl font-bold text-orange-400 md:text-4xl">
          A MELHOR EM ALUGUEL E FRETAMENTO DE VANS PARA PASSEIOS, TRANSLADO E
          EXECUTIVO
        </h1>
        <p className="mb-6 text-lg md:text-4xl">
          Fale agora com um de nossos atendentes
        </p>
        <button className="rounded-full bg-orange-500 px-6 py-3 text-lg text-white transition hover:bg-orange-600">
          <FaWhatsapp className="m-2 inline-block size-6" />
          Fale com a gente
        </button>
      </div>
    </section>
  );
}
