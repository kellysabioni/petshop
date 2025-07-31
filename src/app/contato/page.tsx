//src/app/contato/page.tsx
import { Metadata } from "next";
import styles from "./contato.module.css";

export const metadata: Metadata = {
  title: "Contato | PetShop",
  description: "Fale Conosco",
};

export default function Contato() {
  return (
    <section className={styles.conteudo}>
      <h2>Contato</h2>
      <p></p>
    </section>
  );
}
