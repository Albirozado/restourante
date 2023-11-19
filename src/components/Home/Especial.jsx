import Image from "next/image"
import Especial1 from "../../../public/image/ensaio/especial/1rect.png"
import Especial2 from "../../../public/image/ensaio/especial/2rect.png"
import Especial3 from "../../../public/image/ensaio/especial/3rect.png"
import Especial4 from "../../../public/image/ensaio/especial/4rect.png"
export default function Especial(){
    return(
        <section id="especial"  className="spacer-double-lg" style={{paddingTop: "6rem"}}>
            <div className="container">
               <div className="row justify-content-center">
                  <div className="col">
                     <div className="mb-5 pb-5 text-center">
                        <span className="label-title mb-3">Nossos Especiais</span>
                        <h1 className="h2 font-alt">Especial de hoje</h1>
                        <p className="w-md-40 mb-0 mx-auto lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="container">
               <div className="row no-gutters text-center shadow-lg">
                  <div className="col-12 col-lg-6 ">
                     <div className="special position-relative w-100 bg-white">
                        <div className="row no-gutters align-items-center">
                           <div className="col-12 col-md-6 d-flex">
                              <div className="special-inner position-relative w-100">
                                 <h3 className="h5 font-weight-700 letter-spacing-small">Tomato Cheese Pasta</h3>
                                 <p>
                                    Manga, Maracujá, Abacaxi e Coco Tudo Misturado com Gelo.
                                 </p>
                                 <a href="#menu" className="font-size-11-5 text-uppercase font-weight-700 letter-spacing-medium scroll">ver todo o menu</a>
                              </div>
                           </div>
                           <div className="col-12 col-md-6 align-self-md-stretch d-flex">
                              <figure className="special-media">
                                 <Image className="" src={Especial1} alt="" />
                              </figure>
                           </div>
                        </div>
                     </div>
                     <div className="special position-relative w-100 bg-white">
                        <div className="row flex-md-row-reverse no-gutters align-items-center">
                           <div className="col-12 col-md-6 d-flex">
                              <div className="special-inner position-relative w-100">
                                 <h3 className="h5  font-weight-700 letter-spacing-small">Macarrão De Queijo De Tomate</h3>
                                 <p>
                                 Manga, Maracujá, Abacaxi e Coco Tudo Misturado com Gelo.
                                 </p>
                                 <a href="#menu" className="font-size-11-5 text-uppercase font-weight-700 letter-spacing-medium scroll">ver todo o menu</a>
                              </div>
                           </div>
                           <div className="col-12 col-md-6 align-self-md-stretch d-flex">
                              <figure className="special-media">
                                 <Image className="" src={Especial2} alt="" />
                              </figure>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-12 col-lg-6 ">
                     <div className="special position-relative w-100 bg-white">
                        <div className="row no-gutters align-items-center d-flex">
                           <div className="col-12 col-md-6 d-flex">
                              <div className="special-inner position-relative w-100">
                                 <h3 className="h5  font-weight-700 letter-spacing-small">Bife De Carne Grelhada</h3>
                                 <p>
                                    Manga, Maracujá, Abacaxi e Coco Tudo Misturado com Gelo.
                                 </p>
                                 <a href="#menu" className="font-size-11-5 text-uppercase font-weight-700 letter-spacing-medium scroll">ver todo o menu</a>
                              </div>
                           </div>
                           <div className="col-12 col-md-6 align-self-md-stretch d-flex">
                              <figure className="special-media">
                                 <Image className="" src={Especial3} alt="" />
                              </figure>
                           </div>
                        </div>
                     </div>
                     <div className="special position-relative w-100 bg-white">
                        <div className="row flex-md-row-reverse no-gutters align-items-center d-flex">
                           <div className="col-12 col-md-6">
                              <div className="special-inner  position-relative w-100">
                                 <h3 className="h5 font-weight-700 letter-spacing-small">Almôndegas Com Tomate</h3>
                                 <p>
                                    Manga, Maracujá, Abacaxi e Coco Tudo Misturado com Gelo. 
                                 </p>
                                 <a href="#menu" className="font-size-11-5 text-uppercase font-weight-700 letter-spacing-medium scroll">ver todo o menu</a>
                              </div>
                           </div>
                           <div className="col-12 col-md-6 align-self-md-stretch d-flex">
                              <figure className="special-media">
                                 <Image className="" src={Especial4} alt="" />
                              </figure>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>    
         )
}