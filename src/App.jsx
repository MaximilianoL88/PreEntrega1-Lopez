import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'



function App() {
  const title="Bienvenidos a Tienda Online"
  const title2="Compra aquí"
  return (
    <div>
      <NavBar/>
      <ItemListContainer
          titulo={title}
          subtitulo={title2}
      />
    </div>
  )
}

export default App
