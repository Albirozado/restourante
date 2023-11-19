import medal from "../../../public/image/medal.svg"
import chef from "../../../public/image/chef.svg"
import open from "../../../public/image/open.svg"
import parking from "../../../public/image/parking.svg"
import Image from "next/image"

export default function Services(){
 

    return(
        <section className=" spacer-double-lg">
        <div className="container">
           <div className="row justify-content-center">
              <div className="col">
                 <div className="mb-5 pb-5 text-center">
                    <span className="label-title mb-3">Nossos Serviços</span>
                    <h1 className="h2 font-alt">Serviços para Clientes</h1>
                    <p className="w-md-40 mb-0 mx-auto lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                 </div>
              </div>
           </div>
        </div>
        <div className="container" >
           <div className="row d-block d-flex">
              <div className="col-6 col-lg-3 mb-5 mb-lg-0">
                 <div className="text-center card mb-5 border-0">
                    <div className="card-body p-0">
                       <Image className="max-width-sm mb-3" src={medal} alt="" style={{margin: "0 auto"}}/>
                       <div>
                          <h4 className="h6 mb-2">Qualidade Conferida</h4>
                          <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                       </div>
                    </div>
                 </div>
              </div>
              <div className="col-6 col-lg-3 mb-5 mb-lg-0">
                 <div className="text-center card mb-5 border-0">
                    <div className="card-body p-0">
                       <Image className="max-width-sm mb-3" src={open} alt="" style={{margin: "0 auto"}}/>
                       <div>
                          <h4 className="h6 mb-2">Aberto 24/7</h4>
                          <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                       </div>
                    </div>
                 </div>
              </div>
              <div className="col-6 col-lg-3 ">
                 <div className="text-center card mb-5 border-0">
                    <div className="card-body p-0">
                       <Image className="max-width-sm mb-3" src={parking} alt="" style={{margin: "0 auto"}}/>
                       <div>
                          <h4 className="h6 mb-2">Estacionamento</h4>
                          <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                       </div>

                    </div>
                 </div>
              </div>
              <div className="col-6 col-lg-3 ">
                 <div className="text-center card mb-5 border-0">
                    <div className="card-body p-0">
                       <Image className="max-width-sm mb-3" src={chef} alt="" style={{margin: "0 auto"}}/>
                       <div>
                          <h4 className="h6 mb-2">Melhores Chefes</h4>
                          <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
           <div className="row">
              <div className="col-md-6 m-auto">
                 <div className="mt-3 pt-3 mb-3 pb-3 ">
                    <div className="divider-border m-auto"></div>
                 </div>
                 <p className="text-center mb-0">*Dear guests, you are welcomed to dine with us at Foxe restaurant. Have a pleasant dining experience.</p>
              </div>
           </div>


           
        </div>

          
      </section>
    )
}