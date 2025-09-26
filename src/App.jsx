import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Index from './pages/Index'
import About from './pages/About'
import Watch from './pages/Watch'
import WatchDetails from './pages/WatchDetails'

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/About' element={<About />} />
          <Route path='/Watch' element={<Watch />} />
          <Route path='/watch/:id' element={<WatchDetails />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
