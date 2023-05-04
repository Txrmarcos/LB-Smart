// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import Image from "next/image";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";

export default function CarouselB() {
  SwiperCore.use([Autoplay]);

  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={0}
      autoplay={{
        delay:3500
      }}
      loop={true}
      
    >
      <SwiperSlide><Link href='/treinos/peito'><Image src='/images/sup.png' width={550} height={350*2}/></Link></SwiperSlide>
      <SwiperSlide><Link href='/treinos/abs'><Image src='/images/abs.png' width={550} height={350*2}/></Link></SwiperSlide>
      <SwiperSlide><Link href='/treinos/perna'><Image src='/images/pern.png' width={550} height={350*2}/></Link></SwiperSlide>
      <SwiperSlide><Link href='/treinos/perna'><Image src='/images/sup.png' width={550} height={350*2}/></Link></SwiperSlide>
      <SwiperSlide><Link href='/treinos/perna'><Image src='/images/abs.png' width={550} height={350*2}/></Link></SwiperSlide>
      <SwiperSlide><Link href='/treinos/perna'><Image src='/images/pern.png' width={550} height={350*2}/></Link></SwiperSlide>
    </Swiper>
  );
}

