# Portfolio — Oscar Vitasse

Página personal para mostrar mis proyectos, construida con React + Vite.

## Stack

- React 19 + Vite
- CSS puro (sin librerías de UI), con la misma paleta de [Wanted-App](https://github.com/OscarDeveloper9/Wanted-App)

## Desarrollo local

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build
npm run preview
```

## Estructura

```
src/
├── components/
│   ├── Hero.jsx
│   ├── Skills.jsx
│   ├── ProjectsPanel.jsx
│   └── Footer.jsx
├── data/
│   └── projects.js   ← acá se edita la info de cada proyecto
├── App.jsx
└── index.css
```

Para agregar o editar un proyecto del panel, se edita el array `projects` en `src/data/projects.js`.

## Deploy

Desplegado en [Vercel](https://vercel.com).
