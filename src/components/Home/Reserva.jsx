import Dish from "../../../public/image/ensaio/serving-dish.svg"
import Rserva from "../../../public/image/ensaio/reserva/4.jpg"
import Image from "next/image"

export default function Reserva(){
    return(
        <section className="no-gutters" id="reserva">
            <div className="container-fluid">
               <div className="row ">
                  <div className="col-lg-6 bg-secondary ">
                     <div className="reservation-card p-4 h-100">
                        <div className="reservation-card-container p-6">
                           <div className="reservation-card-inner p-sm-6">
                              <img src={Dish} alt="" className="max-width-lg mb-3"/>
                              <h1 className="h2 font-alt">Faça Uma Reserva</h1>
                              <p className="lead">Aberto das 8:00 AM - 10:00 PM, todos dias da semana</p>
                              <a href="#reservation" className="btn btn-dark btn-primary btn-wide scroll" style={{display: "none"}}>Mesas Disponiveis</a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className="pl-lg-2">
                      <Image src={Rserva} className="ImageReserva" /> 
                     </div>
                  </div>
               </div>
            </div>
         </section>
    )
}