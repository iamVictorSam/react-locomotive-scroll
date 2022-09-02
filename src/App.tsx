import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Introduction from './components/intro/Introduction';
import About from './components/about/About';
import Footer from './components/footer/footer';

function App() {

  return (
    <div className="">
      <Introduction/>
      <About/>
      <Footer/>
    </div>
  )
}

export default App
