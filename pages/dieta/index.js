import styles from "../../styles/dieta.module.css";
import "rc-slider/assets/index.css";
import "swiper/css";
import Macros from '../../components/macros'
import CarrosselAlimentos from '../../components/carrosselAlimentos'

export default function Dieta() {
 


  return (
    <div className={styles.container}>
      <Macros></Macros>
      <div className={styles.containerRecomendacao}>
        <CarrosselAlimentos></CarrosselAlimentos>
      </div>
    </div>
  );
}
