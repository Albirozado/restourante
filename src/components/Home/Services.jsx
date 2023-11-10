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
                    <span className="label-title mb-3">Our Services</span>
                    <h1 className="h2 font-alt">Customers Services</h1>
                    <p className="w-md-40 mb-0 mx-auto lead">The time has come to bring those ideas and plans to life. This is where we really begin to visualize.</p>
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
                          <h4 className="h6 mb-2">Quality Check</h4>
                          <p className="mb-0">Web development refers to the tasks of developing websites for hosting via intranet or internet.</p>
                       </div>
                    </div>
                 </div>
              </div>
              <div className="col-6 col-lg-3 mb-5 mb-lg-0">
                 <div className="text-center card mb-5 border-0">
                    <div className="card-body p-0">
                       <Image className="max-width-sm mb-3" src={open} alt="" style={{margin: "0 auto"}}/>
                       <div>
                          <h4 className="h6 mb-2">Opens 24/7</h4>
                          <p className="mb-0">Web design require many different skills and disciplines in the production and maintenance of websites.</p>
                       </div>
                    </div>
                 </div>
              </div>
              <div className="col-6 col-lg-3 ">
                 <div className="text-center card mb-5 border-0">
                    <div className="card-body p-0">
                       <Image className="max-width-sm mb-3" src={parking} alt="" style={{margin: "0 auto"}}/>
                       <div>
                          <h4 className="h6 mb-2">Free Parking</h4>
                          <p className="mb-0">Web design require many different skills and disciplines in the production and maintenance of websites.</p>
                       </div>
                    </div>
                 </div>
              </div>
              <div className="col-6 col-lg-3 ">
                 <div className="text-center card mb-5 border-0">
                    <div className="card-body p-0">
                       <Image className="max-width-sm mb-3" src={chef} alt="" style={{margin: "0 auto"}}/>
                       <div>
                          <h4 className="h6 mb-2">Food Meets Style</h4>
                          <p className="mb-0">Web development refers to the tasks of developing websites for hosting via intranet or internet.</p>
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