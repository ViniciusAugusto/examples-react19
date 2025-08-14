# React 19 + Next.js 15 

Este projeto demonstra o uso de formulários modernos com React 19 e Next.js 15, incluindo Server Actions, Server Components, Client Components, uso do hook `use()`, e integração com APIs externas.

## Pré-requisitos
- Node.js 18+
- npm ou bun

## Instalação

```bash
npm install
# ou
bun install
```

## Executando o projeto

1. Inicie o servidor de comentários (API externa usada nos exemplos):
   - Certifique-se de que o serviço de comentários está rodando em `http://localhost:3001/comments`.
   - Você pode usar um mock server, json-server ou sua própria API.
   - Exemplo usando json-server:
     ```bash
     npx json-server --watch comments.json --port 3001
     ```

2. Inicie o projeto Next.js:
   ```bash
   npm run dev
   # ou
   bun run dev
   ```

3. Acesse no navegador:
   - [http://localhost:3000](http://localhost:3000)

## Funcionalidades
- Formulários com validação server-side e client-side
- Server Actions e Server Components
- Client Components com loading e feedback
- Exemplo do hook experimental `use()` do React 19
- Breadcrumbs para navegação

## Estrutura
- `src/app/` - Páginas e componentes principais
- `src/components/` - Componentes reutilizáveis
- `src/types/` - Tipos TypeScript

## Observações
- Para usar o hook `use()`, é necessário React 19 e Next.js 15.
- O projeto inclui exemplos de formulários controlados e não controlados.
- O backend de comentários é externo e precisa estar rodando para os exemplos funcionarem.

## Scripts úteis
- `npm run dev` - Executa o projeto em modo desenvolvimento
- `npm run build` - Gera a build de produção

---

Se tiver dúvidas ou problemas, abra uma issue ou entre em contato!
