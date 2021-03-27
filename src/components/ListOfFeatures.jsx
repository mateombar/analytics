import React, { useContext } from "react";
import { Context } from "../context/Context";
import { Feature } from "./Feature";
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
      <Feature>
        <article className="feature pink">
          <EditableElement
            isContentEditable={isContentEditable}
            onBlur={setActualTextContent}
            key_name="feature.h1_main"
          >
            <h1>{feature.h1_main}</h1>
          </EditableElement>
          <EditableElement
            isContentEditable={isContentEditable}
            onBlur={setActualTextContent}
            key_name="feature.p_main"
          >
            <p>{feature.p_main}</p>
          </EditableElement>
        </article>
      </Feature>
      <Feature>
        <article className="feature">
          <Speed classProp="feature__icon pink" />
          <EditableElement
            isContentEditable={isContentEditable}
            onBlur={setActualTextContent}
            key_name="feature.h4_monitoring"
          >
            <h1>{feature.h4_monitoring}</h1>
          </EditableElement>
          <EditableElement
            isContentEditable={isContentEditable}
            onBlur={setActualTextContent}
            key_name="feature.p_monitoring"
          >
            <p>{feature.p_monitoring}</p>
          </EditableElement>
        </article>
      </Feature>
      <Feature>
        <article className="feature pink">
          <Planning classProp="feature__icon pink" />
          <EditableElement
            isContentEditable={isContentEditable}
            onBlur={setActualTextContent}
            key_name="feature.h4_widget"
          >
            <h1>{feature.h4_widget}</h1>
          </EditableElement>
          <EditableElement
            isContentEditable={isContentEditable}
            onBlur={setActualTextContent}
            key_name="feature.p_widget"
          >
            <p>{feature.p_widget}</p>
          </EditableElement>
        </article>
      </Feature>
      <Feature>
        <article className="feature pink">
          <Website classProp="feature__icon pink" />
          <EditableElement
            isContentEditable={isContentEditable}
            onBlur={setActualTextContent}
            key_name="feature.h4_performance"
          >
            <h1>{feature.h4_performance}</h1>
          </EditableElement>
          <EditableElement
            isContentEditable={isContentEditable}
            onBlur={setActualTextContent}
            key_name="feature.p_performance"
          >
            <p>{feature.p_performance}</p>
          </EditableElement>
        </article>
      </Feature>
    </section>
  );
};
