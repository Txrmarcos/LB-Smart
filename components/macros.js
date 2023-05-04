import styles from "../styles/dieta.module.css";
import { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "swiper/css";

export default function Macros() {
  const [value, setValue] = useState(0);

  const marks = {
    0: "0",
    25: "1",
    50: "2-3",
    75: "4-5",
    100: "5+",
  };

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className={styles.formulario}>
        <form className={styles.dados}>
          <input type="number" max="100"></input>
          <input type="number" max="100"></input>
          <input type="number" max="100"></input>
          <Slider
            className={styles.barra}
            min={0}
            max={100}
            value={value}
            marks={marks}
            onChange={handleChange}
          />
        </form>
      </div>
      <div className={styles.botao}>
        <button>Ganhar Massa</button>
        <button>Manter</button>
        <button>Perder Massa</button>
      </div>
    </>
  );
}
