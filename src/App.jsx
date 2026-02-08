import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Footer from './components/Footer'

import About from './components/About'

import { ThemeProvider } from './context/ThemeContext'
import { SnowProvider } from './context/SnowContext'
import Cursor from './components/Cursor'
import Snow from './components/Snow'

function App() {
  return (
    <ThemeProvider>
      <SnowProvider>
        <div className="app">
          <Snow />
          <Cursor />
          <Header />
          <main>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Education />
          </main>
          <Footer />
        </div>
      </SnowProvider>
    </ThemeProvider>
  )
}

export default App
