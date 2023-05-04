// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay , Navigation,Pagination, Scrollbar, A11y} from "swiper";
import Image from "next/image";
import { items } from "../public/peito.json";
import styles from "../styles/banner.module.css";

// Import Swiper styles
import "swiper/css";
import { useEffect, useState } from "react";

export async function getStaticProps() {
  const treino = await items;

  return {
    props: { treino },
  };
}

export default function CarTrain({ exercicio }) {

  useEffect(() => {
    console.log(exercicio);
  }, []);

  SwiperCore.use([Autoplay]);

  return (
    <Swiper
    
    spaceBetween={150}
    centeredSlides
    slidesPerView={2}
  
      autoplay={{
        delay: 3500,
      }}
      loop={true}
      
    >
      {exercicio &&
        exercicio.image.map((url, index) => (
          <SwiperSlide>
            <div className={styles.container}>
              <div className={styles.wrapper}>
                <Image
                  className={styles.bannerimage}
                  src={url}
                  width={250}
                  height={250}
                />
                
                <p>
                  Lorem impsom, <br />
                  lorem lorem
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
}
