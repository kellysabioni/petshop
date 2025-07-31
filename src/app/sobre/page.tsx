//src/app/sobre/page.tsx
import { Metadata } from "next";
import styles from "./sobre.module.css";

export const metadata: Metadata = {
  title: "Sobre | PetShop",
  description: "Maiores Informações",
};

export default function Sobre() {
  return (
    <section className={styles.conteudo}>
      <h2>Sobre</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse doloribus
        harum cumque eligendi maxime dolorem, aspernatur enim ratione nisi,
        fugiat minima officia accusantium eaque qui.
      </p>
    </section>
  );
}
