import React from 'react'

import { Navbar, Footer } from './components'
import Routes from './routes'


const App = () => {
  return (
    <div>
      <div id="full-height">
        <Navbar />
        <Routes />
      </div>
      <Footer />
    </div>
  )
}

export default App