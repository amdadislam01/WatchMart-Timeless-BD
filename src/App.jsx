import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Index from './pages/Index'

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Index />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
