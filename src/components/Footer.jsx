import React, { useContext } from "react";
import { Context } from "../context/Context";
import EditableElement from "./EditableElement";
import logoGray from "../assets/svg/logo-gray.svg";
import { Instagram } from "./svg/Instagram";
import { Twitter } from "./svg/Twitter";
import { Facebook } from "./svg/Facebook";

import "./styles/Footer.css";
export const Footer = () => {
  const {
    state: {
      initialState: { isContentEditable },
      tagContent: { footer },
    },
    setActualTextContent,
  } = useContext(Context);
  return (
    <footer className="footer">
      <img className="footer__logo" src={logoGray} alt="Logo Footer" />
      <nav className="footer__nav">
        <EditableElement
          isContentEditable={isContentEditable}
          onBlur={setActualTextContent}
          key_name="footer.a_product"
        >
          <a href="/" className="footer__link">{footer.a_product}</a>
        </EditableElement>
        <EditableElement
          isContentEditable={isContentEditable}
          onBlur={setActualTextContent}
          key_name="footer.a_plans"
        >
          <a href="/" className="footer__link">{footer.a_plans}</a>
        </EditableElement>
        <EditableElement
          isContentEditable={isContentEditable}
          onBlur={setActualTextContent}
          key_name="footer.a_faq"
        >
          <a href="/" className="footer__link">{footer.a_faq}</a>
        </EditableElement>
        <EditableElement
          isContentEditable={isContentEditable}
          onBlur={setActualTextContent}
          key_name="footer.a_blog"
        >
          <a href="/" className="footer__link">{footer.a_blog}</a>
        </EditableElement>
      </nav>
      <div className="footer__social-media">
        <a href="/" aria-label="Link to Instagram" className="footer__link">
          <Instagram />
        </a>
        <a href="/" aria-label="Link to Twitter" className="footer__link">
          <Twitter />
        </a>
        <a href="/" aria-label="Link to Facebook" className="footer__link">
          <Facebook />
        </a>
      </div>
    </footer>
  );
};
