import {Routes, Route, BrowserRouter} from 'react-router-dom'
import NavBar from "./Components/NavBar"
import Cart from './Components/Cart'
import Home from './Components/Home'
import ItemListContainer from "./Components/ItemListContainer"
import ItemDetailContainer from "./Components/ItemDetailContainer"

function App() {

  return (
    <BrowserRouter>

      <NavBar/>

      <Routes>
    
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/Catalogo' element={<ItemListContainer/>}/> 
        <Route exact path='/category/:category' element={<ItemListContainer/>}/>
        <Route exact path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route exact path='/Cart' element={<Cart/>}/>
   
      </Routes>   

    </BrowserRouter>

  )
}

export default App
