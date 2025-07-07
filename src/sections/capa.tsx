import { FaWhatsapp } from "react-icons/fa";
import banner from "../assets/Banner_ofc.png";

export function Capa() {
  return (
    <section
      className="relative flex h-screen items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${banner})`, backgroundSize: "cover" }}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative z-10 px-4 text-center text-white">
        <h1 className="mb-4 text-3xl font-bold text-white md:text-4xl">
          A MELHOR EM ALUGUEL E FRETAMENTO DE VANS PARA PASSEIOS, TRANSLADO E
          EXECUTIVO
        </h1>
        <p className="mb-6 text-lg md:text-4xl">
          Fale agora com um de nossos atendentes
        </p>
        <div className="flex justify-center">
          <a
            href={`https://wa.me/+5585987194486?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20a%20Locavans.`}
            className="flex w-96 items-center justify-center rounded-full bg-orange-500 px-4 py-2 text-2xl text-white transition hover:bg-orange-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="m-2 inline-block size-7" />
            Fale com a gente
          </a>
        </div>
      </div>
    </section>
  );
}
