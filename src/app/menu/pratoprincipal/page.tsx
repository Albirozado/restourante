import MenuCompo from "@/components/menu/MenuCompo"

export default async function PratoPrincipalPage(){
    const response = await fetch("https://smiling-gray-centipede.cyclic.app/api/getprincipal",{
        cache: "no-cache"
    })
    const data = await response.json()
    return(
        
        <section className="w-[1000px] max-w-full mx-auto">
            <div className="grid grid-cols-1 gap-2 sm:gap-4 sm:grid-cols-2  pb-3">
            {data.map((en: any)=>(
                <div className="flex flex-row justify-between flex-1 p-2 rounded-sm shadow-sm " style={{border: "solid 1px rgba(0,0,0,.12)"}} key={en._id}>
                    <MenuCompo
                    nome = {en.pratonome}
                    img = {en.pratoimage}
                    
                    />

                </div>
    
            ))}
                
            </div>

        </section>
    )

}