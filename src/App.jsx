import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './customer/components/Navigation/Navigation'
import HomePage from './customer/pages/Homepage/Homepage'
import Product from './customer/components/product/Product'

function App() {
  

  return (
    <>
     
      <div className="">
        <Navigation/>
        <div>
          {/*<HomePage/>*/}
          <Product/>
        </div>
      </div>
      
    </>
  )
}

export default App
