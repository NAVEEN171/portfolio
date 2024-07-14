"use client"

import Image from "next/image";
import styles from "./page.module.css";
import "./globals.css"
import Navbar from "../../components/Navbar/Navbar";
import Start from "../../components/home/Start";
import About from "../../components/about/About";
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/skills/Skills";
import Contact from "../../components/contacts/Contact";
export default function Home() {
  return (
   <main className="portfoliocontainer" >
      <Navbar />
<div className="bottomcontainer"  >
    <div className="portfolio-wrapper"> 
    <Start/>

  </div>
  <div className="othersectionswrapper">
  <About/>
  <Projects/>
  <Skills/>

  <Contact/>
  </div>
  </div>
   </main>
  );
}
