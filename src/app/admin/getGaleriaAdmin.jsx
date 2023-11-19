import styles from "../../components/ui/adminStyles.module.css"
import Image from "next/image"
import PostGaleria from "../../components/BackEnd/PostGaleria"
import DeleteGal from "@/components/BackEnd/DeleteGal"

export default async function Galeria({galeriafoto}){
    const res = await fetch ("https://smiling-gray-centipede.cyclic.app/api/getallgaleria", {
        cache: "no-cache"
    })
    const data = await res.json()
    return(
        <>
        <div className={styles.imageGaleria}>
            {data.map((image)=>(
                <div key = {image._id} style={{position: "relative"}} className={styles.galBox}>
                    <img src={image.galeriafoto} alt="" style={{width: "15rem", height: "auto", maxWidth: "100%"}}/>
                    <div style={{position: "absolute", top: "0.5rem"}} className={styles.contentDelete}>
                        <DeleteGal id = {image._id} linkimage = {image.galeriafoto}/>
                    </div>

                </div>
            ))}
        </div>    
        <PostGaleria/>
        </>
    )
}