// src/components/ListaPosts.tsx
import styles from "./ListaPosts.module.css";

export default function ListaPosts() {
  return <div className={styles.posts} >
    <article>
        <h3>Titulo do post</h3>
        <p>Subtitulo do post</p>
    </article>
  </div>;
}
