import React from "react";
import { IconContext } from "react-icons";
import Footer from "./Footer";
import Meta from "./Meta";
import NavBar from "./NavBar";
import SidebarContent from "./SidebarContent";

const iconfig = {
  className: "fill-slate-300 group-hover:fill-white",
};

export default function Layout(props: { children: JSX.Element }) {
  return (
    <IconContext.Provider value={iconfig}>
      <Meta />
      <div className={`drawer bg-primary-dark text-primary-light`}>
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className={`drawer-content flex flex-col`}>
          <NavBar />
          <main className="w-full flex flex-col pt-20">{props.children}</main>
          <Footer />
        </div>

        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-full bg-secondary-1">
            <SidebarContent />
          </ul>
        </div>
      </div>
    </IconContext.Provider>
  );
}
