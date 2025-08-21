// src/components/Semposts.tsx

import styles from "./SemPosts.module.css";
import Container from "./Container";

export default function SemPosts() {
  return (
    <Container>
      <p className={styles.semPosts}>Nenhum post encontrado!</p>
      <p className={styles.semPosts}>Tente novamente mais tarde.</p>
    </Container>
  );
}
