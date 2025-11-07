import './App.css'
import Footer from './components/Footer'
// import About from './components/sections/About'
// import Certificate from './components/sections/Certificate'
import Contact from './components/sections/Contact'
import Education from './components/sections/Education'
import Hero from './components/sections/Hero'
import Project from './components/sections/Project'
 import Stack from './components/sections/Stack'

function App() {

  return (
    <>
      <main className="min-h-screen w-full flex flex-col justify-center items-center bg-linear-to-b from-slate-900 to-black bg-no-repeat bg-cover bg-fixed">
        <Hero />
        <hr className="w-11/12 h-1 bg-linear-to-b from-slate-900 to-slate-200/10 my-10" />
        {/*<About />*/}
        <Stack />
        <Project />
        <Education />
        {/* <Certificate /> */}
        <hr className="w-11/12 h-1 bg-linear-to-b from-slate-900 to-slate-200/10 my-10" />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default App
