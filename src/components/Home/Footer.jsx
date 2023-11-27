import { FacebookIcon, Twitter, Instagram } from "lucide-react"
export default function Footer(){
    return(
        <footer className="footer bg-dark spacer-one-top-md spacer-one-bottom-xs">

        <div className="container space-top-2 space-bottom-1">
           <div className="row justify-content-lg-start mb-5">
              <div className="col-lg-3 col-sm-6 mb-5 mb-lg-0">
                 <a className="d-inline-block mb-3 footer-logo" href="index.html">
                 </a>
                 <p className="font-size-14 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              </div>
              <div className="col-lg-3 col-sm-6 mb-4">
                 <h3 className="h6 text-white mb-3  font-size-15">Nosso Endereço</h3>
                 <address>
                    <ul className="list-group list-group-flush list-group-borderless mb-0">
                       <li className="list-group-item">(+258) 84 47 78 459</li>
                       <li className="list-group-item">
                          <a href="mailto:customers@foxeresto.net">albirozadosimione@gmail.com</a>
                       </li>
                       <li className="list-group-item">Av.Guerra Popular</li>
                    </ul>
                 </address>
              </div>
              <div className=" col-lg-3 col-sm-6 mb-4">
                 <h3 className="h6 text-white mb-3  font-size-15">Horario do Espediente</h3>
                 <div className="opening-hours-container font-size-14 ">
                    <span className="opening-hours-holder-inner">
                    <span className="opening-hours-day-holder">
                    <span className="opening-hours-day">Segunda</span>
                    </span>
                    <span className="opening-hours-line"></span>
                    <span className="opening-hours-time">10:00 - 22:00</span>
                    </span>
                 </div>
                 <div className="opening-hours-container font-size-14 ">
                    <span className="opening-hours-holder-inner">
                    <span className="opening-hours-day-holder">
                    <span className="opening-hours-day">Terça</span>
                    </span>
                    <span className="opening-hours-line"></span>
                    <span className="opening-hours-time">10:00 - 22:00</span>
                    </span>
                 </div>
                 <div className="opening-hours-container font-size-14 ">
                    <span className="opening-hours-holder-inner">
                    <span className="opening-hours-day-holder">
                    <span className="opening-hours-day">Quarta</span>
                    </span>
                    <span className="opening-hours-line"></span>
                    <span className="opening-hours-time">10:00 - 22:00</span>
                    </span>
                 </div>
                 <div className="opening-hours-container font-size-14 ">
                    <span className="opening-hours-holder-inner">
                    <span className="opening-hours-day-holder">
                    <span className="opening-hours-day">Quinta</span>
                    </span>
                    <span className="opening-hours-line"></span>
                    <span className="opening-hours-time">10:00 - 22:00</span>
                    </span>
                 </div>
                 <div className="opening-hours-container font-size-14 ">
                    <span className="opening-hours-holder-inner">
                    <span className="opening-hours-day-holder">
                    <span className="opening-hours-day">Sexta</span>
                    </span>
                    <span className="opening-hours-line"></span>
                    <span className="opening-hours-time">09:00 - 02:30</span>
                    </span>
                 </div>
                 <div className="opening-hours-container font-size-14 ">
                    <span className="opening-hours-holder-inner">
                    <span className="opening-hours-day-holder">
                    <span className="opening-hours-day">Sabado</span>
                    </span>
                    <span className="opening-hours-line"></span>
                    <span className="opening-hours-time">09:00 - 02:30</span>
                    </span>
                 </div>
                 <div className="opening-hours-container font-size-14 ">
                    <span className="opening-hours-holder-inner">
                    <span className="opening-hours-day-holder">
                    <span className="opening-hours-day">Domingo</span>
                    </span>
                    <span className="opening-hours-line"></span>
                    <span className="opening-hours-time">Closed</span>
                    </span>
                 </div>
              </div>
             
           </div>
           <div className="row align-items-center">
              <div className="col-sm-4 mb-3 mb-sm-0">
                 <ul className="list-inline mb-0">
                    <li className="list-inline-item mb-2 mb-lg-0 mr-1"><a className="social-icon" href="#"><span><FacebookIcon size="17px"/></span></a></li>
                    <li className="list-inline-item mr-1"><a className="social-icon " href="#"><span><Twitter size="17px"/></span></a></li>
                    <li className="list-inline-item"><a className="social-icon " href="#"><span><Instagram size="17px"/></span></a></li>
                 </ul>
              </div>

              <div className="col-sm-4 text-sm-right">
                 <p className="small  text-secondary  mb-0">&copy; albirozadosimione@gmail.com. All rights reserved.</p>
                 
              </div>
           </div>
        </div>
     </footer>
    )
}