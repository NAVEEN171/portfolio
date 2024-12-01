import React from 'react'
import "./navbar.css";
import { useState,useEffect } from 'react';
const Navbar = () => {
  const [selected,setselected]=useState("Home");
  const [show,setshow]=useState(false);
  

  const scrollHandler=()=>{
    console.log(window.scrollY);
     let navbar=document.getElementById("navwrapper");  
     let navbarheight;
     let bottomcontainer=document.querySelector(".bottomcontainer");
     let bottomconheight;
     let top;
     let header=document.querySelector(".portfolio-wrapper");
     let headerheight,aboutheight,projectheight,skillsheight,contactheight;
     if(header){
      console.log("header height is:")
      headerheight=header.offsetHeight;
      console.log(header.offsetHeight);
     } 
     //About_section
     let about=document.querySelector(".About_section");
     if(about){
      console.log("About_section is:");
      aboutheight=about.offsetHeight;
      console.log(about.offsetHeight);
     } 
     //projects_container
     let projects=document.querySelector(".projects_container");
     if(projects){
      console.log("project_section is:")
      projectheight=projects.offsetHeight
      console.log(projects.offsetHeight);
     } 
     //Skills_section
     let skills=document.querySelector(".Skills_section");
     if(skills){
      console.log("skills  is:")
      skillsheight=skills.offsetHeight;
      console.log(skills.offsetHeight);
     } 
     //contacts_container
     let contacts=document.querySelector(".contacts_container");
     if(contacts){
      contactheight=contacts.offsetHeight;
      console.log("contacts  is:")
      console.log(contacts.offsetHeight);
     } 
     
     if(bottomcontainer){
      let bottomstyles=window.getComputedStyle(bottomcontainer);
      top=parseInt(bottomstyles.getPropertyValue("margin-top"));
      console.log(top);
     console.log(bottomcontainer.offsetHeight)
     }
     if(navbar){
      navbarheight=navbar.offsetHeight;
      console.log("navbar height is : ")
      console.log(navbarheight);
     }  
     let upheight=navbarheight+top+headerheight;

     if(window.scrollY<upheight-90){
      setselected("Home");
     }
     else if(window.scrollY>(upheight-90) && window.scrollY<=upheight+aboutheight-(window.innerWidth<350?100:70)){
      setselected("About");
     }
     else if(window.scrollY>aboutheight+upheight-(window.innerWidth<350?100:70) && window.scrollY<=projectheight+upheight+aboutheight-70){
      setselected("Projects");

     }
     else if(window.scrollY>projectheight+upheight+aboutheight-70 && window.scrollY<=projectheight+upheight+aboutheight+skillsheight-(window.innerWidth>700?180:280)){
      setselected("Skills")
     }
     else if(window.innerWidth<=700 && projectheight+skillsheight+aboutheight+upheight-280){
      setselected("Contact")
     }
     else if(window.scrollY>projectheight+skillsheight+aboutheight+upheight-180){
      setselected("Contact")
     }
     
     else{
      setselected("Home");
     }
     console.log("scroll height is:")
     console.log(window.scrollY);
     console.log("calculated height is");
     console.log(projectheight+skillsheight+aboutheight+upheight-180)
  }
  

  useEffect(()=>{
    window.addEventListener("scroll",scrollHandler);

  },[])
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
        <a className={selected==="Home"?"atagcolor":""} href="#Home" ><li  className={selected==="Home"?"litagcolor":""} onClick={()=>{handler();barshandler()}} >Home</li></a>
        <a className={selected==="About"?"atagcolor":""} href="#About"><li className={selected==="About"?"litagcolor":""} onClick={()=>{barshandler()} } >About </li> </a>
        <a className={selected==="Projects"?"atagcolor":""} href="#Projects"><li className={selected==="Projects"?"litagcolor":""} onClick={()=>{barshandler()}}  >Projects</li></a>
        <a  className={selected==="Skills"?"atagcolor":""} href="#Skills"> <li className={selected==="Skills"?"litagcolor":""} onClick={()=>{barshandler()} } >Skills</li></a>
        
        <a className={selected==="Contact"?"atagcolor":""} href="#Contact"><li className={selected==="Contact"?"litagcolor":""} onClick={()=>{barshandler()}} >Contact</li></a>
        </ul>
       </nav>}
       {show && <nav className='navbar2' id="navbar" >
       

       <ul className='options' >
       <a className={selected==="Home"?"atagcolor":""} href="#Home" ><li  className={selected==="Home"?"litagcolor":""} onClick={()=>{handler();barshandler()}} >Home</li></a>
       <a className={selected==="About"?"atagcolor":""} href="#About"><li className={selected==="About"?"litagcolor":""} onClick={()=>{barshandler()} } >About </li> </a>
       <a className={selected==="Projects"?"atagcolor":""} href="#Projects"><li className={selected==="Projects"?"litagcolor":""} onClick={()=>{barshandler()} } >Projects</li></a>
       <a  className={selected==="Skills"?"atagcolor":""} href="#Skills"> <li className={selected==="Skills"?"litagcolor":""} onClick={()=>{barshandler()} } >Skills</li></a>
       
       <a className={selected==="Contact"?"atagcolor":""} href="#Contact"><li className={selected==="Contact"?"litagcolor":""} onClick={()=>{barshandler()}} >Contact</li></a>
       </ul>
      </nav>}
    </div>
  )
}

export default Navbar
