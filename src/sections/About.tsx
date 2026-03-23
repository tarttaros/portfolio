import { skills, categories } from '../data/skills'

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen pt-32 pb-20 px-6 max-w-5xl mx-auto"
    >
      {/* Hero intro */}
      <div className="mb-16">
        <p className="font-mono text-purple-500 text-sm font-bold mb-3 tracking-widest uppercase">
          Hola, soy
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">
          Joshua A.
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-500 dark:text-gray-400 mb-6">
          Frontend Developer{' '}
          <span className="text-purple-500">Junior</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl leading-relaxed">
          {/* 👇 Edita esta descripción con tu historia */}
          Desarrollador React apasionado por construir interfaces limpias y
          funcionales. Me especializo en el frontend pero con visión fullstack —
          trabajo con Java, Go, Python, Docker y AWS para entender el sistema
          completo.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mt-8">
          <a
            href="#projects"
            className="px-6 py-3 bg-purple-500 hover:bg-purple-400 text-white font-semibold rounded-lg transition-colors"
          >
            Ver proyectos
          </a>
          <a
            href="/cv-joshua.pdf"
            download
            className="px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-purple-500 dark:hover:border-purple-500 font-semibold rounded-lg transition-colors"
          >
            Descargar CV
          </a>
        </div>
      </div>

      {/* Skills */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-8">
          Tecnologías
        </h3>

        <div className="grid gap-8 md:grid-cols-2">
          {categories.map((category) => (
            <div key={category}>
              <p className="font-mono text-sm font-bold text-purple-500 uppercase tracking-widest mb-3">
                {category}
              </p>
              <div className="flex flex-wrap gap-2">
                {skills
                  .filter((s) => s.category === category)
                  .map((skill) => (
                    <span
                      key={skill.name}
                      className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500 transition-colors"
                    >
                      <span>{skill.icon}</span>
                      {skill.name}
                    </span>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
