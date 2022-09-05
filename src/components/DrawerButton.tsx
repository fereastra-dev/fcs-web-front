import React from "react";

export default function DrawerButton(props: { children: JSX.Element }) {
  return (
    <label
      htmlFor="my-drawer"
      className="flex-none lg:hidden btn btn-square btn-ghost"
    >
      {props.children}
    </label>
  );
}
