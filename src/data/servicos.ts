export interface Servico {
  titulo: string;
  descricao: string;
  caracteristicas: string[];
}

export const servicos: Servico[] = [
  {
    titulo: "Excursões",
    descricao:
      "Realizamos excursões para grupos de tamanhos diversos com roteiros personalizados.",
    caracteristicas: [
      "Veículos para grupos",
      "Atendimento personalizado",
      "Ar condicionado",
      "Motorista experiente",
    ],
  },
  {
    titulo: "Corporativo e Executivo",
    descricao:
      "Realizamos o transporte dos seus colaboradores com segurança e conforto para os passageiros.",
    caracteristicas: [
      "Veículos para grupos",
      "Atendimento personalizado",
      "Wi-Fi",
      "Motorista experiente",
    ],
  },
  {
    titulo: "Eventos",
    descricao:
      "Transporte para todos os tipos de evento na região, como casamentos, shows e congressos.",
    caracteristicas: [
      "Guias especializados",
      "Atendimento personalizado",
      "Wi-Fi",
      "Motorista experiente",
    ],
  },
  {
    titulo: "Receptivas",
    descricao:
      "Recepção e transporte de passageiros em aeroportos e terminais rodoviários.",
    caracteristicas: [
      "Atendimento personalizado",
      "Wi-Fi",
      "Guias especializados",
      "Motorista experiente",
    ],
  },
  {
    titulo: "Transfer e Translados",
    descricao:
      "Realizamos transfers e translados para hotéis, aeroportos, eventos e empresas.",
    caracteristicas: [
      "Guias especializados",
      "Atendimento personalizado",
      "Wi-Fi",
      "Motorista experiente",
    ],
  },
  {
    titulo: "Passeios",
    descricao:
      "Passeios turísticos para conhecer os principais pontos turísticos da região.",
    caracteristicas: [
      "Guias especializados",
      "Atendimento personalizado",
      "Wi-Fi",
      "Motorista experiente",
    ],
  },
];
