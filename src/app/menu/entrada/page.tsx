import Image from "next/image"
import ImageTest from "../../../../public/image/ensaio/especial3.jpg" 
import MenuCompo from "@/components/menu/MenuCompo"
import Loading from "@/app/loading"
import { Suspense } from "react"
import { Alert, Space } from 'antd';

export default async function Entradapage(){
    const response = await fetch("https://smiling-gray-centipede.cyclic.app/api/getentradas",{
        cache: "no-cache"
    })
    const data = await response.json()
    return(
        
        <section className="w-[1000px] max-w-full mx-auto">
            <div className="grid grid-cols-1 gap-2 sm:gap-4 sm:grid-cols-2  pb-3">
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
                         {data.map((en: any)=>(
                            <Suspense fallback = {<Loading/>} key={en._id}>

                    <div className="flex flex-row justify-between flex-1 p-2 rounded-sm shadow-sm " style={{border: "solid 1px rgba(0,0,0,.12)"}} key={en._id}>
                        <MenuCompo
                        nome = {en.pratonome}
                        img = {en.pratoimage}
                        descri = {en.pratodescri}
                        preco = {en.pratopreco}
                        
                        />

                    </div>
                            </Suspense>
                    
            
    
                        ))}
            
                </>
                }
               
              
                
                
            </div>

        </section>
    )
}