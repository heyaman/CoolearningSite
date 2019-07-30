import React from 'react'
import Heading from "./heading"
import { Link } from 'gatsby';

function infoblock({title}) {
    return (
     <info classname="infotheme py-4 my-3">

     <div className="container">
     <Heading title="our Vision"></Heading>

     <div className="row">

     <div className="col-10 sol-sm-8 text-center mx-auto mb-3">

     <p className="lead ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem unde quia a vero nesciunt nobis soluta cupiditate vel, eos, ea reprehenderit? Quia at est esse, nostrum repellat optio! Quod doloribus tenetur eius fugiat, quidem modi, deleniti hic exercitationem est, ratione molestiae provident dolorem ab facere laborum repudiandae. Libero consectetur qui temporibus. Vitae, quod fuga? Accusamus, voluptate. Fugit qui corporis perspiciatis?</p>

     <Link to={title}>
     <button className="btn btn-warning btn-lg">{title}</button>
     </Link>
     
     </div>


     
     </div>

     
     
     </div>
     
     </info>
    )
}

export default infoblock
