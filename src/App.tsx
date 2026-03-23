import { useTheme } from './hooks/useThemes'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './sections/About'

function App() {
  const { darkMode, toggleTheme } = useTheme()

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950 transition-colors duration-300">
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <main className="flex-1">
        <About/>
      </main>
      <Footer />
    </div>
  )
}

export default App
