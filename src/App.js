import React from 'react';
import Home from "./Pages/Home";
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import {
  BrowserRouter as Router,
  Route,
  Routes,

} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
      <Route  path="/" element={<Home/>} exact />
      <Route path='/product/:id' element={<Product/>}/>
      <Route path='/Cart' element={<Cart/>}/>
      </Routes>
    </Router>
  );
}

export default App;
