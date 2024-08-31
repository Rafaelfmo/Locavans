export interface Servico {
  titulo: string;
  descricao: string;
  caracteristicas: string[];
}

export const servicos: Servico[] = [
  {
    titulo: "Excursões",
    descricao:
      "Realizamos excursões para grupos com roteiros personalizados e confortáveis.",
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
      "Realizamos o transporte dos seus colaboradores com segurança e conforto.",
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
      "Transporte para eventos corporativos, casamentos, shows e festas.",
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
    descricao: "Transfer e translados para hotéis, aeroportos e eventos.",
    caracteristicas: [
      "Guias especializados",
      "Atendimento personalizado",
      "Wi-Fi",
      "Motorista experiente",
    ],
  },
  {
    titulo: "City Tour",
    descricao:
      "Realizamos city tour em diversas cidades do Nordeste com guias especializados.",
    caracteristicas: [
      "Guias especializados",
      "Atendimento personalizado",
      "Wi-Fi",
      "Motorista experiente",
    ],
  },
];
