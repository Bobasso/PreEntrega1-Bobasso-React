import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className='min-h-screen flex flex-col'>
      <NavBar/>
      <main className='flex-grow'>
        <ItemListContainer saludo={"Zapatillas"}/>
        <ItemListContainer saludo={"Este es mi ecommerce"}/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
