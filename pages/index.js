import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Image from "next/image";
import CarouselB from "@/components/carouselb";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Página Principal</title>
        <meta name="Keywords" content="Academia, Suplementos, Saude"></meta>
      </Head>
      <CarouselB></CarouselB>
    </>
  );
}
