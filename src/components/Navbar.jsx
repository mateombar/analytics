import React, { useContext, useState } from "react";
import { Context } from "../context/Context";
import EditableElement from "./EditableElement";
import "./styles/Navbar.css";
import logo from "../assets/svg/logo.svg";
import { Hamburger } from "./svg/Hamburger";
export const Navbar = () => {
  const [active, setActive] = useState(false);
  const {
    state: {
      initialState: { isContentEditable },
      tagContent: { navbar },
    },
    setActualTextContent,
  } = useContext(Context);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <>
      <nav className={active ? "navbar active" : "navbar"}>
        <img
          className="navbar__logo"
          src={logo}
          alt="Logo"
          onClick={handleClick}
        />
        <div className="navbar__links">
          <EditableElement
            isContentEditable={isContentEditable}
            onBlur={setActualTextContent}
            key_name="navbar.a_products"
          >
            <a href="/">{navbar.a_products}</a>
          </EditableElement>
          <EditableElement
            isContentEditable={isContentEditable}
            onBlur={setActualTextContent}
            key_name="navbar.a_pricing"
          >
            <a href="/">{navbar.a_pricing}</a>
          </EditableElement>
          <EditableElement
            isContentEditable={isContentEditable}
            onBlur={setActualTextContent}
            key_name="navbar.a_faq"
          >
            <a href="/">{navbar.a_faq}</a>
          </EditableElement>
          <EditableElement
            isContentEditable={isContentEditable}
            onBlur={setActualTextContent}
            key_name="navbar.a_blog"
          >
            <a href="/">{navbar.a_blog}</a>
          </EditableElement>
          <EditableElement
            isContentEditable={isContentEditable}
            onBlur={setActualTextContent}
            key_name="navbar.a_blog"
          >
            <a href="/">{navbar.a_blog}</a>
          </EditableElement>
        </div>
        <div className="navbar__buttons">
          <EditableElement
            isContentEditable={isContentEditable}
            onBlur={setActualTextContent}
            key_name="navbar.btn_sign_ing"
          >
            <a href="/" className="navbar__buttons--link">
              {navbar.btn_sign_ing}
            </a>
          </EditableElement>
          <EditableElement
            isContentEditable={isContentEditable}
            onBlur={setActualTextContent}
            key_name="navbar.btn_sign_up"
          >
            <button className="navbar__buttons--btn" type="button">
              {navbar.btn_sign_up}
            </button>
          </EditableElement>
        </div>
        <button className="navbar__menu" onClick={handleClick}>
          <Hamburger />
        </button>
      </nav>
    </>
  );
};
