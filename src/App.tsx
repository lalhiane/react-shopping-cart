import Header from "./components/header/Header";

import Home from "./components/pages/home/Home";

import Cart from "./components/cart/Cart";

import Details from "./components/details/Details";

import { Routes, Route } from 'react-router-dom';

function App() {

  return (<>

    <Header />

    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/:id" element={<Details />} />

      <Route path="/cart" element={<Cart />} />

    </Routes>
   
  </>)
}

export default App
