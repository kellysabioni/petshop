// src/components/ListaPosts.tsx
import { Post } from "@/types/Post";
import styles from "./ListaPosts.module.css";
import Link from "next/link";

type ListaPostsProps = {
  posts: Post[];
};

export default function ListaPosts({ posts }: ListaPostsProps) {
  return (
    <div className={styles.posts}>
      {posts.map(({ id, titulo, subtitulo }) => (
        <article key={id}>
          <Link href={`/posts/${id}`}>
            <h3>{titulo}</h3>
            <p>{subtitulo}</p>
          </Link>
        </article>
      ))}
    </div>
  );
}
