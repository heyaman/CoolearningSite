import React from 'react'
import Head from "./heading"  
import { Link } from 'gatsby';

 function words({title,img}) {
    return (
       <div className="wordstheme text-center  mx-auto py-3">

          <Head className="" title={title}></Head>

          <div className="row text-white">

             <div className="col-md-8 text-center my-3 mx-auto ">

                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate animi, eos, placeat ratione inventore voluptatem, consequatur necessitatibus iure itaque officiis officia commodi adipisci pariatur non eligendi eaque. Sequi aliquam quo modi quos mollitia praesentium vel earum repellat odit magni, pariatur laborum magnam velit possimus, quibusdam, animi maiores repudiandae culpa! Ullam, quaerat! Quis mollitia, aperiam, enim recusandae, earum ducimus incidunt molestias sequi sint ex quo provident magni ipsam. Facere eum, nulla earum mollitia hic alias in nisi voluptatem voluptates aperiam fuga magnam illum odio animi autem corrupti possimus id incidunt harum obcaecati culpa commodi. Pariatur laborum fugit est, voluptatum quod molestiae. Impedit labore maxime alias voluptatibus a in! Sint, aperiam eum necessitatibus, consectetur illo, deleniti unde quidem dolore voluptatum quas perspiciatis optio exercitationem doloremque rerum fugit ipsum tenetur eaque. Culpa, praesentium nostrum. Animi cumque natus placeat beatae tempora doloremque, porro odit provident temporibus, totam, ut ducimus enim ad dolorem deserunt eligendi?</p>




             </div>

             <div className="col-md-4">



                <div class="card bg-dark text-white" >

                   <img class="card-img-top" src={img} alt="Card image cap" />
                   <div class="card-body">
                      <h5 class="card-title">My name</h5>

                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <Link to="#" className="btn btn-primary cardbtn">Go somewhere</Link>

                   </div>





                </div>






             </div>




          </div>







       </div>
    )
}
export default words
