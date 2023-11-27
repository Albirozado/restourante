import Image from "next/image";
import styles from "../ui/adminStyles.module.css"
import { Suspense } from "react";
import Loading from "@/app/loading";
import { Alert, Space } from 'antd';

export default async function GetFastFood() {
  const responde = await fetch("https://smiling-gray-centipede.cyclic.app/api/getallgaleria",{
    cache: "no-cache"
  })
  const data = await responde.json() 
  return (
<section style={{paddingBottom: "3rem"}}>
<div className="container">
               <div className="row justify-content-center">
                  <div className="col">
                     <div className="mb-5 pb-5 text-center">
                        <span className="label-title mb-3">Nosso Tranalho</span>
                        <h1 className="h2 font-alt">Galeria</h1>
                        <p className="w-md-40 mb-0 mx-auto lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                     </div>
                  </div>
               </div>
            </div>
    <div className={styles.imageGaleria}>
           
        {data.length === 0 ? 
          <div style={{display: "block"}}>
            <div style={{width: "30rem", margin: "0 auto", maxWidth: "100%"}}>
            <Space
                                       direction="vertical"
                                       style={{
                                          width: '100%',
                                       }}
                                    >
                                       <Alert message="SEM IMAGENS AINDA" banner className=" font-semibold"/>
                                    </Space>

            </div>
          </div>
          :
          <>
        {data.map((g) => (
          <Suspense key={g._id} fallback = {<Loading/>}>

              <div key = {g._id} style={{position: "relative", display: "flex"}} className={styles.galBox}>
                  <Image src={g.galeriafoto} alt="" width={400} height={400} style={{maxWidth: "100%"}}/>

              </div>
          </Suspense>

        ))}
          </>
        }
        
    </div>
</section>
  );
}
