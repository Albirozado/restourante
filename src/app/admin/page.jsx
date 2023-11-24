import styles from "../../components/ui/adminStyles.module.css"

import MenuCompo from "../admin/menuCompo"
import Galeria from "../admin/getGaleriaAdmin"
import FetchApi from "../../components/BackEnd/fetchApi"
import Footer from "@/components/Home/Footer"
export default function Admin(){
    return(
        <>
            <section >
                <section className={styles.adminMenu}>
                    <div style={{width: "100%", margin: "auto 0", paddingTop: "5rem", paddingBottom: "5rem"} }>
                        <MenuCompo/>
                        <div className={styles.containerPrev}>
                            <FetchApi />

                        </div>
                      

                    </div >
                    <div style={{width: "100%", margin: "auto 0"}}>

                        <Galeria/>
                    </div>
                    
                </section>
                <footer>
                    <Footer/>
                </footer>

            </section>


        </>
    )
}