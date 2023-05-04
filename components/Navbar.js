import Link from "next/link";
import Search from "./Search.js";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.container}>
      <Search></Search>
      <ul className={styles.navbar}>
        <li>
          <Link href="/" className="a">
            Home
          </Link>
        </li>
        <li>
          <Link href="/products" className="a">
            Produtos
          </Link>
        </li>
        <li>
          <Link href="/about" className="a">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className="a">
            Contact
          </Link>
          <Link href="/todos" className="a">
            A fazer
          </Link>
        </li>
      </ul>
    </nav>
  );
}
