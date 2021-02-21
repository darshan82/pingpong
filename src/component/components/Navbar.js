import React from 'react';
import '../style/navbar.css';
import logo from "../../asserts/logos/logo.png"


export default function Navbar(props) {
    const {handleClick} = props
    return (    
        <div>
        <heade>
        <div className="logo"> <a><img src={logo} alt="logo"/></a>  </div>
        <div> 
            <ul className="lin"> 
                
                <li>  <a href="#"> PINGPONG  </a> </li> 
                <li >  <a href="#"> Services </a> </li> 
                <li onClick={()=>handleClick()}><a>  PR </a> </li> 
                <li>  <a href="#"> Careers </a> </li> 
           
                </ul>
        </div>

    </heade>
      </div>
    )
}
