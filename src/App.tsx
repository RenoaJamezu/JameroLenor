import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"
import { lazy, Suspense } from "react";


function App() {
  const Layout = lazy(() => import("./pages/dashboard/Layout"))

  const PageLoader = () => (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
    </div>
  )

  return (
    <>
      <Router>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Layout />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  )
}

export default App
