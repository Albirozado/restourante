import image1 from "../../../public/image/ensaio/especial/1.jpg"
import image2 from "../../../public/image/ensaio/especial/2.jpg"
import image3 from "../../../public/image/ensaio/especial/3.jpg"
import image4 from "../../../public/image/ensaio/especial/4.jpg"
import styles from "../../components/ui/adminStyles.module.css"
import Image from "next/image"
import PostGaleria from "../../components/BackEnd/PostGaleria"
import DeleteGal from "@/components/BackEnd/DeleteGal"

export default async function Galeria(){
    const res = await fetch ("https://restouranteapinode.onrender.com/api/getallgaleria", {
        cache: "no-cache"
    })
    const data = await res.json()
    return(
        <>
        <div className={styles.imageGaleria}>
            {data.map((image)=>(
                <div key = {image._id} style={{position: "relative"}}>
                    <img src={image.galeriafoto} alt="" style={{width: "15rem", height: "auto", maxWidth: "100%"}}/>
                    <div style={{position: "absolute", top: "0.5rem"}}>
                        <DeleteGal id = {image._id}/>
                    </div>
                </div>
            ))}
        </div>    
        <PostGaleria/>
        </>
    )
}