import './App.css';
import React from "react"
import About from "./components/About"
import Interests from "./components/Interests"
import Footer from "./components/Footer"


export default function App() {
  return (

    <div className='main'>
      <About />
      <Interests />
      <Footer />
    </div>  
    
  )
}


