"use client"
import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import {storage} from "../../../firebaseConfig"
import {ref, getDownloadURL, uploadBytesResumable, deleteObject} from "firebase/storage"
import Image from 'next/image'
import carregarPrato from "../../../public/image/admin/014upload2_99941.png"
import styles from "../../components/ui/adminStyles.module.css"
import { useRouter } from 'next/navigation'
import swal from "sweetalert"
import { Progress } from 'antd';



export default function Menu(){
/*
    onChange={(event) => uploadPostImage(event.target.files[0], setPostImage)}
    onChange={(e)=>setPratoNome(e.target.value)}  value={pratonome}
    onChange={(e)=>setPraDescri(e.target.value)} value={pratodescri}
    onChange={(e)=>setPratoPreco(e.target.value)} value={pratopreco}
    onChange={(e)=>setPratoCategoria(e.target.value)} value={pratocategoria}
*/ 
const [pratoimage, setPratoImage] = useState("")
const [pratonome, setPratoNome] = useState("")
const [pratodescri, setPratoDescri] = useState("")
const [pratopreco, setPratoPreco] = useState("")
const [pratocategoria, setPratoCategoria] = useState("")
const [progress, setProgress] = useState(0)
const router = useRouter()

const uploadPostImage = (file) =>{
    const produtoImageRef = ref(storage, `postImages/${file.name}`);
    const uploadTask = uploadBytesResumable(produtoImageRef, file)
    uploadTask.on("state_changed", 
    (snapshot) =>{
        const progress = Math.round(
            snapshot.bytesTransferred / snapshot.totalBytes * 100
            );
            setProgress(progress)
    }, 
    (error)=>{
        console.error(error)
    }, ()=>{
        getDownloadURL(uploadTask.snapshot.ref).then((response)=>{
            setPratoImage(response)

        })
    
    }
    )

}




const EnviarDados = async (e) =>{
    e.preventDefault();
    try{
        await fetch ("https://restouranteapinode.onrender.com/api/postprato", {
            method: "post",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({pratoimage, pratonome, pratodescri, pratopreco, pratocategoria}),
            
        })
        router.refresh()
        
       setPratoCategoria("")
       setPratoImage("")
       setPratoDescri("")
       setPratoNome("")
       setPratoPreco(0)
       setPratoImage("")
       setProgress(0)
       
        
        
        

    }catch (error){
        console.log(error)
    }

   


 

    

};


    return(
            <>
           
                
                                <form className={styles.menuAdmin} onSubmit={EnviarDados}>
                                <input type={"file"} name="" id="uploadprato" hidden onChange={(event) => uploadPostImage(event.target.files[0], setPratoImage)}/>
                                            <label htmlFor="uploadprato" className={styles.carregarPrato}>
                                                <span>carregar</span>
                                                <div>
                                                    <Image
                                                    src={carregarPrato}
                                                    width={20}
                                                    height={20}
                                                    
                                                    />
                                                </div>
                                              
                                            </label>
                                            {progress == 100 || progress == 0  ? 
                                            <div style={{margin: "0 auto"}}>
                                                <img src={pratoimage} alt="" style={{width: "8rem"}}/>
                                            </div>
                                            : 
                                            <div style={{margin: "0 auto"}}>
                                                <Progress type="circle" percent={progress} strokeWidth={2.8}  size={80} st status="active" strokeColor={"#fb8332"}  format={(percent) => <span style={{color: "white"}}>{percent}%</span>}/>
                                            </div>
                                            }
                                             <input className={styles.input} type="text" placeholder="Nome do Praro"  onChange={(e)=>setPratoNome(e.target.value)}  value={pratonome} style={{marginTop: "0.6rem"}}  />
                                           
    
                                            <textarea className={styles.input} type="text" placeholder="Descricao"     onChange={(e)=>setPratoDescri(e.target.value)} value={pratodescri}/>
                                            <input className={styles.input} type="number" placeholder="Preço" onChange={(e)=>setPratoPreco(e.target.value)} value={pratopreco}/>
                                            <select name="sdgdga" id="" className={styles.select}  onChange={(e)=>setPratoCategoria(e.target.value)} value={pratocategoria}>
                                                <option className={styles.option} style={{display: "none"}}>Categoria</option>
                                                <option className={styles.option} value="FastFood" >FastFood</option>
                                                <option className={styles.option} value="Cafe da Manha">Cafe da Manha</option>
                                                <option className={styles.option} value="Almonço">Almonço</option>
                                                <option className={styles.option} value="Sobremensa">Sobremensa</option>
                                            </select> 
                                            <input type="text"   value={pratoimage} style={{display: "none"}}/>

                                            
                                            <div style={{margin: "1rem auto"}}>
                                                {(pratonome.length === 0 || pratodescri.length === 0 || pratopreco.length === 0 || pratocategoria.length === 0 || pratoimage.length === 0) ? 
                                                     <button onClick={()=>swal("nao adicionado", "Preecha devidamente os campus", "error")} className={styles.button5}>Adicionar</button>
                                                     
                                                : 
                                                <button className={styles.button5} type="submit" role="button" onClick={()=>{
                                                    swal({
                                                        icon: "success",
                                                        title: "adicionado",
                                                    })
                                                }}>Adicionar</button>
                                                }
                                                
                                               
                                            </div>                             

                                          

                                            
                                </form>
                                
                                    

                        
                 
            </>
    )

}

