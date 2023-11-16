import Image from "next/image";
import { arrayBuffer } from "node:stream/consumers";
import {getPlaiceholder} from "plaiceholder"

export default async function MenuCompo(props : any){
    const buffer = await fetch(props.img).then(async (res) =>{
        return Buffer.from(await res.arrayBuffer())
})
const {base64} = await getPlaiceholder(buffer) 
    return(
        <>
        <div >
            <div className="space-y-2">
                <h3 className="text-base font-semibold leading-6 text-gray-700 line-clamp-2">{props.nome}</h3>
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
                        src={props.img}
                        alt="image"
                        placeholder="blur"
                        blurDataURL={base64}
                    />
                </div>
            </div>

        </div>
        </>

    )
}