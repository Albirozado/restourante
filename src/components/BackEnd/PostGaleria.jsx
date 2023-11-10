"use client"
import React, {useState, useEffect} from "react"
import Image from "next/image"
import styles from "../../components/ui/adminStyles.module.css"
import carregarImagem from "../../../public/image/admin/pngwing.com.png"
import { storage } from "../../../firebaseConfig"
import {ref, getDownloadURL, uploadBytesResumable, deleteObject} from "firebase/storage"
import { useRouter } from "next/navigation"



export default function PostGaleria(){
    const [galeriafoto, setGaleriafoto] = useState("")
    const [counter, setCounter] = useState(0)
    const [progress, setProgress] = useState(0)
    const [segundos, setSegundos] = useState(0);

    const router = useRouter()
    const uploadPostImage = (file) =>{
        const produtoImageRef = ref(storage, `galeriaImage/${file.name}`);
        const uploadTask = uploadBytesResumable(produtoImageRef, file)
        uploadTask.on("state_changed", 
        (snapshot) =>{
            const newProgress = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
              );
              console.log(newProgress);
      
              // Verifica se o progresso atingiu 100 antes de atualizar o estado
              if (newProgress === 100) {
                setProgress(newProgress);
               UploadGaleria();
                router.refresh()
              } else {
                setProgress(newProgress);
              }
            },
        (error)=>{
            console.error(error)
        }, ()=>{
            getDownloadURL(uploadTask.snapshot.ref).then((response)=>{
                setGaleriafoto(response)
    
            })
        
        }
        )
    
    }

    const UploadGaleria = async () =>{

        try{

            await fetch ("https://restouranteapinode.onrender.com/api/postgaleria", {
                method: "post",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({galeriafoto})
    
            })
        }catch (error){
            console.log(error)
        }
    }

  
    return(
        <>      
                    
                <form action="" onSubmit={UploadGaleria} >
                <input type={"file"} name="" id="galeriaImage" hidden onChange={(event) => uploadPostImage(event.target.files[0], setGaleriafoto)}/>
                    <label htmlFor="galeriaImage" style={{ display: "flex", alignItems: "center"}}>
                        <div style={{backgroundColor:"white", margin: "0 auto", cursor: "pointer", borderRadius: "0.5rem", padding: "1rem", marginTop: "0.5rem"}}>
                                <Image
                                src={carregarImagem}
                                style={{width: "5rem", height: "auto", margin: "auto"}}
                                />

                        </div>

                    </label>
                    <input type="text" onChange={(e)=>setGaleriafoto(e.target.value)} value={galeriafoto} hidden/>
                </form>
        </>
    )
}