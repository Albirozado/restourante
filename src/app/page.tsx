import HeaderSwiper from "../components/Home/HeaderSwiper"
import Sobre from "../components/Home/Sobre"
import Reserva from "../components/Home/Reserva"
import Especial from "../components/Home/Especial"
import Menu from "../components/Home/Menu"
import Services from "../components/Home/Services"
import Galeria from "../components/Home/Galeria"
import GetFastFood from "../components/BackEnd/GetFastFood"
export default function Home() {
  return (
    <>
      <HeaderSwiper/>
      <Sobre/>
      <Reserva/>
      <Especial/>
      <Menu/>
      <Services/>
      <div style={{ padding: "0 0.5rem"}}>
        <GetFastFood/>
      </div>
    </>
  );
}
