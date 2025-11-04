import './App.css'
import About from './components/sections/About'
import Connect from './components/sections/Connect'
import Hero from './components/sections/Hero'
import Project from './components/sections/Project'
import Stack from './components/sections/Stack'

function App() {

  return (
    <>
      <main className="min-h-screen w-full flex justify-center bg-black">
        <Hero />
        {/*<About />
        <Stack />
        <Project />
        <Connect />*/}
      </main>
    </>
  )
}

export default App
