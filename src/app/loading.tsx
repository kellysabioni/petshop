//src/app/loading.tsx
import Container from "@/components/Container";
import styles from "./loading.module.css";

export default function loading() {
  return (
    <section className={styles.conteudo}>
      <h2>Carregando</h2>
      <Container>
        <div className={styles.imagemLoading}>
          <img src="/images/loading.svg" alt="Pacman" />
        </div>
      </Container>
    </section>
  );
}
