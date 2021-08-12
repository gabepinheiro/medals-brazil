# Medals Brazil - Olympic Games in Tokyo 2020

<br>

## 💻 Sobre o projeto

<br>

É um projeto de final de curso com o tema dos Jogos Olimpicos para a elaboração de um mapa interativo que marca os estados e cidades brasileiras representados pelos atletas do Brasil que conquistaram medalhas nos Jogos Olímpicos de Tóquio 2020.

Demo: https://medals-brazil.vercel.app/

<br>

Curso [Aprenda NextJS, GraphQL e Leaflet na prática](https://www.udemy.com/course/aprenda-nextjs-na-pratica), feito por [Willian Justen Cursos](https://willianjusten.com.br/cursos)

<br>
<br>

## 🚀 Como executar o projeto

---

<br>

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/). Após ter instalado as ferramentas básicas, você vai precisar criar e configurar algumas coisas a seguir:

<br>

### GraphCMS
---

Este projeto usa [GraphCMS](https://graphcms.com/), então você precisa primeiro criar uma conta lá.

Depois de criar o Schema, basta seguir as etapas:

- Schema > Add New Model with `Athlete` name
- And add the following fields:
  - `Single Line Text` as `name`
  - `Single Line Text` as `city`
  - `Single Line Text` as `modality`
  - `Dropdown - Enumeration` as `medal`
  - `Rich Text` as `about`
  - `Asset Picker` as `image`
  - `Slug` as `slug`

  <br>

- Schema > Add New Model with `Place` name
- And add the following fields:
  - `Map` as `location`
  - `Athlete` as `athlete`
  - `Slug` as `slug`

<br>

- Schema > Add New Model with `Page` name
- And add the following fields:
  - `Single Line Text` as `heading`
  - `Slug` as `slug`
  - `Rich Text` as `body`

Depois disso, preencha alguns valores e não esqueça de `publicar`!

<br>

### Authentication

<br>

Para criar um acesso de token, vá para `Settings > API Access`, dentro desta página, encontre `Permanent Auth Tokens`, crie um nome de token e marque todas as consultas possíveis. Salve e obtenha o token.

<br>

### NextJS

<br>

Depois de criar sua conta em [GraphCMS](https://graphcms.com/) e seguindo as etapas acima, você só precisa renomear
o `.env.example` para `.env.local` (se você planeja executar localmente) e edite as chaves lá.

Com tudo pronto, você pode iniciar o aplicativo com:

```bash
npm run dev
# or
yarn dev
```

Abrir [http://localhost:3000](http://localhost:3000) com seu navegador para ver o resultado.

Você pode começar a editar a página modificando `pages/index.js`. A página é atualizada automaticamente conforme você edita o arquivo.

<br>

## Commands

- `dev`: runs your application on `localhost:3000`
- `build`: creates the production build version
- `start`: starts a simple server with the build production code
- `lint`: runs the linter in all components and pages
- `test`: runs jest to test all components and pages
- `test:watch`: runs jest in watch mode
- `storybook`: runs storybook on `localhost:6006`
- `build-storybook`: create the build version of storybook
