import Image from "next/image";
import avatar from "../../../public/image/ensaio/capeudecoz.png"
import offset1 from "../../../public/image/ensaio/about/1re.png"
import offset3 from "../../../public/image/ensaio//about/2re.png"
import offset4 from "../../../public/image/ensaio//about/3re.png"
import offset2 from "../../../public/image/ensaio//about/4re.png"



export default function Sobre(){
    return(
        <section id="sobre"  className="spacer-double-lg" style={{paddingTop: "6rem"}}>
            <div className="container">
               <div className="row justify-content-between align-items-center">
                  <div className="col-lg-5 mb-6 mb-lg-0">
                     <span className="label-title mb-3">Nossa Historia</span>
                     <h2 className="h3 font-alt mb-3">Sunt in culpa qui officia deserunt mollit anim id est laborum.</h2>
                     <p>Duis aute irure dolor in reprehenderit in voluptate  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proiden.</p>
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