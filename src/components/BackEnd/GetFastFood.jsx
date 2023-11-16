import Image from "next/image";
import styles from "../ui/adminStyles.module.css"
export default async function GetFastFood() {
  const responde = await fetch("https://smiling-gray-centipede.cyclic.app/api/getallgaleria",{
    cache: "no-cache"
  })
  const data = await responde.json() 
  return (
    <div className={styles.imageGaleria}>

        {data.map((g) => (

              <div key = {g._id} style={{position: "relative", display: "flex"}} className={styles.galBox}>
                  <Image src={g.galeriafoto} alt="" width={400} height={400} style={{maxWidth: "100%"}}/>

              </div>
        ))}
        
    </div>
  );
}
