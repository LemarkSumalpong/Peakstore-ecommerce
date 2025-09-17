import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/ProductPage'
import Cart from './pages/CartPage'
import NavBar from './components/NavBar'
import { Provider } from 'react-redux'
import { store } from './App/Store'
import { Toaster } from 'react-hot-toast'
import Login from './pages/Login'
import MyAccount from './pages/MyAccount'

function App() {
  return (
  <Provider store={store}>
    <BrowserRouter>
  <NavBar />
  <Routes>
    <Route path = "/" element={<Home/>} />
    <Route path = "/product/:id" element={<Product/>}/>
    <Route path = "/cart" element={<Cart />} />
    <Route path = "/login" element={<Login />} />
    <Route path = "/my-account" element={<MyAccount />} />
  </Routes>
          <Toaster position="top-right" reverseOrder={false} />
  </BrowserRouter>
  </Provider>
  )
}

export default App