import styles from "../../components/ui/pratopreviewStyles.module.css"
import lanche from "../../../public/image/ensaio/menu/lunch/1.jpg"
import Image from "next/image";
import DeletePrato from "./DeletePrato"
import Link from "next/link";

export default async function fetchApi(){
    const res = await fetch ("https://smiling-gray-centipede.cyclic.app/api/getallprato",{
        cache: "no-store",
      });
    const data = await res.json()
   
    return(
   <>
   {data == 0 ? 
        <div >
            <h1 style={{ textAlign: "center", textTransform: "uppercase", fontSize: "1.8rem"}}><strong>adicione <br /> um <br /> prato</strong> </h1>
        </div>
    
   : 
   <>

{data.map((p)=>(
         
         <div className={styles.contentPreview} key={p._id}>
         <div className={styles.boxPreview}>
             <div className={styles.image} >
                <img src= {p.pratoimage} alt="" className={styles.imagePrato} style={{borderRadius: "5px"}}/>
             </div>
             <div className={styles.testContent}>
                 <span className={styles.pratonome}>{p.pratonome}</span>
                 <p>{p.pratodescri}</p>
                 <div style={{display: "flex", justifyContent: "space-between"}}>
                    <span style={{backgroundColor: "pink", padding: "0.5rem",color:"#333", borderRadius: ".5rem", textTransform: "uppercase", fontWeight: "600"}}> {p.pratocategoria}</span>
                    <span style={{margin: "0.5rem 0", display: "inline-block", fontWeight: "700"}}>{p.pratopreco}.00Mts</span> <br/>
                 </div>
             </div>
             <div className={styles.deletePrat}> 
                 <DeletePrato id={p._id} urlimage = {p.pratoimage}/>
             </div>
             
         </div>

         
     </div>
   ))}

   
   </>
   }
   
   </> 
    )
    
}
