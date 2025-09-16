import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Product from './pages/ProductPage'
import Cart from './pages/CartPage'
import NavBar from './components/NavBar'
import { Provider } from 'react-redux'
import { store } from './App/Store'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
  <Provider store={store}>
    <BrowserRouter>
  <NavBar />
  <Routes>
    <Route path = "/" element={<Home/>} />
    <Route path = "/product/:id" element={<Product/>}/>
    <Route path = "/cart" element={<Cart />} />
  </Routes>
          <Toaster position="top-right" reverseOrder={false} />
  </BrowserRouter>
  </Provider>
  )
}

export default App