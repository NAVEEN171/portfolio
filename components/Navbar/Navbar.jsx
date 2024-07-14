import React from 'react'
import "./navbar.css";
import { useState } from 'react';
const Navbar = () => {
  const [selected,setselected]=useState("Home");
  const [show,setshow]=useState(false);
  const barshandler=()=>{
    setshow(!show);

    console.log("hello")
    let bar1=document.getElementById("bar1");
    let bar2=document.getElementById("bar2");
    let bar3=document.getElementById("bar3");
    let navbar=document.getElementById("navbar");
     console.log(bar1);
     if(!show){
      if(bar2 && bar1 && bar3){
        console.log("i am inside");
        if(bar2.classList.contains("movebarback")){
          bar2.classList.remove("movebarback");
      
        }
      bar2.classList.add("movebar2");
      setTimeout(()=>{
        bar2.style.display="none";
        bar1.style.rotate="45deg";
        bar1.style.marginBottom="-4px";
        bar1.style.transformOrigin="center";

        bar3.style.rotate="-45deg"
        bar3.style.marginTop="-4px";
        bar3.style.transformOrigin="center";
      },300)
       



 }}

 if(show){
  console.log("i am inside");
  if(bar2.classList.contains("movebar2")){
    bar2.classList.remove("movebar2");

  }
  bar2.classList.add("movebarback")

  bar2.style.display="block";
  bar1.style.rotate="0deg";
  bar1.style.marginBottom="0px";
  bar1.style.transformOrigin="center";

  bar3.style.rotate="0deg"
  bar3.style.marginTop="0px";
  bar3.style.transformOrigin="center";
 }
     


  }
  const handler=()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });

  }
  return (
    <div className="navbarwrapper" id="navwrapper">
      <div className='smallnavbar'>
       <div className='logoname name'>NK</div>
       <div className='bars' onClick={()=>{barshandler()}}>
        <div className='bar' id="bar1"></div>
        <div className='bar' id="bar2"></div>
        <div className='bar' id="bar3"></div>


       </div>
       </div>

      { <nav className='navbar' >
       

        <ul className='options' >
        <a className={selected==="Home"?"atagcolor":""} href="#Home" ><li  className={selected==="Home"?"litagcolor":""} onClick={()=>{setselected("Home");handler()}} >Home</li></a>
        <a className={selected==="About"?"atagcolor":""} href="#About"><li className={selected==="About"?"litagcolor":""} onClick={()=>{setselected("About")} } >About </li> </a>
        <a className={selected==="Projects"?"atagcolor":""} href="#Projects"><li className={selected==="Projects"?"litagcolor":""} onClick={()=>{setselected("Projects")} } >Projects</li></a>
        <a  className={selected==="Skills"?"atagcolor":""} href="#Skills"> <li className={selected==="Skills"?"litagcolor":""} onClick={()=>{setselected("Skills")} } >Skills</li></a>
        
        <a className={selected==="Contact"?"atagcolor":""} href="#Contact"><li className={selected==="Contact"?"litagcolor":""} onClick={()=>{setselected("Contact")}} >Contact</li></a>
        </ul>
       </nav>}
       {show && <nav className='navbar2' id="navbar" >
       

       <ul className='options' >
       <a className={selected==="Home"?"atagcolor":""} href="#Home" ><li  className={selected==="Home"?"litagcolor":""} onClick={()=>{setselected("Home");handler();barshandler()}} >Home</li></a>
       <a className={selected==="About"?"atagcolor":""} href="#About"><li className={selected==="About"?"litagcolor":""} onClick={()=>{setselected("About");barshandler()} } >About </li> </a>
       <a className={selected==="Projects"?"atagcolor":""} href="#Projects"><li className={selected==="Projects"?"litagcolor":""} onClick={()=>{setselected("Projects");barshandler()} } >Projects</li></a>
       <a  className={selected==="Skills"?"atagcolor":""} href="#Skills"> <li className={selected==="Skills"?"litagcolor":""} onClick={()=>{setselected("Skills");barshandler()} } >Skills</li></a>
       
       <a className={selected==="Contact"?"atagcolor":""} href="#Contact"><li className={selected==="Contact"?"litagcolor":""} onClick={()=>{setselected("Contact");barshandler()}} >Contact</li></a>
       </ul>
      </nav>}
    </div>
  )
}

export default Navbar
