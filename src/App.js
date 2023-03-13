import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./page/Cart";
import Home from "./page/Home";
import Navbar from '../src/component/Navbar'


const App = () => {
  return (
    <div className="app">
      <Navbar/>
      <Routes>
      
      <Route exect path="/" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  );
};

export default App;
