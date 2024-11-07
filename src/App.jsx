import './App.css'
import Header from './components/Header/Header'
import NavBar from './components/NavBar/NavBar'
import AdicionalNavBar from './components/AdicionalNavbar/AdicionalNavBar'
import ItemListContainerWithHoc from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Contacto from './components/Contacto/Contacto'
import Cart from './components/Cart/Cart'
import { CartProvider } from './context/CartContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className='min-h-screen flex flex-col'>
      <BrowserRouter>
        <CartProvider>
          <NavBar/>
            
            <main className='flex-grow'>
              <Routes>
                <Route path="/" element={ 
                  <>
                    <AdicionalNavBar/>
                    <Header/>
                    <ItemListContainerWithHoc/>
                  </>
                }/>

                <Route path="/category/:idCategory" element={  
                  <>
                    <AdicionalNavBar/>
                    <Header/>
                    <ItemListContainerWithHoc/>
                  </>
                }/>

                <Route path="/product/:idProduct" element={ 
                  <>
                    <AdicionalNavBar/>
                    <ItemDetailContainer/>
                  </>
                }/>

                <Route path="/contacto" element={ <Contacto/> }/>
                <Route path="/cart" element={<Cart/>}/>
              </Routes>
            </main>

          <Footer/>
        </CartProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
