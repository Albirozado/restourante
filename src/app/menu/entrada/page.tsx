import Image from "next/image"
import ImageTest from "../../../../public/image/ensaio/especial3.jpg" 

export default async function Entradapage(){
    const response = await fetch("https://restouranteapinode.onrender.com/api/getentradas",{
        cache: "no-cache"
    })
    const data = await response.json()
    return(
        
        <section className="w-[1000px] max-w-full mx-auto">
            <div className="grid grid-cols-1 gap-2 sm:gap-4 sm:grid-cols-2  pb-3">
            {data.map((en: any)=>(
                <div className="flex flex-row justify-between flex-1 p-2 rounded-sm shadow-sm " key={en._id} style={{border: "solid 1px rgba(0,0,0,.12)"}}>
                        <div >
                            <div className="space-y-2">
                                <h3 className="text-base font-medium leading-6 text-gray-700 line-clamp-2">{en.pratonome}</h3>
                                <p className="text-sm font-light text-gray-500 line-clamp-2">Frango tradicional, acompanhado de alface americana e batata-frita. Acompanha porção de Arroz</p>
                            </div>
                            <div className="mt-3 text-base text-gray-700 md:mt-6">R$ 32,00</div>

                        </div>
                        <div className="p-1 ml-4">
                            <div className="overflow-hidden rounded-lg w-28 h-28 lg:w-32 lg:h-32 sm:w-30 sm:h-30">
                                <div className="lazyload-wrapper w-full h-full bg-pink-500">
                                    
                                    <Image
                                        className="bg-gray-100 object-cover object-center w-28 h-28 lg:w-32 lg:h-32 sm:w-30 sm:h-30 block"
                                        width={200}
                                        height={200}
                                        src={en.pratoimage}
                                        alt="image"
                                    />
                                </div>
                            </div>

                        </div>
                </div>
            ))}
                
            </div>


        </section>
    )
}