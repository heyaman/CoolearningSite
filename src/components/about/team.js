import React from 'react'
import Head from "../resuasble/heading"

 function team({title}) {
    return (
        < div className = "bg-dark  mx-auto " >
        <Head  title={title}></Head>
            < div className = "row mx-auto  text-center mr-3 team px-4 " >
            <div className="col-md-4 col-sn-4">
            <div class="card" >
  <img class="card-img-top" src="https://images.pexels.com/photos/2117283/pexels-photo-2117283.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">person 1</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
            <div className="col-md-4 col-sn-4">
            <div class="card" >
  <img class="card-img-top" src="https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">person 2</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
            <div className="col-md-4 col-sn-4">
            <div class="card" >
  <img class="card-img-top" src="https://images.pexels.com/photos/2100063/pexels-photo-2100063.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">person 3</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
            
            
            </div>
        </div>
    )
}

export default team
