import React from 'react';
import './App.css';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Product from './pages/Product';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route exact path='/' element={<Home/>} />

      <Route path='/products/:catg' element={<ProductList/>} />
      <Route path='/product/:id' element={<Product/>} />
      <Route path='/cart' element={<Cart/>} />
  
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
