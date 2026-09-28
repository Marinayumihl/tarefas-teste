import { useMemo } from "react";
import type { Tarefa } from "@/data/tarefas";

export function useContadorDeTarefas(tarefas: Tarefa[]) {
  const quantidade = useMemo(() => {
    return tarefas.length;
  }, [tarefas]);

  return quantidade;
}