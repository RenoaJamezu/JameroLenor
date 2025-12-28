import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"
import Layout from "./pages/dashboard/Layout";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
