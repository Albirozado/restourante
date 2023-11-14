import Image from "next/image"
import ImageTest from "../../../public/image/ensaio/especial2.jpg"
export default function MenuComponent(){

    const data = [
        {id: 1, name: 'File de Frango', descri: 'Frango tradicional, acompanhado de alface americana e batata-frita. Acompanha porção de Arroz', preco: "R$ 32,00", image: `${ImageTest}`}, 
        {id: 2, name: 'File de Frango', descri: 'Frango tradicional, acompanhado de alface americana e batata-frita. Acompanha porção de Arroz', preco: "R$ 32,00", image: `${ImageTest}`}, 
        {id: 3, name: 'File de Frango', descri: 'Frango tradicional, acompanhado de alface americana e batata-frita. Acompanha porção de Arroz', preco: "R$ 32,00", image: `${ImageTest}`}, 
        {id: 4, name: 'File de Frango', descri: 'Frango tradicional, acompanhado de alface americana e batata-frita. Acompanha porção de Arroz', preco: "R$ 32,00", image: `${ImageTest}`}, 
      
      
      ]
      
    return(
        <section>
            {data.map((menu)=>(

        <div className="grid grid-cols-1 gap-2 sm:gap-4 sm:grid-cols-2">

        <div className="flex flex-row justify-between flex-1 p-2">
                <div>
                    <div className="space-y-2">
                        <h3 className="text-base font-medium leading-6 text-gray-700 line-clamp-2">File de Frango</h3>
                        <p className="text-sm font-light text-gray-500 line-clamp-2">Frango tradicional, acompanhado de alface americana e batata-frita. Acompanha porção de Arroz</p>
                    </div>
                    <div className="mt-3 text-base text-gray-700 md:mt-6">{menu.preco}</div>

                </div>
                <div className="p-1 ml-4">
                    <div className="overflow-hidden rounded-lg w-28 h-28 lg:w-32 lg:h-32 sm:w-30 sm:h-30">
                        <div className="lazyload-wrapper w-full h-full">
                            <Image
                            style={{
                                maxWidth: "100%",
                                height: "100%"
                            }}
                                width={200}
                                height={200}
                                src={menu.image}
                                alt="image"
                            />
                        </div>
                    </div>

                </div>
            </div>
            
        </div>
            ))}


    </section>
    )
}