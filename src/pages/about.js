import React from 'react'
import {graphql } from "gatsby"

import Layout from "../components/layout"
import BGI from "../components/resuasble/bgImg"
import Words from "../components/resuasble/words"
import Info from "../components/resuasble/infoblock"
import Team from "../components/about/team"



const aboutpage = ({data}) => (
  <Layout>
  <BGI
  img = {
    data.img.childImageSharp.fluid
  }
  title = "About us"
  subtitle=""
  myclass = "aboutBg"
   >
 
  </BGI>
  <Words title="a messgage from CEO" img="https://www.gravatar.com/avatar/f58ed66e6fccba4bec18faf7f8580b27?s=256&d=mm"></Words>
  <Info title="about us"></Info>
  <Team title="our amazing team" ></Team>

  

  

  
  
  </Layout>


)

export const query=graphql `{

     img:file(relativePath: {eq:"about.png"}) {
      childImageSharp {
       
        fluid{
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
  }
}   
    
`

export default aboutpage
