import React from 'react'
import "./home.css"
import Image from 'next/image'
import { MdOutlineStar } from "react-icons/md";
import {useState,useEffect} from "react"
import { motion,useAnimationControls,useMediaQuery  } from 'framer-motion';


const Start = () => {


  const controls=useAnimationControls();
  const upcontrol=useAnimationControls();
  const [animate,setanimate]=useState(false);
  const [hovered,sethovered]=useState(1);
  const getAnimationProps=()=>{
    if(window.innerWidth<=500){
      return{
        initial:{x:100,y:0,opacity:0} ,
        animate:{x:"-16%",y:"2%",opacity:1},
        transition:{duration:0.5,ease: "easeInOut"}
  
       }

    }
    else if(window.innerWidth<=550){
      return{
        initial:{x:100,y:0,opacity:0} ,
        animate:{x:"-40%",y:"2%",opacity:1},
        transition:{duration:0.5,ease: "easeInOut"}
  
       }

    }
 
    else if(window.innerWidth<=600){ 
      return{
      initial:{x:100,y:0,opacity:0} ,
      animate:{x:"-18%",y:"2%",opacity:1},
      transition:{duration:0.5,ease: "easeInOut"}

     }
    }
  else if(window.innerWidth<=750){ 
      return{
      initial:{x:100,y:0,opacity:0} ,
      animate:{x:"-20%",y:"0%",opacity:1},
      transition:{duration:0.5,ease: "easeInOut"}

     }
    }
       else  if(window.innerWidth<=950){
          return{
            initial:{x:100,opacity:0},
             animate:{x:"-17%",y:"0%",opacity:1},
              transition:{duration:0.5}

          }

         }
         else{
          return{
            initial:{x:100,opacity:0},
             animate:{x:"-37%",y:"-2%",opacity:1},
              transition:{duration:0.5}

          }
         }
  }
  const getAnimationProps2=()=>{
   
     if(window.innerWidth<=500){ 
      return{
      initial:{x:100,y:0,opacity:0} ,
      animate:{x:"93%",y:"-4%",opacity:1},
      transition:{duration:0.5,ease: "easeInOut"}

     }
    }
    if(window.innerWidth<=550){ 
      return{
      initial:{x:100,y:0,opacity:0} ,
      animate:{x:"70%",y:"-4%",opacity:1},
      transition:{duration:0.5,ease: "easeInOut"}

     }
    }
   else if(window.innerWidth<=700){ 
      return{
      initial:{x:100,y:0,opacity:0} ,
      animate:{x:"100%",y:"-4%",opacity:1},
      transition:{duration:0.5,ease: "easeInOut"}

     }
    }

    
   else if(window.innerWidth<=950){
     return{
      initial:{x:100,y:0,opacity:0} ,
      animate:{x:"93%",y:"-5%",opacity:1},
      transition:{duration:0.5,ease: "easeInOut"}

     }

    }
    else{
     return{
       initial:{x:100,opacity:0},
       animate:{x:"75%",y:"-5%",opacity:1} ,

         transition:{duration:0.5}

     }
    }
}


  useEffect(()=>{
    const resizehandler=()=>{
      console.log("resize");
      if(window.innerWidth>900){
        console.log("true");
      }
        

    }

   window.addEventListener("resize", resizehandler);
   return ()=>{window.removeEventListener("resize",resizehandler)}
  },[])


useEffect(()=>{
       let portfolio_option=document.getElementById("portfolio_option");
       let hire_option=document.getElementById("hire_option");
       if(hovered===1){
        portfolio_option.style.transform="scale(1.1)";
        hire_option.style.transform="scale(0.9)";
        portfolio_option.style.backgroundColor="#0780df";
        hire_option.style.backgroundColor="transparent";


       }
       else{
        portfolio_option.style.transform="scale(0.9)";
        hire_option.style.transform="scale(1.1)";
        hire_option.style.backgroundColor="orange";
        portfolio_option.style.backgroundColor="transparent";


       }
},[hovered])
  useEffect(()=>{
if(animate){
  controls.start("final");
  upcontrol.start("final");
}
else{
  controls.start("initial");
  upcontrol.start("initial");

}
  },[animate])
  useEffect(()=>{
  let navbar=document.getElementById("navwrapper");
    let home=document.getElementById("homewrapper");
    console.log(navbar);
    
    let computedStyle = window.getComputedStyle(navbar);
    let heightValue = computedStyle.getPropertyValue('height');
    console.log(heightValue)
    let computedStyle1 = window.getComputedStyle(home);
    let homeHeight = computedStyle1.getPropertyValue('height');
    let animate1=document.getElementById("animate1");
    let animateheight= computedStyle1.getPropertyValue('height');
    animateheight=parseInt(animateheight)
    homeHeight=parseInt(homeHeight);
    heightValue=parseInt(heightValue);
    console.log(homeHeight);
    let actualheight;
    actualheight=homeHeight+heightValue+30;
    heightValue=homeHeight+heightValue-window.innerHeight;


    const scrollhandler=()=>{
      console.log(` actual height is ${actualheight}`);

      
      
      console.log(window.scrollY);
    ;
    if(window.scrollY===0){
      setanimate(false)

    }
  else  if (window.scrollY>(actualheight)) {
      setanimate(false);
    }
     else if(window.scrollY>(heightValue)){
          setanimate(true);

      }
      else{
        setanimate(false);

      }
   


    }
    scrollhandler();
    window.addEventListener("scroll",scrollhandler);
  },[])
  return (
    <div className='home_container' >
    <div className='homewrapper' id="homewrapper">
    <motion.div  className='home' variants={{initial:{
    y:0,
    opacity:1
   },
   final:{
    y:100,
    opacity:0,
   }
   }}
   initial="initial"
   animate={controls}

   >
       <div className='greeting'>Hello!
       <svg className="design-2" width="30" height="30" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" clipRule="evenodd" d="M3.83352 3.29445C4.45371 2.72308 4.98104 1.97697 5.54402 0.77735L6.45551 1.22371C5.85864 2.49556 5.26662 3.35625 4.52849 4.03628C3.79604 4.71106 2.94455 5.18393 1.88125 5.71151L1.40936 4.81636C2.46183 4.29415 3.20764 3.87105 3.83352 3.29445ZM4.60037 6.03835C5.30048 5.77794 5.92498 5.36951 6.64474 4.63316L7.35496 5.36734C6.55783 6.18283 5.82162 6.67718 4.97063 6.99371C4.13474 7.30463 3.21085 7.43441 2.07288 7.55854L1.92716 6.55012C3.06759 6.42573 3.88517 6.30438 4.60037 6.03835ZM2.48052 0.968755C2.5007 1.54668 2.2571 1.98907 1.83396 2.38914C1.41086 2.78917 0.840973 3.11777 0.2188 3.47651L0.152348 3.51483L0.762811 4.3429L0.863317 4.28498C1.45563 3.94388 2.11027 3.56689 2.61106 3.0934C3.15533 2.5788 3.54989 1.92212 3.51881 1.03223L2.48052 0.968755Z" fill="url(#paint0_linear_27_3)"/>
  <defs>
    <linearGradient id="paint0_linear_27_3" x1="3.75366" y1="0.777344" x2="3.75366" y2="7.55853" gradientUnits="userSpaceOnUse">
      <stop stopColor="#ECBF4E"/>
      <stop offset="1" stopColor="#FEBE88"/>
    </linearGradient>
  </defs>
</svg>



       </div>
       <div className='namelabel'>
        <div className='welcome'>I'm <span className='name'>Naveen </span>,</div>
        <div className='role'>Full Stack Developer</div>
        <svg className="design" width="90" height="90" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" clipRule="evenodd" d="M9.6264 1.48236C5.3588 2.64588 3.30307 3.35107 1.35823 5.34839L0.641772 4.65075C2.79867 2.43566 5.10942 1.67737 9.36337 0.517578L9.6264 1.48236ZM5.71052 7.95602C4.21873 9.36067 2.9101 11.2331 1.44905 14.2196L0.550781 13.7801C2.04202 10.7319 3.41436 8.74453 5.02499 7.22797C6.63332 5.71358 8.45184 4.69553 10.7793 3.55115L11.2205 4.44855C8.90995 5.58462 7.20461 6.5492 5.71052 7.95602ZM9.49921 13.978C9.41598 12.0745 9.85816 10.8115 10.5224 9.84857C11.1759 8.90119 12.0599 8.21562 13.0054 7.4824L13.0054 7.48239L13.1187 7.39454L12.5055 6.6046L12.3579 6.71899C11.4402 7.4299 10.4433 8.20213 9.69925 9.28075C8.89981 10.4397 8.40835 11.9219 8.50016 14.0217L9.49921 13.978Z" fill="url(#paint0_linear_25_11)"/>
  <defs>
    <linearGradient id="paint0_linear_25_11" x1="5.88019" y1="-0.481445" x2="5.88019" y2="14.2199" gradientUnits="userSpaceOnUse">
      <stop stopColor="#ECBF4E"/>
      <stop offset="1" stopColor="#FEBE88"/>
    </linearGradient>
  </defs>
</svg>



       </div>
    </motion.div>
    <motion.div variants={{initial:{y:0},final:{y:-150}}} initial="initial" animate={upcontrol} className='portfolio_photo_container'>
       <div className='intro'>
      Nice to meet you! <br/>
       I'm <b>Naveen</b>, <br/> passionate about building <br/> scalable  <b>web apps</b> </div>      
       <div className='rating-container'>
        <div className='starswrapper'>
        {Array.from({length:5}).map((_,index)=>(<MdOutlineStar  key={`${index}star`} className='star' />))}

        </div>
        <div className='proficiency'>Freelancer</div>
       </div>
    </motion.div>
    <div className='photo_container'>
        <div className='circle'>
        
         {animate && <motion.img src="/animate1.png" id="animate1" loading="lazy" className="animate1" {...getAnimationProps()} ></motion.img>}
          <Image className='portfolio_image' width={350} height={450} alt="image" priority={false} src={"/portfolio_image.png"}></Image>
          {animate && <motion.img src="./animate2.png" loading="lazy" className="animate2" {...getAnimationProps2()}  ></motion.img>}
          <div className='small_opt'>
            <a href="https://drive.google.com/uc?export=download&id=1mVpUl7f6Y-5LpjnPSDUb5U2QkbaMf9Wi" download="Naveen_Resume.pdf"><div className='portfolio_option option' onMouseEnter={()=>{sethovered(1)}} id="portfolio_option" >Resume{hovered===1 && <svg className='arrow' fill="white" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" ><path d="m216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z"/></svg>}</div></a>
            <a href="#Contact"><div className='hireme_option option' onMouseEnter={()=>{sethovered(2)}} onMouseLeave={()=>{sethovered(1)}} id="hire_option" >Hire me{hovered===2 && <svg className='arrow' fill="white" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" ><path d="m216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z"/></svg>}</div></a>
          </div>

        </div>
       </div>
    </div>
    </div>
  )
}

export default Start
