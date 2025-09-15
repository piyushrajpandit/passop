import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Manager from './components/Manager'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
     <Navbar />
     <div className="mycontainer min-h-[calc(100vh-96px)] flex items-center justify-center">

     <Manager />
     </div>
     <Footer />
  
    </>
  )
}

export default App
