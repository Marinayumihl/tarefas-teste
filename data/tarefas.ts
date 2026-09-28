export interface Tarefa {
  id: number;
  titulo: string;
}

export const tarefasIniciais: Tarefa[] = [
  {
    id: 1,
    titulo: "Estudar Next.js",
  },
  {
    id: 2,
    titulo: "Praticar testes unitários",
  },
  {
    id: 3,
    titulo: "Finalizar atividade",
  },
];

export async function buscarTarefas(): Promise<Tarefa[]> {
  return Promise.resolve(tarefasIniciais);
}