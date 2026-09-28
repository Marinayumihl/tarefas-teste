"use client";

import { useState } from "react";
import NovaTarefa from "./NovaTarefa";
import { useContadorDeTarefas } from "@/hooks/useContadorDeTarefas";
import type { Tarefa } from "@/data/tarefas";

interface ListaDeTarefasProps {
  tarefasIniciais: Tarefa[];
}

export default function ListaDeTarefas({
  tarefasIniciais,
}: ListaDeTarefasProps) {
  const [tarefas, setTarefas] = useState<Tarefa[]>(tarefasIniciais);

  const quantidade = useContadorDeTarefas(tarefas);

  function adicionarTarefa(titulo: string) {
    const novaTarefa: Tarefa = {
      id: Date.now(),
      titulo,
    };

    setTarefas((tarefasAtuais) => [...tarefasAtuais, novaTarefa]);
  }

  return (
    <section>
      <h2>Minhas tarefas</h2>

      <p>Total de tarefas: {quantidade}</p>

      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>{tarefa.titulo}</li>
        ))}
      </ul>

      <NovaTarefa onAdicionar={adicionarTarefa} />
    </section>
  );
}