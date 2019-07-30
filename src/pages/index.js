import React from 'react'
import {graphql } from "gatsby"

import Layout from "../components/layout"
import BGI from "../components/resuasble/bgImg"
import Words from "../components/resuasble/words"
import Info from "../components/resuasble/infoblock"
import Cousrecart from "../components/cart/cousrecart"




const IndexPage = ({data}) => (
  <Layout>
  <BGI
  
  title = "i write code"
  subtitle="LearnCodeOnline"
  myclass = "bgi"
   >
 
  </BGI>
  <Words title="what people say" img="https://images.pexels.com/photos/2673070/pexels-photo-2673070.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></Words>


  <Info title="about us"></Info>
  <Cousrecart courses={data.courses}></Cousrecart>


  
  </Layout>


)

export const query=graphql `{

  
    courses: allContentfulCourses {
      edges {
        node {
          id
          title
          price
          category
        

          images {
            fixed(height: 120, width: 200) {
             ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  
  
}   
    
`

export default IndexPage
