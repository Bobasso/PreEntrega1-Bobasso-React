import './App.css'
import Header from './components/Header/Header'
import NavBar from './components/NavBar/NavBar'
import ItemListContainerWithHoc from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Contacto from './components/Contacto/Contacto'
import Cart from './components/Cart/Cart'
import { CartProvider } from './context/CartContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Checkout from './components/Checkout/Checkout'
import Footer from './components/Footer/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='min-h-screen flex flex-col bg-gray-100'>
      <BrowserRouter>
        <CartProvider>
          <NavBar/>
          <ToastContainer/>

            <main className='flex-grow'>
              <Routes>
                <Route path="/" element={ 
                  <>
                    <Header/>
                    <ItemListContainerWithHoc/>
                  </>
                }/>

                <Route path="/category/:idCategory" element={  
                  <>
                    <Header/>
                    <ItemListContainerWithHoc/>
                  </>
                }/>

                <Route path="/product/:idProduct" element={ 
                  <>
                    <ItemDetailContainer/>
                  </>
                }/>

                <Route path="/contacto" element={ <Contacto/> }/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/checkout" element={<Checkout/>}/>
              </Routes>
            </main>

          <Footer/>
        </CartProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
