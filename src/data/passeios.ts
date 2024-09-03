export interface Passeio {
  imagem: string;
  titulo: string;
  caracteristicas: string[];
  valor: number;
}

import lagoinha from "../assets/lagoinha.png";
import canoaquebrada from "../assets/canoa.png";
import morrobranco from "../assets/morrobranco.png";
import beachpark from "../assets/beachpark.png";
import jericoacara from "../assets/jericoacara.png";

export const passeios: Passeio[] = [
  {
    imagem: lagoinha,
    titulo: "Praia de Lagoinha",
    caracteristicas: [
      "Tipo: Privativo",
      "Transporte: Ida e volta",
      "Veículo: Hilux SW4",
    ],
    valor: 100,
  },
  {
    imagem: canoaquebrada,
    titulo: "Praia de Canoa Quebrada",
    caracteristicas: [
      "Tipo: Privativo",
      "Transporte: Ida e volta",
      "Veículo: Hilux SW4",
    ],
    valor: 200,
  },
  {
    imagem: morrobranco,
    titulo: "Praia de Morro Branco",
    caracteristicas: [
      "Tipo: Privativo e compartilhado",
      "Transporte: Ida e volta",
      "Veículo: Hilux SW4",
    ],
    valor: 300,
  },
  {
    imagem: beachpark,
    titulo: "Praia do Beach Park",
    caracteristicas: [
      "Tipo: Privativo e compartilhado",
      "Transporte: Ida e volta",
      "Veículo: Sprinter 415",
    ],
    valor: 400,
  },
  {
    imagem: jericoacara,
    titulo: "Praia de Jericoacoara",
    caracteristicas: [
      "Tipo: Privativo",
      "Transporte: Ida e volta",
      "Veículo: Hilux SW4",
    ],
    valor: 500,
  },
];
