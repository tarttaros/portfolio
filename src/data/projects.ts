import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 1,
    title: 'Pokedex',
    description:
      'Pokedex realizada para implementar y reforzar conocimientos basicos de react y css.',
    stack: ['React', 'TypeScript', 'CSS'],
    github: 'https://github.com/tarttaros/pokedex',
    demo: 'https://pokedexv.netlify.app/',
    image: '/public/projects/pokedex.png',
    featured: true,
  },
  /*
  {
    id: 2,
    title: 'Mi Proyecto 2',
    description:
      'Descripción breve de qué hace el proyecto. Qué tecnologías usaste y qué aprendiste.',
    stack: ['React', 'REST API', 'CSS'],
    github: 'https://github.com/joshuaA/proyecto-2',
    demo: 'https://proyecto-2.vercel.app',
    image: '/projects/project2.png',
    featured: true,
  },*/
  {
    id: 3,
    title: 'Twitter Clon',
    description:
      'Clon de twitter realizado unicamente con html y css',
    stack: ['HTML', 'CSS'],
    github: 'https://github.com/tarttaros/twitter_Clon',
    demo: null,
    image: '/public/projects/twitter_clone.png',
    featured: false,
  },
]
