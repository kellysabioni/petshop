"use client";

import { useState } from "react";
import styles from "./Formulario.module.css";
import { enviarContato } from "@/lib/enviar-contato";
import { useFormStatus } from "react-dom";

function BotaoEnviar() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? "Processando" : "Enviar"}
    </button>
  );
}
export default function Formulario() {
  // Estados para os textos da mensagem
  const [mensagem, setMensagem] = useState("");

  // Estados para o tipo de mensagem: sucesso ou erro
  const [tipoMensagem, setTipoMensagem] = useState<"sucesso" | "erro" | "">("");

  async function processarDados(dadosForm: FormData) {
    // Reset dos states voltando ao valor padrão
    setMensagem("");
    setTipoMensagem("");

    try {
      await enviarContato(dadosForm);
      setMensagem("Mensagem enviado com sucesso!");
      setTipoMensagem("sucesso");

      //Reseta os campos do formulário
      dadosForm.set("nome", "");
      dadosForm.set("email", "");
      dadosForm.set("mensagem", "");
    } catch (error: unknown) {
      // Verificando se é um erro do type Erro, para evitar erros no deploy
      setMensagem(error instanceof Error ? error.message : "Erro ao enviar");
      setTipoMensagem("erro");
    }
  }
  return (
    <form action={processarDados} className={styles.formulario}>
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
        <BotaoEnviar />
      </div>

      {mensagem && (
        <p className={` ${styles.mensagem} ${styles[tipoMensagem]} `}>
          {mensagem}
        </p>
      )}
    </form>
  );
}
