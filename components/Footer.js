import style from "../styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className={style.footer}>
      <div>
        <Link href="/dieta">
          <Image src="/images/macro.png" width={500} height={250} />
        </Link>
      </div>
      <div>
        <Link href="/motivacao">
          <Image src="/images/dieta.png" width={500} height={250} />
        </Link>
      </div>
      <div>
        <Link href="/dieta">
          <Image src="/images/whey_.png" width={500} height={250} />
        </Link>
      </div>
    </footer>
  );
}
