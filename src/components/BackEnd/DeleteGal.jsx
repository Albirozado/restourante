"use client"
import { useRouter } from "next/navigation"

export default function DeleteGal({id}) {
    const router = useRouter()
    const DeleteGaleria = async () =>{
        try {
            await fetch (`https://restouranteapinode.onrender.com/api/deletegaleria/${id}`, {
                method: "delete"
            })
            router.refresh()
            console.log("delete is done")
            
        } catch (error) {
            console.log(error)
            
        }

    }
    return(
        <button onClick={DeleteGaleria} style={{color: "black", background: "pink", padding: "0.4rem 0.8rem", fontWeight: "800", cursor: "pointer"}}>REMOVE</button>
    )
    
}