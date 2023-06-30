# Setting up Tailwind CSS in a Vite project

Start by creating a new Vite project if you don’t have one set up already. The most common approach is to use [Create Vite](https://vitejs.dev/guide/#scaffolding-your-first-vite-project).

```bash
npm create vite@latest my-project -- --template react
cd my-project
```

Install `tailwindcss` and its peer dependencies, then generate your `tailwind.config.js` and `postcss.config.js` files.

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Add the paths to all of your template files in your `tailwind.config.js` file.

```js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  // ...
};
```

Add the `@tailwind` directives for each of Tailwind’s layers to your `./src/index.css` file.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Start using Tailwind’s utility classes to style your content.
