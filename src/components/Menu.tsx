"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./Menu.module.css";

export default function Menu() {
  const pathname = usePathname();
  return (
    <nav className={styles.menu}>
      <Link href="/" className={`link ${pathname === "/" ? styles.ativo : ""}`}>
        Blog
      </Link>
      <Link
        href="/produtos"
        className={`link ${pathname === "/produtos" ? styles.ativo : ""}`}
      >
        Produtos
      </Link>
      <Link
        href="/sobre"
        className={`link ${pathname === "/sobre" ? styles.ativo : ""}`}
      >
        Sobre
      </Link>
      <Link
        href="/contato"
        className={`link ${pathname === "/contato" ? styles.ativo : ""}`}
      >
        Contato
      </Link>
    </nav>
  );
}
