//src/app/not-found.tsx
import { Metadata } from "next";
import styles from "./not-found.module.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Página não encontrada | PetShop",
  robots: {
    index: false,
    follow: false,
  },
};
export default function NotFound() {
  return (
    <section className={styles.conteudo}>
      <h2>Ops! Página não encontrada...</h2>

      <div className={styles.imagem404}>
        <img
          src="/images/404.svg"
          alt="Cachorrinho com cara triste e nariz vermelho, com símbolo de interrogação"
        />
      </div>

      <p>
        <Link href="/">Voltar para Página Inicial </Link>
      </p>
    </section>
  );
}
