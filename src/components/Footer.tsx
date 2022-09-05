import { Link } from "gatsby";
import React from "react";


export default function Footer(){
  return <footer className="footer p-10 bg-black/50 ">
    <div>
    <span className="footer-title">Eveniment 2022</span> 
    <Link to="/schedule">Program</Link>
    <Link to="/speakers">Speakeri</Link>
  </div> 
  </footer>
}