import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './assets/components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './assets/components/Footer'
import Carrusel from './assets/components/Carrusel'
import { Route, BrowserRouter, Routes} from 'react-router-dom'
import Cartas from './assets/components/Cartas'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <BrowserRouter>
      
      <Navbar/>

      <Routes>
      <Route path='/' element={<Carrusel/>} />
      <Route path='/productos' element={<Cartas/>} />
      </Routes>
      
      <Footer/>
      
      
      </BrowserRouter>
      
      
      
      
    </div>
  )
}

export default App
