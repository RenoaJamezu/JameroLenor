import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import ProjectPage from './pages/project/ProjectPage'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />\
          <Route path='/project/:slug' element={<ProjectPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
