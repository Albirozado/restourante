"use client"
import React, {useState} from 'react'
import MenuCompo from "../../app/menu/menuCompo"

export default function postPrato(){
    const [postimage, setPostImage] = useState("")
    const [pratoimage, setPratoImage] = useState("")
    const [pratonome, setPratoNome] = useState("")
    const [pratodescri, setPratoDescri] = useState("")
    const [pratopreco, setPratoPreco] = useState(0)
    const [pratocategoria, setPratoCategoria] = useState("")
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
            if(response.ok){
                console.log("dados enviados com sucesso")
            } else{
                console.log("erro no envio de dados")
        }
            
            
    
        }catch (error){
            console.log(error)
        }
    
    };
    /*
    <MenuCompo
    pratoimage = {pratoimage}
    setPratoImage = {setPratoImage}
    pratonome = {pratonome}
    setPratoNome = {setPratoNome}
    pratodescri = {pratodescri}
    setPratoDescri = {setPratoDescri}
    pratopreco = {pratopreco}
    setPratoPreco = {setPratoPreco}
    pratocategoria = {pratocategoria}
    setPratoCategoria = {setPratoCategoria}
    EnviarDados = {EnviarDados}


    />
    */

}