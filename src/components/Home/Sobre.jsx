import Image from "next/image";
import avatar from "../../../public/image/ensaio/avatar.jpg"
import offset1 from "../../../public/image/ensaio/about/1.jpg"
import offset3 from "../../../public/image/ensaio//about/3.jpg"
import offset4 from "../../../public/image/ensaio//about/4.jpg"
import offset2 from "../../../public/image/ensaio//about/2.jpg"



export default function Sobre(){
    return(
        <section id="sobre"  className="spacer-double-lg" style={{paddingTop: "6rem"}}>
            <div className="container">
               <div className="row justify-content-between align-items-center">
                  <div className="col-lg-5 mb-6 mb-lg-0">
                     <span className="label-title mb-3">Nossa Historia</span>
                     <h2 className="h3 font-alt mb-3">Um restaurante alegre inspirado na cultura da culinária moçambicana</h2>
                     <p>Chegou a hora de dar vida a essas ideias e planos. É aqui que realmente começamos a visualizar seus esboços de guardanapos e transformá-los em lindos pixels. Agora que sua marca está toda arrumada e pronta para a festa.</p>
                     <div className="media align-items-center">
                        <Image src={avatar} className="avatar-md rounded-circle mr-3"/>
                        <div className="media-body">
                           <h4 className="h6  mb-0">Benaissa Ghrib</h4>
                           <p className="mb-0">Chefe de Cozinha</p>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className="position-relative">
                        <div className="row card-gutters">
                           <div className="col-sm-6 offset-sm-1 mb-2">
                              <Image src={offset1} className="hover-effect  popup-image"style={{marginLeft: "auto", marginRight: "auto"}}/>
                           </div>
                           <div className="col-sm-5 align-self-end mb-2">
                           <Image src={offset3} className="hover-effect  popup-image" style={{marginLeft: "auto", marginRight: "auto"}}/>

                           </div>
                           <div className="col-sm-5 mb-2">
                           <Image src={offset4} className="hover-effect  popup-image" style={{marginLeft: "auto", marginRight: "auto"}}/>

                           </div>
                           <div className="col-sm-6 mb-2">
                           <Image src={offset2} className="hover-effect  popup-image" style={{marginLeft: "auto", marginRight: "auto"}}/>

                           </div>
                        </div>
                     </div>
                  </div>
               </div>          
          </div>
      </section>
    )
}