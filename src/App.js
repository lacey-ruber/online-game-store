import React from 'react'

import { Catalog, Footer, Header } from './container'
import { Advantages, Navbar } from './components'
import './App.css'

const App = () => (
  <div>
    <Navbar />
    <div className="container">
      <Header />
      <Catalog />
      <Advantages />
      <Footer />
    </div>
  </div>
)

export default App
