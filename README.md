# 🚀 Joshua A. — Portfolio

> Frontend Developer Junior especializado en React & TypeScript, con visión fullstack.

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white)
![Deploy](https://img.shields.io/badge/Deploy-Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

---

## ✨ Vista previa

<!-- Reemplaza con un screenshot real de tu portafolio -->
![Portfolio Preview](./public/portafolio.jpg)

---

## 📋 Secciones

- **Sobre mí** — presentación, bio y stack tecnológico
- **Proyectos** — proyectos destacados con links a demo y código
- **Contacto** — links a redes

---

## 🛠 Stack

|  Categoría  |    Tecnología   |
|-------------|-----------------|
| Framework   | React 19        |
| Lenguaje    | TypeScript 5.9  |
| Estilos     | Tailwind CSS v3 |
| Bundler     | Vite 8          |
| Formularios | React Hook Form |
| Íconos      | Heroicons       |
| Deploy      | Vercel          |

---

## 🚀 Correr en local

```bash
# Clonar el repositorio
git clone https://github.com/tarttaros/portfolio.git

# Instalar dependencias
npm install

# Levantar servidor de desarrollo
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

---

## ✏️ Agregar proyectos

Edita `src/data/projects.ts`:

```ts
{
  id: 4,
  title: 'Nombre del proyecto',
  description: 'Qué hace y qué problema resuelve.',
  stack: ['React', 'TypeScript', 'Docker'],
  github: 'https://github.com/TU_USUARIO/repo',
  demo: 'https://tu-proyecto.vercel.app',
  image: '/projects/preview.png',
  featured: true,
}
```

Coloca los screenshots en `public/projects/`.

---

## 🌐 Deploy

El proyecto está configurado para deploy automático en Vercel.

```bash
# Build de producción
npm run build

# Verificar tipos
npm run type-check
```

Conecta el repositorio en [vercel.com](https://vercel.com) y cada push a `main` hace deploy automático.

---

## 📄 Licencia

MIT © [Joshua A.](https://github.com/TU_USUARIO)