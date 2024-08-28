import "./index.css";
import { Header } from "./components/header";
import { Capa } from "./components/capa";
import { QuemSomos } from "./components/quemsomos";
import { NossosServicos } from "./components/servicos";

export function App() {
  return (
    <>
      <Header />
      <Capa />
      <QuemSomos />
      <NossosServicos />
    </>
  );
}
