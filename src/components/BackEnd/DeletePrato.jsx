"use client"
import {storage} from "../../../firebaseConfig"
import {ref, deleteObject} from "firebase/storage"
import { useRouter } from "next/navigation"
import swal from "sweetalert"

export default function DeletePrato({id, urlimage}){

const router = useRouter()
const desertRef = ref(storage, urlimage);

    const deletePrato =  async () =>{
        await fetch(`https://restouranteapinode.onrender.com/api/deleteprato/${id}` ,{
            method: "delete"
        })
        router.refresh()
            swal({
                icon: "success",
                title: "Deletado",
            })
        
            console.log("prato deletado")

            // Delete the file
            deleteObject(desertRef).then(() => {
                console.log("imagem deletada")
            // File deleted successfully
            }).catch((error) => {
                console.log(error)
            // Uh-oh, an error occurred!
            });
            
                
    }


    return(

        <>
        <button onClick={deletePrato} style={{color: "white", fontWeight: "bolder", backgroundColor: "#c30404", padding: "0.3rem 0.8rem", cursor: "pointer", marginTop: "0.3rem", borderRadius: "5px"}}>DELETE</button>
        </>
    )  

}