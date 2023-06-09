import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './assets/components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './assets/components/Footer'
import Carrusel from './assets/components/Carrusel'
import { Route, BrowserRouter, Routes} from 'react-router-dom'
import ItemList from './assets/components/ItemList'
import  {DataProvider}  from './service/DataProvider.jsx'
import { ItemDetailContainer } from './assets/components/ItemDetailContainer';

function App() {


  return (
    <DataProvider>
    <div className="App">
      <BrowserRouter>  
      <Navbar/>

      <Routes>
      <Route path='/' element={<Carrusel/>} />
      <Route path='/productos' element={<ItemList/>} />
      <Route path='/productos/:id' element={<ItemDetailContainer/>} />
      <Route path='/urbana' element={<ItemList/>}/>
      <Route path='/deportiva' element={<ItemList/>}/>
      
      </Routes>
      
      <Footer/>      
      </BrowserRouter>     
    </div>
    </DataProvider>
  )
}

export default App
