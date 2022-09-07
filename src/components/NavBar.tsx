import { Link } from "gatsby";
import React from "react";
import { IconContext } from "react-icons";
import { BsFacebook, BsFillGridFill, BsInstagram } from "react-icons/bs";
import DrawerButton from "./DrawerButton";

function NavbarLink(props: {
  to: string;
  className?: string;
  children: JSX.Element | string;
}) {
  return (
    <Link to={props.to}>
      <span className={`navlink group cursor-pointer ${props.className}`}>
        {props.children}
      </span>
    </Link>
  );
}

function SocialIcon(props: { href: string; children: JSX.Element | string }) {
  return (
    <a
      target={"_blank"}
      className={`navlink group cursor-pointer`}
      href={props.href}
      rel="noreferrer"
    >
      {props.children}
    </a>
  );
}

export default function NavBar() {
  return (
    <IconContext.Provider value={{ className: "fill-primary-dark/70 group-hover:fill-primary-dark" }}>
      <div className="navbar bg-primary-light text-primary-dark rounded-br-3xl absolute py-2 px-5 laptop:px-16 gap-5">
        <NavbarLink to="/">
          <img
            alt="Fereastra Catre Stiinta"
            src="/navbaricon.svg"
            width={200}
          />
        </NavbarLink>
        <div className="grow"></div>
        <span className="hidden laptop:inline-flex flex-row gap-5">
          {/* <NavbarLink className="hover:active-navlink" to="blog">Blog</NavbarLink>
        <NavbarLink className="hover:active-navlink" to="gallery">Galerie</NavbarLink> */}
          <NavbarLink className="hover:active-navlink" to="/about">
            <span className="font-cond-light">Despre Noi</span>
          </NavbarLink>
          <NavbarLink className="hover:active-navlink" to="/donate">
            <span className="font-cond-light">Donează</span>
          </NavbarLink>
          <SocialIcon href="https://www.facebook.com/fereastracatrestiinta">
            <BsFacebook />
          </SocialIcon>
          <SocialIcon href="https://www.instagram.com/fereastra.catre.stiinta/">
            <BsInstagram />
          </SocialIcon>
        </span>

        <DrawerButton>
          <BsFillGridFill />
        </DrawerButton>
      </div>
    </IconContext.Provider>
  );
}
