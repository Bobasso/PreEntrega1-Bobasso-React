import './App.css'
import Header from './components/Header/Header'
import NavBar from './components/NavBar/NavBar'
import ItemListContainerWithHoc from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className='min-h-screen flex flex-col'>
      <NavBar/>
      <Header/>
      <main className='flex-grow'>
          <ItemListContainerWithHoc/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
