import React from 'react'
import Navbar from '../Navbar/navbar'
import Footer from '../Footer/Footer'

const Layout = (props) => {
  return (
    <>
        <Navbar/>
        <main style={{marginTop:'10 vh'}}>{props.children}</main>
        <Footer/>
    </>
  )
}

export default Layout