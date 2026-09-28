# Gerenciador de Tarefas com Testes Unitários e CI/CD

Projeto desenvolvido em **Next.js 15 com TypeScript** para praticar a criação de componentes, Server Components, hooks personalizados, testes unitários e automação de CI/CD utilizando GitHub Actions e Vercel.

## Site publicado

A aplicação está disponível em produção:

https://tarefas-teste.vercel.app

## Funcionalidades

- Exibição de uma lista inicial de tarefas
- Adição de novas tarefas
- Validação de tarefas vazias
- Contagem automática da quantidade de tarefas
- Dados simulados utilizando `Promise.resolve()`
- Testes unitários dos principais fluxos da aplicação
- Pipeline automatizada de CI/CD
- Deploy automático na Vercel

## Tecnologias utilizadas

- Next.js 15
- React
- TypeScript
- Jest
- Testing Library
- ESLint
- GitHub Actions
- Vercel

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

.github/
  workflows/
    main.yml
```

## Como instalar

Clone o repositório e instale as dependências:

```bash
npm install
```

Também é possível instalar as dependências utilizando:

```bash
npm ci
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

## Como executar o lint

Para verificar a qualidade e padronização do código:

```bash
npm run lint
```

## Como executar os testes

Para executar todos os testes unitários:

```bash
npm run test
```

## Cobertura dos testes

Para gerar o relatório de cobertura:

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

## Pipeline CI/CD

O projeto utiliza **GitHub Actions** para automatizar a validação, os testes, o build e o deploy da aplicação.

O workflow está localizado em:

```text
.github/workflows/main.yml
```

### Integração Contínua (CI)

A pipeline de CI é executada automaticamente em pushes e pull requests direcionados à branch `main`.

São executadas as seguintes etapas:

```bash
npm ci
npm run lint
npm run test
npm run build
```

Dessa forma, o código é validado automaticamente antes do deploy.

### Entrega Contínua (CD)

Após a conclusão bem-sucedida do CI em um push para a branch `main`, o GitHub Actions executa automaticamente o deploy da aplicação na **Vercel**.

O deploy utiliza secrets configurados no GitHub para armazenar de forma segura as credenciais necessárias:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

O job de deploy depende da conclusão bem-sucedida do job de CI, evitando a publicação caso os testes, o lint ou o build apresentem erros.

## Deploy

A aplicação está hospedada na **Vercel** e pode ser acessada em:

https://tarefas-teste.vercel.app
