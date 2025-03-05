import { useState } from 'react'
import Hero from './Components/Hero';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './pages/Home';

function App() {
  const [count, setCount] = useState(0)

  

  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout />} >
          <Route path='' element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
