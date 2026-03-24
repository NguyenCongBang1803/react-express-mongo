import { useState } from 'react'
import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './page/Home'
import Navbar from './components/Navbar.jsx'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer.jsx'
import { useAppContext } from './Context/AppContext.jsx'
import Login from './components/Login.jsx'
import AllProducts from './page/AllProducts.jsx'
import ProductCategory from './page/ProductCategory.jsx'
import ProductDetail from './page/ProductDetail.jsx'

function App() {
  const isSellerPath = useLocation().pathname.includes('seller')
  const { showUserLogin } = useAppContext();

  return (

    <main className='text-primary  px-10'>
      {showUserLogin ? <Login></Login> : null}
      {isSellerPath ? null : <Navbar></Navbar>}
      <Toaster></Toaster>
      <div className={`${!isSellerPath ? "" : "px-6 md:px-16 lg:px-24 xl:px-32"}`}>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/products' element={<AllProducts></AllProducts>}></Route>
          <Route path='/products/:category' element={<ProductCategory></ProductCategory>}></Route>
          <Route path='/products/:category/:id' element={<ProductDetail></ProductDetail>}></Route>
        </Routes>
      </div>
      {!isSellerPath && <Footer></Footer>}
    </main>
  )
}

export default App
