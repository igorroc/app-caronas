# Carona Solidária

![Mockup](./public/mockup.png)

> Projeto desenvolvido para a disciplina de Engenharia de Software, do curso de Ciência da Computação da Universidade Estadual de Santa Cruz.

## 👥 Integrantes

-   [Igor Rocha](https://ilrocha.com)
-   [Ana Cristina](https://github.com/acpmorais)
-   [Maira Gomes](https://github.com/mairagomes)

## 📚 Sobre o projeto

O projeto consiste em uma aplicação web para conectar pessoas que precisam de carona com pessoas que podem oferecer carona. A aplicação foi desenvolvida utilizando o framework [Next.js](https://nextjs.org/), com o objetivo de facilitar a criação de aplicações React com renderização do lado do servidor.

Esse projeto é apenas o MVP do sistema, somente com a funcionalidade de ofertar e solicitar caronas.

## 🚀 Tecnologias utilizadas

-   [Next.js](https://nextjs.org/)
-   [React](https://reactjs.org/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [Prisma](https://www.prisma.io/)
-   [MySQL](https://www.mysql.com/)

## 📦 Como instalar e executar o projeto

O projeto foi desenvolvido utilizando o gerenciador de pacotes [NPM](https://www.npmjs.com/), portanto, é necessário tê-lo instalado em sua máquina, assim como o [Node.js](https://nodejs.org/en/).

Faça o clone do repositório:

```bash
git clone https://github.com/igorroc/app-caronas
```

Instale as dependências do projeto:

```bash
npm install
```

Crie um arquivo `.env.local` na raiz do projeto, seguindo o modelo do arquivo `.env.example`, e preencha as variáveis de ambiente com as informações do seu banco de dados.

Execute as migrations do banco de dados:

```bash
npx prisma migrate dev
```

> Caso o comando acima não funcione, tente usar `dotenv -e .env.local -- npx prisma migrate dev`

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

A aplicação estará disponível em [http://localhost:3000](http://localhost:3000).

## 🏠 Estrutura do projeto

O projeto foi desenvolvido utilizando o padrão de arquitetura MVC (Model-View-Controller), com a separação de pastas seguindo o padrão do framework Next.js.

As pastas e arquivos mais importantes são:

-   `/components`: contém os componentes React utilizados nas páginas.
-   `/public`: contém os arquivos estáticos da aplicação, como imagens e fontes.
-   `/prisma`: contém os arquivos de configuração do Prisma, que é o ORM utilizado para fazer a conexão com o banco de dados.
-   `pages.tsx`: contém as páginas da aplicação, que são renderizadas no lado do servidor.
-   `routes.ts`: contém as rotas da API, que são utilizadas para fazer as requisições ao banco de dados.
-   `*.module.css`: arquivos CSS que são importados nos componentes React, utilizando o [CSS Modules](https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css)


