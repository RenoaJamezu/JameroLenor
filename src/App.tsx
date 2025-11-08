import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import ProjectDetails from './pages/project/ProjectDetails'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects/:slug' element={<ProjectDetails />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
