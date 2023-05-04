import styles from "../styles/dieta.module.css";
import "rc-slider/assets/index.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import SwiperCore, { Autoplay } from "swiper";


export default function CarrosselAlimentos() {
  SwiperCore.use([Autoplay]);

  return (
    <>
    <div className={styles.macros}>
          <ul>
            <li>
              <h3>dasdasd</h3>
              <p>asdasd</p>
            </li>
            <li>
              <h3>dasdasd</h3>
              <p>asdasd</p>
            </li>
            <li>
              <h3>dasdasd</h3>
              <p>asdasd</p>
            </li>
            <li>
              <h3>dasdasd</h3>
              <p>asdasd</p>
            </li>
            <li>
              <h3>dasdasd</h3>
              <p>asdasd</p>
            </li>
            <li>
              <h3>dasdasd</h3>
              <p>asdasd</p>
            </li>
          </ul>
        </div>
    <div className={styles.carrossel}>
          <div className={styles.slide}>
            <Swiper
              slidesPerView={1}
              spaceBetween={0}
              loop={true}
              autoHeight={true}
            >
              <SwiperSlide>
                <Image src="/images/abs.png" width={500} height={250} />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="/images/abs.png" width={500} height={250} />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="/images/abs.png" width={500} height={250} />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="/images/abs.png" width={500} height={250} />
              </SwiperSlide>
            </Swiper>
          </div>

          <div className={styles.botaosliders}>
            <button>Veja Mais</button>
            <button>veja Receitas</button>
            <button>Veja Cada Item</button>
          </div>
        </div>
    </>
  );
}
