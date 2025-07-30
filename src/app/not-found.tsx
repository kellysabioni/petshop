//src/app/not-found.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página não encontrada | PetShop",
  robots: {
    index: false,
    follow: false,
  },
};
export default function NotFound() {
  return (
    <section>
      <h2>Ops! Página não encontrada...</h2>
    </section>
  );
}
