import './App.css'
import Education from './components/sections/Education'
// import About from './components/sections/About'
// import Contact from './components/sections/Contact'
import Hero from './components/sections/Hero'
// import Project from './components/sections/Project'
 import Stack from './components/sections/Stack'

function App() {

  return (
    <>
      <main className="min-h-screen w-full flex flex-col justify-center items-center bg-black">
        <Hero />
        <hr className="w-11/12 h-1 bg-neutral-900 my-10" />
        {/*<About />*/}
        <Stack />
        {/* <Project /> */}
        <Education />
        {/* <Contact /> */}
      </main>
    </>
  )
}

export default App
