import styles from "../../../styles/listTrain.module.css";
import CarTrain from "../../../components/carTrain";
import { items } from "../../../public/peito.json";
import { useState } from "react";
import SwiperCore, { Autoplay } from "swiper";
import CheckIn from "../../../components/checkIn";

export async function getStaticProps() {
  const data = await items;

  return {
    props: { data },
  };
}

export default function Perna({ data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show) ;
  };
  SwiperCore.use([Autoplay]);

  const handle = (id) => {
    // setLiga(id);
    setFilteredData(data.filter((exercicio) => exercicio.id == id));
  };

  return (
    <div className={styles.fundo}>
      <div className={styles.boxexercicio}>
        <div className={styles.fundoContainer}>
          <div className={styles.container}>
            <h1>Treino de peito</h1>
            <ul>
              {data.map((exercicio) => (
                <li key={exercicio.id}>
                  <a
                    className={styles.link}
                    onClick={() => {handle(exercicio.id)
                      handleShow()}}
                  >
                    {console.log(exercicio.id)}
                    {exercicio.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <main className={styles.slider}>
          
            {show && filteredData.map((exercicio) => (
              <CarTrain key={exercicio.id} exercicio={exercicio} />
            ))}
        
        </main>
      </div>
      <CheckIn></CheckIn>
    </div>
  );
}
