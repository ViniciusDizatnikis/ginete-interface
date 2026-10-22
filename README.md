# Projeto

Base de front-end em **React 19 + TypeScript + Vite**.

## Comandos

```bash
npm run dev      # servidor de desenvolvimento
npm run build    # typecheck (tsc -b) + build de produção
npm run lint     # ESLint
npm run preview  # serve o build
```

## Estrutura

```
src/
  main.tsx       # ponto de entrada: monta o App no #root
  App.tsx        # componente raiz
  index.css      # reset + variáveis globais (cores, espaçamento)
```

## Convenções

1. **É uma tela nova?** Crie um arquivo em `src/pages/` e adicione um `<Route>` no `App.tsx` (instale `react-router-dom` se ainda não).
2. **É um pedaço de UI que vai se repetir?** Crie em `src/components/ui/` com uma pasta e um `X.module.css`.
3. **É uma parte do app com dados ou regra própria?** Crie uma pasta em `src/features/`.

Importe pelo caminho com o alias `@/` (aponta para `src/`):

```tsx
import App from '@/App'
```
