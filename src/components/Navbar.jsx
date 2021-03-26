import React, { useContext } from "react";
import { Context } from "../context/Context";
import EditableElement from "./EditableElement";
export const Navbar = () => {
  const {
    state: {
      initialState: { isContentEditable },
      tagContent: { navbar },
    },
    setActualTextContent,
  } = useContext(Context);
  return (
    <nav>
      <EditableElement
        isContentEditable={isContentEditable}
        onBlur={setActualTextContent}
        key_name="navbar.a_products"
      >
        <a href="/">{navbar.a_products}</a>
      </EditableElement>
    </nav>
  );
};
