import React, { useContext } from "react";
import { Context } from "../context/Context";
import { Planning } from "./svg/Planning";
import { Speed } from "./svg/Speed";
import { Website } from "./svg/Website";
import "./styles/ListOfFeatures.css";
import EditableElement from "./EditableElement";
export const ListOfFeatures = () => {
  const {
    state: {
      initialState: { isContentEditable },
      tagContent: { feature },
    },
    setActualTextContent,
  } = useContext(Context);
  return (
    <section className="ListOfFeatures">
      <article className="feature feature--large">
        <EditableElement
          isContentEditable={isContentEditable}
          onBlur={setActualTextContent}
          key_name="feature.h1_main"
        >
          <h1 className="feature__title">{feature.h1_main}</h1>
        </EditableElement>
        <EditableElement
          isContentEditable={isContentEditable}
          onBlur={setActualTextContent}
          key_name="feature.p_main"
        >
          <p className="feature__text">{feature.p_main}</p>
        </EditableElement>
      </article>

      <div className="ListOfFeatures__row">
        <article className="feature">
          <Speed iconclass="feature__icon feature__icon--pink" />
          <EditableElement
            isContentEditable={isContentEditable}
            onBlur={setActualTextContent}
            key_name="feature.h4_monitoring"
          >
            <h2 className="feature__title feature__title--small">
              {feature.h4_monitoring}
            </h2>
          </EditableElement>
          <EditableElement
            isContentEditable={isContentEditable}
            onBlur={setActualTextContent}
            key_name="feature.p_monitoring"
          >
            <p className="feature__text">{feature.p_monitoring}</p>
          </EditableElement>
        </article>
        <article className="feature">
          <Planning iconclass="feature__icon feature__icon--pink" />
          <EditableElement
            isContentEditable={isContentEditable}
            onBlur={setActualTextContent}
            key_name="feature.h4_widget"
          >
            <h2 className="feature__title feature__title--small">
              {feature.h4_widget}
            </h2>
          </EditableElement>
          <EditableElement
            isContentEditable={isContentEditable}
            onBlur={setActualTextContent}
            key_name="feature.p_widget"
          >
            <p className="feature__text">{feature.p_widget}</p>
          </EditableElement>
        </article>
        <article className="feature">
          <Website iconclass="feature__icon feature__icon--pink" />
          <EditableElement
            isContentEditable={isContentEditable}
            onBlur={setActualTextContent}
            key_name="feature.h4_performance"
          >
            <h2 className="feature__title feature__title--small">
              {feature.h4_performance}
            </h2>
          </EditableElement>
          <EditableElement
            isContentEditable={isContentEditable}
            onBlur={setActualTextContent}
            key_name="feature.p_performance"
          >
            <p className="feature__text">{feature.p_performance}</p>
          </EditableElement>
        </article>
      </div>
    </section>
  );
};
