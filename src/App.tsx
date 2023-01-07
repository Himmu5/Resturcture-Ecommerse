import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Nav from './Component/Nav/Nav'
import Home from './Home-page/Home'

function App() {

  return (
    <>
      <div className=' '>
        <Nav />
        <Home />
      </div>
    </>
  )
}

export default App
