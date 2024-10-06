import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {

  return (
    <div className='container-app'>
      <NavBar/>
      <ItemListContainer saludo={"Hola a todos"}/>
      <ItemListContainer saludo={"Este es mi ecommerce"}/>
    </div>
  )
}

export default App
