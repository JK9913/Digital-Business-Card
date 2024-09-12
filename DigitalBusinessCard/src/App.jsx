import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  return (
    <div className='business-card'>
      <Header />
      <About />
      <Footer />
    </div>
  )
}

export default App
