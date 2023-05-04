import styles from "../styles/metas.module.css";
import "rc-slider/assets/index.css";
import ProgressBar from "./progressBar";

export default function Metas() {

  return (
    <div className={styles.container}>
      <div className={styles.metas}>
        <ProgressBar></ProgressBar>
        <ProgressBar></ProgressBar>
        <ProgressBar></ProgressBar>
        <ProgressBar></ProgressBar>
      </div>
      <div className={styles.containerRec}>
        <div className={styles.recomendacao}>
            <div className={styles.div1}></div>
            <div className={styles.div2}></div>
            <div className={styles.div3}></div>
            <div className={styles.div4}></div>
        </div>
        <button>testeste</button>
      </div>
    </div>
  );
}
