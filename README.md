<div align="center">
  <br>
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

## Description

[`^ back to top ^`](#table-of-contents)

**Tokoplay** is a platform where seller can promote products through videos to potential buyers. It is a simple clone of Tokopedia Play. This repo is the frontend of the app. It is built with [React.js](https://react.dev).

## Live Demo

[`^ back to top ^`](#table-of-contents)

Check out the web version of **Tokoplay** here: [tokoplay.vercel.app](https://tokoplay.vercel.app)

## Features

[`^ back to top ^`](#table-of-contents)

- Display list of videos with infinite scroll
- Search videos with debouncing
- Show detail of a video
- Display products of a video
- Display comments of a video with infinite scroll
- Add a comment to a video

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
