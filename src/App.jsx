import './App.css'
import Header from './components/Header/Header'
import NavBar from './components/NavBar/NavBar'
import ItemListContainerWithHoc from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Contacto from './components/Contacto/Contacto'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className='min-h-screen flex flex-col'>
      <BrowserRouter>
        <NavBar/>
          
          <main className='flex-grow'>
            <Routes>
              <Route path="/" element={ 
                <>
                  <Header/>
                  <ItemListContainerWithHoc/>
                </>
                }/>
              <Route path="" element={ <ItemDetailContainer/> }/>
              <Route path="/contacto" element={ <Contacto/> }/>
            </Routes>
          </main>

        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
