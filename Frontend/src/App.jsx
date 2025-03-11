import { useState } from 'react'
import Hero from './Components/Hero';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Blogs from './pages/Blogs';
import Projects from './pages/Projects';
import ContactMe from './pages/ContactMe';

function App() {
  const [count, setCount] = useState(0)

  

  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout />} >
          <Route path='' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='blogs' element={<Blogs />} />
          <Route path='projects' element={<Projects />} />
          <Route path='contact-me' element={<ContactMe />} />
        </Route>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
