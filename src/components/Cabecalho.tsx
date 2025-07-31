import Link from "next/link";
import Menu from "./Menu";
import styles from "./Cabecalho.module.css";

export default function Cabecalho() {
  return (
    <header className={styles.topo}>
      <h1>
        <Link href="/">PetShop</Link>
      </h1>
      <Menu />
    </header>
  );
}
