//src/app/contato/page.tsx
import { Metadata } from "next";
import styles from "./contato.module.css";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Contato | PetShop",
  description: "Fale Conosco",
};

export default function Contato() {
  return (
    <section className={styles.conteudo}>
      <h2>Contato</h2>
      <Container>
        <p>
          Você pode nos enviar um e-mail para{" "}
          <a href="mailto:contato@petshop.com">contato@petshop.com</a> ou nos
          ligar pelo telefone <a href="tel:+5511999999999">+55 11 99999-9999</a>
        </p>

        <p>Se preferir, use o formulário abaixo:</p>
      </Container>
    </section>
  );
}
