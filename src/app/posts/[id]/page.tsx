//sr/app/posts/[id]/page.tsx
import Container from "@/components/Container";
import styles from "./detalhe-post.module.css";
import { Post } from "@/types/Post";

type DetalhePostProps = {
  params: Promise<{ id: string }>;
};


export async function generateMetadata({ params }: DetalhePostProps) {
  const { id } = await params;

  // 2. Faz um novo fetch na API usando o ID recebido
  const resposta = await fetch(`http://localhost:2112/posts/${id}`, {
    next: { revalidate: 0 },
  });

  if (!resposta.ok) {
    throw new Error("Erro ao buscar o post: " + resposta.statusText);
  }

  const post: Post = await resposta.json();

  return {
    title: post.titulo + "| PetShop",
    description: post.descricao,
  };
}

export default async function DetalhePost({ params }: DetalhePostProps) {
  const { id } = await params;

  // 2. Faz um novo fetch na API usando o ID recebido
  const resposta = await fetch(`http://localhost:2112/posts/${id}`, {
    next: { revalidate: 0 },
  });

  if (!resposta.ok) {
    throw new Error("Erro ao buscar o post: " + resposta.statusText);
  }

  const post: Post = await resposta.json();

  return (
    <article className={styles.conteudo}>
      <h2>{post.titulo}</h2>
      <Container>
        <h3>{post.categoria}</h3>
        <p>{post.descricao}</p>
      </Container>
    </article>
  );
}
