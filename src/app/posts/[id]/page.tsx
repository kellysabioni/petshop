//sr/app/posts/[id]/page.tsx
import Container from "@/components/Container";
import styles from "./detalhe-post.module.css";
import { Post } from "@/types/Post";
import { notFound } from "next/navigation";

type DetalhePostProps = { params: Promise<{ id: string }> };

/* A função abaixo precisa:
- Receber o ID
- Executar o acesso a API usando o ID como string e retornar o post com os dados
- O retorno da função DEVE SER uma Promise
- Não se esqueça de chamar/usar esta nova função dentro do generateMetadata e do DetalhePost no lugar do código que você irá remover */
async function buscarPostPorId(id: string): Promise<Post> {
  const resposta = await fetch(`http://localhost:2112/posts/${id}`, {
    next: { revalidate: 0 },
  });

  if (resposta.status === 404) {
    notFound();
  }

  if (!resposta.ok) {
    throw new Error("Erro ao buscar o post: " + resposta.statusText);
  }
  const post: Post = await resposta.json();
  return post;
}

export async function generateMetadata({ params }: DetalhePostProps) {
  const { id } = await params;
  const post = await buscarPostPorId(id);
  return {
    title: post.titulo + " | PetShop",
    description: post.descricao,
  };
}

export default async function DetalhePost({ params }: DetalhePostProps) {
  const { id } = await params;
  const post = await buscarPostPorId(id);
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
