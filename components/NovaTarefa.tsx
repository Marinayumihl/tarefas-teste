"use client";

import { FormEvent, useState } from "react";

interface NovaTarefaProps {
  onAdicionar: (titulo: string) => void;
}

export default function NovaTarefa({ onAdicionar }: NovaTarefaProps) {
  const [titulo, setTitulo] = useState("");
  const [erro, setErro] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!titulo.trim()) {
      setErro("Digite uma tarefa.");
      return;
    }

    onAdicionar(titulo.trim());

    setTitulo("");
    setErro("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nova-tarefa">Nova tarefa</label>

      <input
        id="nova-tarefa"
        type="text"
        placeholder="Digite uma tarefa"
        value={titulo}
        onChange={(event) => setTitulo(event.target.value)}
      />

      <button type="submit">Adicionar tarefa</button>

      {erro && <p role="alert">{erro}</p>}
    </form>
  );
}
