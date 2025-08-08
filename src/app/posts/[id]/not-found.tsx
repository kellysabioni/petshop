//src/app/posts/[id]/not-found.tsx
import Container from "@/components/Container";
import styles from "./not-found.module.css";
import Link from "next/link";
export default function PostNaoEncontrado() {
  return (
    <section className={styles.conteudo}>
      <h2>Ops! Post não encontrado</h2>
      <Container>
        <p>O Post que voce está tentando encontrar não existe </p>
        <p>
          <Link href="/">Voltar para a pagina principal</Link>
        </p>
      </Container>
    </section>
  );
}
