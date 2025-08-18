import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Test from './components/Test.jsx'
import Demo from './components/Demo.jsx'
import Counter from './components/Counter.jsx'
import TextAnalyzer from './components/TextAnalyzer';
import Homepage from './components/Homepage'
import ProductsPage from './components/ProductsPage';
import ProductsPage1 from './components/ProductsPage1.jsx'
import ProductsPage2 from './components/ProductsPage2.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx'
import SingleProduct from './components/SingleProduct.jsx'
import ProductContextProvider from "./context/ProductContextProvider";

function App() {
  const [count, setCount] = useState(0)

  return (
    <ProductContextProvider>
      <Router>
          <Navbar/>
          <Routes>
              <Route path="/" element={<Homepage/>}/>
              <Route path="/products" element={<ProductsPage2/>}/>
              <Route path="/counter" element={<Counter/>}/>
              <Route path="/single/:id" element={<SingleProduct/>}/>
              <Route path="/test" element={<Test/>}/>
          </Routes>
      </Router>
    </ProductContextProvider>
  ) 
}

export default App
