import styles from "./Formulario.module.css";

export default function Formulario() {
  return (
    <form action="" className={styles.formulario}>
      <div className={styles.campo}>
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          name="nome"
          id="nome"
          placeholder="Digite o nome completo"
        />
      </div>
      <div className={styles.campo}>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Informe um e-mail válido"
        />
      </div>
      <div className={styles.campo}>
        <label htmlFor="mensagem">Mensagem</label>
        <textarea
          name="mensagem"
          id="mensagem"
          rows={5}
          placeholder="Escreva sua mensagem aqui "
        ></textarea>
      </div>
      <div className={styles.campo}>
        <button type="submit">Enviar</button>
      </div>
    </form>
  );
}
