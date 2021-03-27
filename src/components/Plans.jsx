import React, { useContext } from "react";
import { Context } from "../context/Context";
import EditableElement from "./EditableElement";
export const Plans = () => {
  const {
    state: {
      initialState: { isContentEditable },
      tagContent: { plans },
    },
    setActualTextContent,
  } = useContext(Context);
  return (
    <section className="plans">
      <article className="plans__presentation">
        <EditableElement
          isContentEditable={isContentEditable}
          onBlur={setActualTextContent}
          key_name="plans.h1_presentation"
        >
          <h1 className="plans__title">{plans.h1_presentation}</h1>
        </EditableElement>
        <EditableElement
          isContentEditable={isContentEditable}
          onBlur={setActualTextContent}
          key_name="plans.p_presentation"
        >
          <p className="plans__description">{plans.p_presentation}</p>
        </EditableElement>
      </article>
    </section>
  );
};
