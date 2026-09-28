# Gerenciador de Tarefas com Testes Unitários

Projeto desenvolvido em **Next.js 15 com TypeScript** para praticar a criação de componentes, Server Components, hooks personalizados e testes unitários utilizando Jest e Testing Library.

## Funcionalidades

- Exibição de uma lista inicial de tarefas
- Adição de novas tarefas
- Validação de tarefas vazias
- Contagem automática da quantidade de tarefas
- Dados simulados utilizando `Promise.resolve()`
- Testes unitários dos principais fluxos da aplicação

## Tecnologias utilizadas

- Next.js 15
- React
- TypeScript
- Jest
- Testing Library
- ESLint

## Estrutura do projeto

```text
app/
  page.tsx

components/
  ListaDeTarefas.tsx
  NovaTarefa.tsx

data/
  tarefas.ts

hooks/
  useContadorDeTarefas.ts

tests/
  NovaTarefa.test.tsx
  page.test.tsx
  useContadorDeTarefas.test.ts
```

## Como instalar

Clone o repositório e instale as dependências:

```bash
npm install
```

## Como executar

Para iniciar a aplicação em ambiente de desenvolvimento:

```bash
npm run dev
```

Depois, acesse:

```text
http://localhost:3000
```

## Como executar os testes

Para executar todos os testes unitários:

```bash
npm test
```

## Cobertura dos testes

Para gerar o relatório de cobertura dos testes:

```bash
npm run test:coverage
```

O projeto possui testes para os principais fluxos da aplicação:

- Renderização do campo e botão do componente `NovaTarefa`
- Validação ao tentar adicionar uma tarefa vazia
- Envio de uma nova tarefa
- Contagem das tarefas através do hook `useContadorDeTarefas`
- Renderização das tarefas carregadas pelo Server Component

### Resultado da cobertura

- Statements: **88,57%**
- Branches: **100%**
- Functions: **81,81%**
- Lines: **93,93%**

## Build de produção

Para gerar e verificar o build de produção:

```bash
npm run build
```

## Resultado dos testes

Foram implementadas **3 suítes de testes**, totalizando **6 testes unitários**.

```text
Test Suites: 3 passed, 3 total
Tests:       6 passed, 6 total
Snapshots:   0 total
```

Todos os testes foram executados com sucesso.