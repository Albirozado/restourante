"use client"
import { useRouter } from "next/navigation"
import {storage} from "../../../firebaseConfig"
import { ref, deleteObject } from "firebase/storage";

export default function DeleteGal({id, linkimage}) {
    const router = useRouter()
    const desertRef = ref(storage, linkimage);

    const DeleteGaleria = async () =>{
        try {
            await fetch (`https://smiling-gray-centipede.cyclic.app/api/deletegaleria/${id}`, {
                method: "delete"
            })
            router.refresh()
            console.log("delete is done")
            // Create a reference to the file to delete

            // Delete the file
            deleteObject(desertRef).then(() => {
            console.log("File deleted successfully")
            }).catch((error) => {
            console.log("Uh-oh, an error occurred!")
            });
        } catch (error) {
            console.log(error)
            
        }

    }
    return(
        <button onClick={DeleteGaleria} style={{color: "black", background: "pink", padding: "0.4rem 0.8rem", fontWeight: "800", cursor: "pointer"}}>REMOVER</button>
    )
    
}