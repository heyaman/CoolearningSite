import React, { Component } from 'react'
import {
    FaShoppingCart
} from 'react-icons/fa';
import {
    Link
} from "gatsby"
import logo from "../../images/logo.png"
import "../bootstrap.min.css"

 class Navbar extends Component {

    state={
        navbarState:false,
        navbarClass: "collapse navbar-collapse show",
        menus:[{id:1,
        text:"home"},{id:2,
        text:"courses"},{id:3,
        text:"about"},{id:4,
        text:"services"}
       ]

    }

    myToggler=()=>{
        this.state.navbarState ? this.setState({
            navbarState: false,
            navbarClass: "collapse navbar-collapse show"
        }):this.setState({
            navbarState: true,
                navbarClass: "collapse navbar-collapse "

        })
    }
    render() {
        return (
         
        
          
          <nav className = "navbar navbar-expand-sm bgtheme text-white">
           
            <Link to = "/" className="navbar-brand ml-5 "><img src={logo} alt="imge goes here"  id="logo"></img></Link>
              <button type="button" className="navbar-toggler " onClick={this.myToggler}>

              <span className="text-light">menu</span>
        
      </button>

            <div className={this.state.navbarClass}>


                <ul className="navbar-nav ml-auto mr-5">
                
                        {this.state.menus.map(menu=>{
                          return(
                                 <li key={menu.id} className="list-item p-2">
                        <Link to={menu.text} className="list-link text-light">{menu.text}</Link>
                        </li>
                          )
                        })}
                          <li className="list-item p-2">
                        <Link to="/" className="list-link  " ><FaShoppingCart  className="size animated infinite flip slow" /></Link>
                        </li>
                          
                
                
                
                
                </ul>
            
            
            
            
            
            </div>
            
           
           
           
           </nav>
        )
    }
}

export default Navbar
