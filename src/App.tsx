import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Introduction from './components/intro/Introduction';
import About from './components/about/About';
import footer from './components/footer/footer';

function App() {

  return (
    <div className="">
      <Introduction/>
      <About/>
      <footer/>
    </div>
  )
}

export default App
