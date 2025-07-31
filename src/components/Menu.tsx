import Link from "next/link";
import styles from "./Menu.module.css";

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <Link href="/">Blog</Link>
      <Link href="/produtos">Produtos</Link>
      <Link href="/sobre">Sobre</Link>
      <Link href="/contato">Contato</Link>
    </nav>
  );
}
