// src/components/ListaPosts.tsx
import { Post } from "@/types/Post";
import styles from "./ListaPosts.module.css";

/* Confirgurando um tipo para este componente e, neste tipo, definimos a prop posts relacionando ela ao tipo Post criado anteriormente  */
type ListaPostsProps = {
  posts: Post[];
};

export default function ListaPosts({ posts }: ListaPostsProps) {
  return (
    <div className={styles.posts}>
      {posts.map((post) => {
        return (
          <article key={post.id}>
            <h3>{post.titulo}</h3>
            <p>{post.subtitulo}</p>
          </article>
        );
      })}
    </div>
  );
}
