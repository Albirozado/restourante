import styles from "../../components/ui/pratopreviewStyles.module.css"
import lanche from "../../../public/image/ensaio/menu/lunch/1.jpg"
import Image from "next/image"
export default function previewPrato(){

    const SoFetchData = async () =>{
        const res = await fetch ("https://restouranteapinode.onrender.com/api/getallprato",{
            cache: "no-store",
          });
    const DataFetch = await res.json()
    console.log(DataFetch)
    }


    return(


        <section>
         <div className={styles.contentPreview}>
                <div className={styles.boxPreview}>
                    <div className={styles.image}>
                        <Image
                        style={{borderRadius: "50%"}}
                        src={lanche}
                        width={50}
                        height={50}
                        />


                    </div>
                    <div>
                        <span>title prato</span>
                        <p>descricao</p>
                        <span>preço</span> <br />
                        <span>categoria</span>
                    </div>
                    <div>
                        <p>delete</p>
                    </div>
                </div>
                
            </div>
        </section>
    )
}