import React from 'react'
import "./contact.css"
import { useState } from 'react'
const Contact = () => {
  const [username,setusername]=useState("");
  const [useremail,setuseremail]=useState("");
  const [desc,setdesc]=useState("");
  const [sent,setsent]=useState(false);

  const submithandler=async(e)=>{
    e.preventDefault();
    console.log(username.length)
    if(username.length>0 && useremail.length>0 && desc.length>0){
      try{
         let res=await fetch("api/sendemail",{
          method:"POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body:JSON.stringify({
            name:username,
            email:useremail,
            message:desc
          })
        
        })
        if(res){
          res=await res.json();
          console.log(res);
          if(res.message=="Successfully sent"){
            setsent(true);
            setTimeout(() => {
              setsent(false);
            }, 2000);

          }
        }
      } 
      catch(err){
        console.log(err);

      }    
    }
   

  }


  return (
    <div className='contacts_container' id="Contact">
        <h1 className='contacts_heading name'>Get In Touch
        </h1>
        
        <div className='form_containerwrapper'>
        <div  className='form_container'>
        <div className='contact_info'>
            <a href="mailto:naveenkumar171837@gmail.com"><div className='email'>naveenkumar171837@gmail.com</div></a>
        </div>
            <input type="text" onChange={(e)=>{setusername(e.target.value)}} className='username' placeholder="Your Name"></input>
            <input type="text" onChange={(e)=>{setuseremail(e.target.value)}} className='useremail' placeholder="Your Email"></input>
            <textarea type="text" onChange={(e)=>{setdesc(e.target.value)}} className='usermessage' placeholder="message"></textarea>
           {!sent &&<button className='sendbutton' type="submit" onClick={(e)=>{submithandler(e)}}>
            <svg className='sendicon' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1792 1792"><path fill="currentColor" d="M1764 11q33 24 27 64l-256 1536q-5 29-32 45q-14 8-31 8q-11 0-24-5l-453-185l-242 295q-18 23-49 23q-13 0-22-4q-19-7-30.5-23.5T640 1728v-349l864-1059l-1069 925l-395-162q-37-14-40-55q-2-40 32-59L1696 9q15-9 32-9q20 0 36 11"/></svg>
             submit
              
            </button>}
            {sent &&<button className='sendbutton' type="submit" >
              <svg xmlns="http://www.w3.org/2000/svg" className='sendicon' height="1em" width="1em" viewBox="0 -960 960 960" fill="#e8eaed"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
            Done
              
            </button>}

        </div>
        <div className='contact_icons'>
        <a href="https://www.linkedin.com/in/naveenkumar-sunkana-a40711250/"><svg className="linkedin" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128"><path fill="#0076b2" d="M116 3H12a8.91 8.91 0 0 0-9 8.8v104.42a8.91 8.91 0 0 0 9 8.78h104a8.93 8.93 0 0 0 9-8.81V11.77A8.93 8.93 0 0 0 116 3"/><path fill="#fff" d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 1 1-10.5 10.49a10.5 10.5 0 0 1 10.5-10.49m20.41 29h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"/></svg></a>
       <a href="https://x.com/Naveenk00398986"> <svg className='twitter' xmlns="http://www.w3.org/2000/svg" width="0.88em" height="1em" viewBox="0 0 448 512"><path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm297.1 84L257.3 234.6L379.4 396h-95.6L209 298.1L123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5l78.2-89.5zm-37.8 251.6L153.4 142.9h-28.3l171.8 224.7h26.3z"/></svg></a>
       <a href="https://github.com/NAVEEN171"> <svg className="github" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/></svg></a>
        </div>
        </div>
    </div>
  )
}

export default Contact
