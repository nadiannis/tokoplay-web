<div align="center">
<br>
  <a href="https://tokoplay.vercel.app"><img width="140" height="140" src="./public/android-chrome-512x512.png"></a>
  <br><br>
  <h1>Tokoplay Web</h1>
  <p>Promote products through videos</p>
  <br>
  
  [**View the Web**](https://tokoplay.vercel.app)
</div>

## Table of Contents

- [Description](#description)
- [Live Demo](#live-demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Run Locally](#run-locally)
  - [Getting Started](#getting-started)
  - [Development](#development)
  - [Production](#production)
  - [Linting & Formatting](#linting-formatting)

## Description

[`^ back to top ^`](#table-of-contents)

**Tokoplay** is a platform where seller can promote products through videos to potential buyers. It is a simple clone of Tokopedia Play. It is built for the final project of Generasi GIGIH 3.0. This repo is the frontend of the app. It is built with [React.js](https://react.dev). You can see the API in [this repo](https://github.com/nadiannis/tokoplay-api).

## Live Demo

[`^ back to top ^`](#table-of-contents)

Check out the web version of **Tokoplay** here: [tokoplay.vercel.app](https://tokoplay.vercel.app)

## Features

[`^ back to top ^`](#table-of-contents)

These are the features of the app. Features marked with _`(additional)`_ are features I added that are not included in the minimum requirements.

- Display list of videos
- Search videos with debouncing _(additional)_
- Show detail of a video
- Display products of a video
- Display comments of a video
- Add a comment to a video
- Implement infinite scroll for list of videos & comments _(additional)_

## Tech Stack

[`^ back to top ^`](#table-of-contents)

- Language: [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- Frontend Library: [React 18](https://react.dev)
- Routing Library: [React Router](https://reactrouter.com)
- Frontend Build Tool: [Vite](https://vitejs.dev)
- CSS Framework: [Tailwind CSS 3](https://tailwindcss.com)
- Tailwind CSS Component Library: [DaisyUI](https://daisyui.com)
- HTTP Client: [Axios](https://axios-http.com)
- Linter: [ESLint](https://eslint.org)
- Code Formatter: [Prettier](https://prettier.io)
- Git Hook: [Husky](https://github.com/typicode/husky)

## Run Locally

[`^ back to top ^`](#table-of-contents)

### Getting Started

- Make sure you have [Node.js](https://nodejs.org) & [Yarn](https://yarnpkg.com) installed on your computer.

- Clone the repo.

  ```bash
  git clone https://github.com/nadiannis/tokoplay-web.git
  ```

  ```bash
  cd tokoplay-web
  ```

- Make a copy of `env.example` file & rename it to `.env`.

  Write an API base URL to connect the frontend app to the API. Make sure the API is running. Go to [this repo](https://github.com/nadiannis/tokoplay-api) to know more about the API.

  ```bash
  VITE_API_BASE_URL=http://localhost:8080
  ```

- Install the dependencies.

  ```bash
  yarn
  ```

### Development

Run the development server.

```bash
yarn dev
```

### Production

Build the app.

```bash
yarn build
```

Locally preview the production build.

```bash
yarn preview
```

### Linting & Formatting

If you want to fix ESLint error or format the code, you can run this command.

```bash
yarn lint:fix
```

```bash
yarn prettier:fix
```
