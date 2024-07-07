import React from 'react'
import "./navbar.css";
import { useState } from 'react';
const Navbar = () => {
  const [selected,setselected]=useState("Home")
  return (
    <div className="navbarwrapper" id="navwrapper">
       <nav className='navbar'>
        <ul className='options'>
        <li className={selected==="Home"?"litagcolor":""} onClick={()=>{setselected("Home")}} ><a className={selected==="Home"?"atagcolor":""} href="#" >Home</a></li>
        <li className={selected==="About"?"litagcolor":""} onClick={()=>{setselected("About")} } ><a className={selected==="About"?"atagcolor":""} href="#">About</a></li> 
        <li className={selected==="Projects"?"litagcolor":""} onClick={()=>{setselected("Projects")} } ><a className={selected==="Projects"?"atagcolor":""} href="#">Projects</a></li>
        <li className={selected==="Skills"?"litagcolor":""} onClick={()=>{setselected("Skills")} } ><a  className={selected==="Skills"?"atagcolor":""} href="#">Skills</a></li>
        
        <li className={selected==="Contact"?"litagcolor":""} onClick={()=>{setselected("Contact")}} ><a className={selected==="Contact"?"atagcolor":""} href="#">Contact</a></li>
        </ul>
       </nav>
    </div>
  )
}

export default Navbar
