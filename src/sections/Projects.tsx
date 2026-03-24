import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)

  return (
    <section
      id="projects"
      className="py-20 px-6 bg-gray-50 dark:bg-gray-900/50"
    >
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <p className="font-mono font-semibold text-purple-500 text-sm mb-2 tracking-widest uppercase">
            // mis proyectos
          </p>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Lo que he construido
          </h2>
        </div>

        {/* Featured */}
        <div className="grid gap-6 md:grid-cols-2 mb-12">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Others */}
        {others.length > 0 && (
          <>
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-6">
              Otros proyectos
            </h3>
            <div className="grid gap-4 md:grid-cols-3">
              {others.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </>
        )}

      </div>
    </section>
  )
}
