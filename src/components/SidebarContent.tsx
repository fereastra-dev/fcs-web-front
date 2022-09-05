
import { Link } from "gatsby";
import React from "react";
import { BsArrowLeftCircle } from "react-icons/bs";
import DrawerButton from "./DrawerButton";

export default function SidebarContent() {
  return (
  <>
    <li><DrawerButton><BsArrowLeftCircle/></DrawerButton></li>
    <li><Link to="/"><p className="font-cond-light">Acasă</p></Link></li>
    <li><Link to="/schedule"><p className="font-cond-light">Program 2022</p></Link></li>
    <li><Link to="/speakers"><p className="font-cond-light">Speakeri</p></Link></li>
    {/* <li><Link href="/blog">Blog</Link></li>
    <li><Link href="/gallery">Galerie</Link></li> */}
    <li><Link to="/about"><p className="font-cond-light">Despre Noi</p></Link></li>
    <li><Link to="/donate"><p className="font-cond-light">Donează</p></Link></li>
    <div className="divider"></div>
    <li><Link to="https://www.instagram.com/fereastra.catre.stiinta/"><p className="font-cond-light">Instagram</p></Link></li>
    <li><Link to="https://www.facebook.com/fereastracatrestiinta"><p className="font-cond-light">Facebook</p></Link></li>
  </>
  );
}