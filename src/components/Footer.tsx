export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-sm text-gray-500 dark:text-gray-500">
        <p>
          Diseñado y construido por{' '}
          <span className="text-gray-700 dark:text-gray-300 font-semibold">Joshua A.</span>
        </p>
        <p className="font-mono font-semibold">
          React + Vite + Tailwind CSS · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}