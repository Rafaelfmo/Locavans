import "./index.css";
import { Header } from "./sections/header";
import { Capa } from "./sections/capa";
import { QuemSomos } from "./sections/quemsomos";
import { Servicos } from "./sections/servicos";
import { Frota } from "./sections/frota";
import { Passeios } from "./sections/passeios";
import { Footer } from "./sections/footer";

export function App() {
  return (
    <>
      <Header />
      <Capa />
      <QuemSomos />
      <Servicos />
      <Frota />
      <Passeios />
      <Footer />
    </>
  );
}
