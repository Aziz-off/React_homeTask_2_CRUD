import React from 'react'
import MainRoutes from './MainRoutes'
import { Navbar } from 'react-bootstrap'

const App = () => {
  return (
    <>
    <Navbar />
      <MainRoutes />
      <footer style={{paddingTop: '15px'}}>@makers2023</footer>
    </>
  )
}

export default App
