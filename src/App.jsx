import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Product from './Pages/ProductPage'
import Cart from './Pages/CartPage'
import NavBar from './components/NavBar'
import { Provider } from 'react-redux'
import { store } from './App/Store'

function App() {
  return (
  <Provider store={store}>
    <BrowserRouter>
  <NavBar />
  <Routes>
    <Route path = "/" element={<Home/>} />
    <Route path = "/product" element={<Product/>}/>
    <Route path = "/cart" element={<Cart />} />
  </Routes>
  </BrowserRouter>
  </Provider>
  )
}

export default App