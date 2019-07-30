
import React, { Component } from 'react'

 class BGI extends Component {
  render() {
    return (
       <bgi className={this.props.myclass} 
     >
     <h1 className="text-center text-light text-uppercase">{this.props.title}</h1>
        
     

      


         <div>
      
     
    <h4 className="text-warning">{this.props.subtitle}</h4>
     </div>

     </bgi>
      
      
      
      
     
    )
  }
}
export default BGI

