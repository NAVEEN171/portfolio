"use client"

import Image from "next/image";
import styles from "./page.module.css";
import "./globals.css"
import Navbar from "../../components/Navbar/Navbar";
import Start from "../../components/home/Start";
import About from "../../components/about/About";
import Projects from "../../components/Projects/Projects";
export default function Home() {
  return (
   <main className="portfoliocontainer">
    <div className="portfolio-wrapper"> 
  <Navbar/>
  <Start/>
  <About/>
  <Projects/>
  </div>
   </main>
  );
}
