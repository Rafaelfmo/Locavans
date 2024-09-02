export interface Passeio {
  imagem: string;
  titulo: string;
  caracteristicas: string[];
  valor: number;
}

import lagoinha from "../assets/lagoinha.png";

export const passeios: Passeio[] = [
  {
    imagem: "lagoinha",
    titulo: "Praia de Lagoinha",
    caracteristicas: [
      "Tipo: Privativo",
      "Transporte: Ida e volta",
      "Veículo: Hilux SW4",
    ],
    valor: 100,
  },
  {
    imagem: "passeio2.jpg",
    titulo: "Passeio 2",
    caracteristicas: [
      "Tipo: Privativo",
      "Transporte: Ida e volta",
      "Veículo: Hilux SW4",
    ],
    valor: 200,
  },
  {
    imagem: "passeio3.jpg",
    titulo: "Passeio 3",
    caracteristicas: [
      "Tipo: Privativo e compartilhado",
      "Transporte: Ida e volta",
      "Veículo: Sprinter 415",
    ],
    valor: 300,
  },
  {
    imagem: "passeio4.jpg",
    titulo: "Passeio 4",
    caracteristicas: [
      "Tipo: Privativo e compartilhado",
      "Transporte: Ida e volta",
      "Veículo: Sprinter 415",
    ],
    valor: 400,
  },
];
