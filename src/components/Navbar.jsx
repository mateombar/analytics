import React, { useState, useContext } from "react";
import { Context } from "../context/Context";
import EditableElement from "./EditableElement";
export const Navbar = () => {
  const {
    state: {
      initialState: { isContentEditable },
      tagContent: { navbar },
    },
    setTextContent,
  } = useContext(Context);
  return (
    <nav>
      <EditableElement
        isContentEditable={isContentEditable}
        key_name="navbar.h5_logo"
      >
        <a href="/">{navbar.a_products}</a>
      </EditableElement>
    </nav>
  );
};
