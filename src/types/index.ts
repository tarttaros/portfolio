export interface Project {
  id: number
  title: string
  description: string
  stack: string[]
  github: string
  demo: string | null
  image: string | null
  featured: boolean
}

export interface Skill {
  name: string
  category: SkillCategory
  icon: string
}

export type SkillCategory = 'Frontend' | 'Backend' | 'DevOps' | 'Database'
