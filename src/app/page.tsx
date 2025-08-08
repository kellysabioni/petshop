// src/app/page.tsx
import ListaPosts from "@/components/ListaPosts";
import styles from "./page.module.css";
import { Post } from "@/types/Post";
import SemPosts from "@/components/SemPosts";

export default async function Home() {
  const resposta = await fetch(`http://localhost:2112/posts`, {
    /* Revalidamos o cache do next a cada requisição para garantir que os dados estejam sempre atualizados */
    next: { revalidate: 0 },
  });

  if (!resposta.ok) {
    throw new Error("Erro ao buscar os posts: " + resposta.statusText);
  }

  const posts: Post[] = await resposta.json();
  console.log(posts);

  return (
    <section className={styles.conteudo}>
      <h2>Pet Notícias</h2>
{/* Renderização CONDICIONAL */}
      {posts.length === 0 ? <SemPosts /> : <ListaPosts posts={posts} />}
    </section>
  );
}
