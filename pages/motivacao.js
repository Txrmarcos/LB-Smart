import Spotify from '../components/spotify'
import Tiktok from '../components/tiktok'
import styles from "../styles/Motivacao.module.css"

export default function Motivacao(){
    return(
        <div className={styles.motivacao}>
            <Spotify></Spotify>
        
            <Tiktok></Tiktok>
        </div>
    )
}