import type { Skill, SkillCategory } from '../types/'

export const skills: Skill[] = [
  // Frontend
  { name: 'React', category: 'Frontend', icon: '⚛️' },
  { name: 'TypeScript', category: 'Frontend', icon: '🔷' },
  { name: 'Tailwind CSS', category: 'Frontend', icon: '🎨' },

  // Backend & Languages
  { name: 'Java', category: 'Backend', icon: '☕' },
  { name: 'Go', category: 'Backend', icon: '🐹' },
  { name: 'Python', category: 'Backend', icon: '🐍' },
  { name: 'REST APIs', category: 'Backend', icon: '🔌' },

  // DevOps & Cloud
  { name: 'Docker', category: 'DevOps', icon: '🐳' },
  { name: 'AWS', category: 'DevOps', icon: '☁️' },
  { name: 'Git / GitHub', category: 'DevOps', icon: '🐙' },

  // Databases
  { name: 'MySQL', category: 'Database', icon: '🐬' },
  { name: 'OracleDB', category: 'Database', icon: '🔶' },
]

export const categories: SkillCategory[] = [
  'Frontend',
  'Backend',
  'DevOps',
  'Database',
]
