# JustMate — Portfólio

Portfólio pessoal de Mateus Justino, com projetos web e mobile, suas decisões técnicas e formas de contato.

## Tecnologias

- Next.js 16 com App Router
- React 19 e TypeScript
- Tailwind CSS 4
- React Icons
- Google Sans Code hospedada localmente

## Executar localmente

Use uma versão LTS do Node.js compatível com o projeto (mínimo 20.9) e npm.

```bash
npm ci
npm run dev
```

Abra http://localhost:3000. A aplicação atual não exige variáveis de ambiente nem credenciais para rodar.

## Validação e produção

```bash
npm run lint
npm run build
npm start
```

O comando `start` serve o build de produção e deve ser executado após `build`.

## Estrutura

```text
src/
├── app/                     # Página inicial, metadados, sitemap e robots
│   └── projetos/[slug]/      # Páginas individuais dos projetos
├── components/              # Seções da página e componentes compartilhados
├── data/projects.json       # Textos, links e imagens dos projetos
└── fonts/                   # Fonte local e licença OFL
public/
└── projects/                # Capturas e símbolos dos projetos
```

## Atualizar o conteúdo

Os projetos são definidos em `src/data/projects.json`. As imagens apontam para arquivos em `public/projects/`. Os slugs geram as páginas individuais e as entradas do sitemap durante o build.

A apresentação e os contatos ficam em `src/components/`. Ao mudar o domínio, atualize as URLs em `src/app/layout.tsx`, `src/app/robots.ts` e `src/app/sitemap.ts`.

Os ícones da seção de tecnologias usam a coleção Simple Icons da biblioteca React Icons (`react-icons/si`).

## Versionamento

Mantenha no repositório o código, os arquivos estáticos usados pela aplicação, as configurações, `package.json`, `package-lock.json` e a licença da fonte em `src/fonts/OFL.txt`.

Dependências instaladas, builds, caches, logs, arquivos `.env` e pastas locais de ferramentas e credenciais são ignorados pelo `.gitignore`.

## Publicação

O projeto inclui os comandos de build e execução para uma hospedagem compatível com Next.js, como a Vercel. O domínio configurado nos metadados é `https://justmate.vercel.app`.

## Licença

Este repositório ainda não define uma licença para o código e os materiais do portfólio. A licença da fonte Google Sans Code está em `src/fonts/OFL.txt`.
