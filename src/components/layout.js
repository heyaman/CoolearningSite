/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Footer from "./resuasble/footer"
import Navbar from "./resuasble/navbar"

import "./bootstrap.min.css"




import "./layout.css"


const Layout = ({ children }) => {
  

  return (
    
      
      <div>

        <Navbar></Navbar>
      
      {
        children
      }

     



        <Footer/>
      
      </div>
  
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
