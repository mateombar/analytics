import React, { useContext } from "react";
import { Context } from "../context/Context";
import EditableElement from "./EditableElement";

import MainScreen from '../assets/png/main-screen.png';
import './styles/Fold.css';
export const Fold = () => {
  const {
    state: {
      initialState: { isContentEditable },
      tagContent: { fold },
    },
    setActualTextContent,
  } = useContext(Context);
  return (
    <section className="fold">
      <article className="fold__content">
        <EditableElement
          isContentEditable={isContentEditable}
          onBlur={setActualTextContent}
          key_name="fold.h1_f_article"
        >
          <h1>{fold.h1_f_article}</h1>
        </EditableElement>
        <EditableElement
          isContentEditable={isContentEditable}
          onBlur={setActualTextContent}
          key_name="fold.p_f_article"
        >
          <p>{fold.p_f_article}</p>
        </EditableElement>
        <EditableElement
          isContentEditable={isContentEditable}
          onBlur={setActualTextContent}
          key_name="fold.btn_f_article"
        >
          <button type="button">{fold.btn_f_article}</button>
        </EditableElement>
      </article>
      <article className="fold__chart">
          <img src={MainScreen} alt="data charts" title="Main data chart"/>
      </article>
    </section>
  );
};
