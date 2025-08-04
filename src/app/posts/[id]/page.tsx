//sr/app/posts/[id]/page.tsx

import Container from "@/components/Container";
import styles from "./detalhe-post.module.css";

export default function DetalhePost() {
  return (
    <article className={styles.conteudo} >
      <h2>Titulo</h2>
      <Container>
        <h3>Categoria</h3>
        <p>Descrição</p>
      </Container>
    </article>
  );
}
