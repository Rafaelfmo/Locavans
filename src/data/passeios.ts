export interface Passeio {
  imagem: string;
  titulo: string;
  caracteristicas: string[];
  valor: number;
}

import canoaquebrada from "../assets/passeios/canoa.png";
import fortim from "../assets/passeios/fortim.png";
import paracuru from "../assets/passeios/paracuru.png";
import cumbuco from "../assets/passeios/cumbuco.png";
import lagoinha from "../assets/passeios/lagoinha.png";
import aguasbelas from "../assets/passeios/aguasbelas.png";
import beachpark from "../assets/passeios/beachpark.png";
import flecheiras from "../assets/passeios/flecheiras.png";
import engenhoca from "../assets/passeios/engenhoca.png";
import flechau from "../assets/passeios/flechau.png";

export const passeios: Passeio[] = [
  {
    imagem: canoaquebrada,
    titulo: "Praia de Canoa Quebrada",
    caracteristicas: [
      "Tipo: Privativo",
      "Transporte: Ida e volta",
      "Veículo: Hilux SW4",
      "Distância: 166 km",
    ],
    valor: 90,
  },
  {
    imagem: fortim,
    titulo: "Fortim",
    caracteristicas: [
      "Tipo: Privativo",
      "Transporte: Ida e volta",
      "Veículo: Hilux SW4",
      "Distância: 130 km",
    ],
    valor: 100,
  },
  {
    imagem: paracuru,
    titulo: "Paracuru",
    caracteristicas: [
      "Tipo: Privativo",
      "Transporte: Ida e volta",
      "Veículo: Hilux SW4",
      "Distância: 90 km",
    ],
    valor: 80,
  },
  {
    imagem: cumbuco,
    titulo: "Cumbuco",
    caracteristicas: [
      "Tipo: Privativo",
      "Transporte: Ida e volta",
      "Veículo: Hilux SW4",
      "Distância: 36 km",
    ],
    valor: 60,
  },
  {
    imagem: lagoinha,
    titulo: "Praia de Lagoinha",
    caracteristicas: [
      "Tipo: Privativo",
      "Transporte: Ida e volta",
      "Veículo: Hilux SW4",
      "Distância: 110 km",
    ],
    valor: 85,
  },
  {
    imagem: aguasbelas,
    titulo: "Águas Belas",
    caracteristicas: [
      "Tipo: Privativo",
      "Transporte: Ida e volta",
      "Veículo: Hilux SW4",
      "Distância: 60 km",
    ],
    valor: 75,
  },
  {
    imagem: beachpark,
    titulo: "Praia do Beach Park",
    caracteristicas: [
      "Tipo: Privativo e compartilhado",
      "Transporte: Ida e volta",
      "Veículo: Sprinter 415",
      "Distância: 16 km",
    ],
    valor: 55,
  },
  {
    imagem: flecheiras,
    titulo: "Flecheiras",
    caracteristicas: [
      "Tipo: Privativo",
      "Transporte: Ida e volta",
      "Veículo: Hilux SW4",
      "Distância: 140 km",
    ],
    valor: 90,
  },
  {
    imagem: engenhoca,
    titulo: "Engenhoca Parque",
    caracteristicas: [
      "Tipo: Privativo",
      "Transporte: Ida e volta",
      "Veículo: Hilux SW4",
      "Distância: 16 km",
    ],
    valor: 100,
  },
  {
    imagem: flechau,
    titulo: "Flechaú",
    caracteristicas: [
      "Tipo: Privativo",
      "Transporte: Ida e volta",
      "Veículo: Hilux SW4",
      "Distância: 130 km",
    ],
    valor: 180,
  },
];
