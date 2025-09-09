import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Product from './Pages/ProductPage'
import Cart from './Pages/CartPage'
import NavBar from './components/NavBar'

function App() {
  return (
  <BrowserRouter>
  <NavBar />
  <Routes>
    <Route path = "/" element={<Home/>} />
    <Route path = "/product" element={<Product/>}/>
    <Route path = "/cart" element={<Cart />} />
  </Routes>
  </BrowserRouter>
  )
}

export default App