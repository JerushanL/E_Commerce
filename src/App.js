import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './Components/Shop/Shop';
import ShopCategory from './Components/Shop/ShopCategory';
import LoginSignup from './Components/Shop/LoginSignup';
import Product from './Components/Shop/Product';
import Cart from './Components/Shop/Cart';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'
import { useEffect, useState,useRef } from 'react';

function App() {
 

  return (
    <div>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop></Shop>} ></Route>
          <Route path='/men' element={<ShopCategory banner={men_banner} category="men"></ShopCategory>}></Route>
          <Route path='/women' element={<ShopCategory banner={women_banner} category="women"></ShopCategory>}></Route>
          <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid"></ShopCategory>}></Route>
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart></Cart>}></Route>
          <Route path='/login' element={<LoginSignup />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
