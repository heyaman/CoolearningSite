import React, { Component } from 'react'
import Head from "../resuasble/heading"
import Img from'gatsby-image'

 class Cousrecart extends Component {
     constructor(props){
         super(props)
         
         this.state={
             courses:props.courses.edges,
         }

     }
    render() {
       {this.state.courses.map(ele=>{
            console.log(ele.node.id)
       })}
        
       
        

        
        return (
           <section className="py-5">

           <div className="container">
           <Head title="offered courses"></Head>

           <div className="row" >
           {
               this.state.courses.map((course)=>{
                   return(

                    <div className="col-11 col-md-6 d-flex mx-auto" key={course.node.id} >
                    <Img  fixed={course.node.images.fixed} />
                    <div className="flex-grow-1 px-2">
                    <div className="d-flex justify-content-between">
                    
                    <h6 className="mb-0">{course.node.title}</h6>
                    <h6 className="mb-0 text-success">${course.node.price}</h6>
                    </div>
                    <button     
   



                    className="btn btn-warning snipcart-add-item my-3"
                    data-item-id = {course.node.id}
                     data-item-name={course.node.title}
                      data-item-price={course.node.price}
                       data-item-url="https://coolearning.netlify.com/"
                      data-item-image={course.node.images.fixed.src}
                      
   
                    >buy now</button>
                    
                    </div>
                  
                   
                  
                  
                    
                    
                    </div>
                   )

               })}

           
           </div>
           
           </div>
           
           
           
           </section>
        )
    }
}
export default Cousrecart
