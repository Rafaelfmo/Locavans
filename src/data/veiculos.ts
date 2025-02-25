export interface Veiculo {
  nome: string;
  imagem: string;
  caracteristicas: string[];
}

import micro from "../assets/micro.png";
import van_preta from "../assets/van_preta.png";
import van_branca from "../assets/van_branca.png";
import spin from "../assets/spin.png";

export const veiculos: Veiculo[] = [
  {
    nome: "Spin",
    imagem: spin,
    caracteristicas: [
      "Ar condicionado",
      "Wi-Fi",
      "Espaço para bagagem",
      "Motorista experiente",
    ],
  },
  {
    nome: "Sprinter 415",
    imagem: van_branca,
    caracteristicas: [
      "Ar condicionado",
      "Wi-Fi",
      "Espaço para bagagem",
      "Motorista experiente",
    ],
  },
  {
    nome: "Sprinter 515",
    imagem: van_preta,
    caracteristicas: [
      "Ar condicionado",
      "Wi-Fi",
      "Espaço para bagagem",
      "Motorista experiente",
    ],
  },
  {
    nome: "Micro-ônibus",
    imagem: micro,
    caracteristicas: [
      "Ar condicionado",
      "Wi-Fi",
      "Espaço para bagagem",
      "Motorista experiente",
    ],
  },
];
