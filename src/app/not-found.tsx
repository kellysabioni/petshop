//src/app/not-found.tsx
import { Metadata } from "next";
import styles from "./not-found.module.css";

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
    </section>
  );
}
