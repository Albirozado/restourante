import Loading from "@/app/loading"
import Image from "next/image"
import { Suspense } from "react"
import { Alert, Space } from 'antd';

export default async function Menu(){
   const  res = await fetch("https://smiling-gray-centipede.cyclic.app/api/getmaispedidos",{
      cache: "no-cache"
   })
   const data = await res.json()
    return(
        <section id="menu"  className="spacer-double-lg" style={{paddingTop: "0"}}>
        <div className="container">
           <div className="row justify-content-center">
              <div className="col">
                 <div className="mb-5 pb-5 text-center">
                    <span className="label-title mb-3">Nosso Menu</span>
                    <h1 className="h2 font-alt">Menu (Destaque)</h1>
                    <p className="w-md-40 mb-0 mx-auto lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                 </div>
              </div>
           </div>
        </div>
        <div className="menuZao" >
           <div className="row justify-content-around align-items-center">
              <div className="col-md-8 col-lg-7 ">
                 <div className="tab-content">

                        <div className="tab-pane">
                           {data.length === 0 ? 
                              <div>
                                     <Space
                                       direction="vertical"
                                       style={{
                                          width: '100%',
                                       }}
                                    >
                                       <Alert message="SEM DADOS AINDA" banner className=" font-semibold"/>
                                    </Space>
                              </div>

                              :
                              <>
                           {data.map((m)=>(
                              <Suspense fallback = {<Loading/>} key={m._id}>
                                 <div className="media align-items-center mb-4 " key={m._id}>
                                    <Image width={100} height={100} className="avatar-sm rounded-circle mr-3" src={m.pratoimage} alt=""/>
                                    <div className="media-body position-relative">
                                       <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">{m.pratonome}</span></h6>
                                       <span className="dots-price"></span>
                                       <span className="menu-price mb-0 h6  ">{m.pratopreco}.00MTN</span>
                                       <p className="mb-0 font-size-14">{m.pratodescri}</p>
                                    </div>
                                 </div>

                              </Suspense>
                           ))}
                              </>
                           }
                        </div>
                    </div>
              </div>
           </div>
        </div>
     </section>
    )
}