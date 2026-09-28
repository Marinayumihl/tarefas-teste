import { fireEvent, render, screen } from "@testing-library/react";
import NovaTarefa from "@/components/NovaTarefa";

describe("NovaTarefa", () => {
  it("renderiza o campo e o botão", () => {
    const onAdicionar = jest.fn();

    render(<NovaTarefa onAdicionar={onAdicionar} />);

    expect(screen.getByLabelText("Nova tarefa")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Adicionar tarefa" })
    ).toBeInTheDocument();
  });

  it("exibe erro ao tentar adicionar uma tarefa vazia", () => {
    const onAdicionar = jest.fn();

    render(<NovaTarefa onAdicionar={onAdicionar} />);

    fireEvent.click(
      screen.getByRole("button", { name: "Adicionar tarefa" })
    );

    expect(screen.getByRole("alert")).toHaveTextContent(
      "Digite uma tarefa."
    );

    expect(onAdicionar).not.toHaveBeenCalled();
  });

  it("adiciona uma tarefa preenchida", () => {
    const onAdicionar = jest.fn();

    render(<NovaTarefa onAdicionar={onAdicionar} />);

    const input = screen.getByLabelText("Nova tarefa");

    fireEvent.change(input, {
      target: { value: "Estudar Jest" },
    });

    fireEvent.click(
      screen.getByRole("button", { name: "Adicionar tarefa" })
    );

    expect(onAdicionar).toHaveBeenCalledWith("Estudar Jest");
    expect(input).toHaveValue("");
  });
});