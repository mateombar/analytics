import React, { useContext } from "react";
import { Context } from "../context/Context";
import EditableElement from "./EditableElement";
import "./styles/Navbar.css";
import logo from "../assets/svg/logo.svg";
export const Navbar = () => {
  const {
    state: {
      initialState: { isContentEditable },
      tagContent: { navbar },
    },
    setActualTextContent,
  } = useContext(Context);
  return (
    <nav className="navbar">
      <img className="navbar__logo" src={logo} alt="Logo" />
      <ul className="navbar__links">
        <li className="navbar__links--link">
          <EditableElement
            isContentEditable={isContentEditable}
            onBlur={setActualTextContent}
            key_name="navbar.a_products"
          >
            <a href="/">
              {navbar.a_products}
            </a>
          </EditableElement>
        </li>
        <li className="navbar__links--link">
          <EditableElement
            isContentEditable={isContentEditable}
            onBlur={setActualTextContent}
            key_name="navbar.a_pricing"
          >
            <a href="/">
              {navbar.a_pricing}
            </a>
          </EditableElement>
        </li>
        <li className="navbar__links--link">
          <EditableElement
            isContentEditable={isContentEditable}
            onBlur={setActualTextContent}
            key_name="navbar.a_faq"
          >
            <a href="/">
              {navbar.a_faq}
            </a>
          </EditableElement>
        </li>
        <li className="navbar__links--link">
          <EditableElement
            isContentEditable={isContentEditable}
            onBlur={setActualTextContent}
            key_name="navbar.a_blog"
          >
            <a href="/">
              {navbar.a_blog}
            </a>
          </EditableElement>
        </li>
        <li className="navbar__links--link">
          <EditableElement
            isContentEditable={isContentEditable}
            onBlur={setActualTextContent}
            key_name="navbar.a_blog"
          >
            <a href="/">
              {navbar.a_blog}
            </a>
          </EditableElement>
        </li>
      </ul>
      <div className="navbar__buttons">
        <a className="navbar__buttons--link">{navbar.btn_sign_ing}</a>
        <button className="navbar__buttons--btn">{navbar.btn_sign_up}</button>
      </div>
    </nav>
  );
};
