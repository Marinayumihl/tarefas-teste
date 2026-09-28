import ListaDeTarefas from "@/components/ListaDeTarefas";
import { buscarTarefas } from "@/data/tarefas";

export default async function Home() {
  const tarefas = await buscarTarefas();

  return (
    <main>
      <h1>Gerenciador de Tarefas</h1>

      <p>Organize suas tarefas de forma simples.</p>

      <ListaDeTarefas tarefasIniciais={tarefas} />
    </main>
  );
}