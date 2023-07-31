import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './customer/components/Navigation/Navigation'
import HomePage from './customer/pages/Homepage/Homepage'
import Product from './customer/components/product/Product'
import Footer from './customer/components/Footer/Footer'
import ProductDetails from './customer/components/productDetails/ProductDetails'
function App() {
  

  return (
    
     
      <div className="">
        <Navigation/>
        <div>
          {/*<HomePage/>*/}
           {/*<Product/>*/}
          <ProductDetails/>
        </div>
        <Footer/>
      </div>
      
    
  )
}

export default App
