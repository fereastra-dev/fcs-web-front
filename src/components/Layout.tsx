import React from "react";
import { IconContext } from "react-icons";
import { BsArrowLeftCircle } from "react-icons/bs";
import Footer from "./Footer";
import Meta from "./Meta";
import NavBar from "./NavBar";
import SidebarContent from "./SidebarContent";

const iconfig = {
  className: "fill-slate-300 group-hover:fill-white",
};

export default function Layout(props: { children: JSX.Element }) {
  return (
    <IconContext.Provider
      value={{
        className: "fill-slate-300 group-hover:fill-white",
      }}
    >
      <Meta />
      <div className="drawer bg-primary-dark text-primary-light">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <NavBar />
          <main className="w-full flex flex-col pt-20">{props.children}</main>
          <Footer />
        </div>

        <div
          className="drawer-side"
          onClick={() => {
            let box = document.getElementById("my-drawer") as HTMLInputElement;
            box.checked = false;
          }}
        >
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu gap-2 p-4 overflow-y-auto w-full bg-secondary-1">
            <li>
              <label className="btn btn-ghost w-full my-4 p-6 h-auto">
                <BsArrowLeftCircle />
              </label>
            </li>
            <SidebarContent />
          </ul>
        </div>
      </div>
    </IconContext.Provider>
  );
}
