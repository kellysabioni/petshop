// src/app/page.tsx
import ListaPosts from "@/components/ListaPosts";
import styles from "./page.module.css";
export default function Home() {
  return (
    <section className={styles.conteudo}>
      <h2>Pet Notícias</h2>
      <p>Aqui voce encontra as últimas notícias sobre Pets.</p>
      <ListaPosts />
    </section>
  );
}
