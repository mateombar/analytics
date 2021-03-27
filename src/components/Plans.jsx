import React, { useContext } from "react";
import { Context } from "../context/Context";
import EditableElement from "./EditableElement";
import "./styles/Plans.css";
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
      <div className="plans__card">
        <article className="card">
          <EditableElement
            isContentEditable={isContentEditable}
            onBlur={setActualTextContent}
            key_name="plans.h2_title_card_1"
          >
            <h2 className="card__title">{plans.h2_title_card_1}</h2>
          </EditableElement>
          <EditableElement
            isContentEditable={isContentEditable}
            onBlur={setActualTextContent}
            key_name="plans.p_users_card_1"
          >
            <p className="card__users">{plans.p_users_card_1}</p>
          </EditableElement>
          <hr />
          <EditableElement
            isContentEditable={isContentEditable}
            onBlur={setActualTextContent}
            key_name="plans.h1_number_card_1"
          >
            <h1 className="card__number">{plans.h1_number_card_1}</h1>
          </EditableElement>
          <EditableElement
            isContentEditable={isContentEditable}
            onBlur={setActualTextContent}
            key_name="plans.p_number_card_1"
          >
            <p className="card__p-number">{plans.p_number_card_1}</p>
          </EditableElement>
          <EditableElement
            isContentEditable={isContentEditable}
            onBlur={setActualTextContent}
            key_name="plans.btn_card_1"
          >
            <button type="button" className="card__btn">
              {plans.btn_card_1}
            </button>
          </EditableElement>
        </article>
        <article className="card card--white">
          <EditableElement
            isContentEditable={isContentEditable}
            onBlur={setActualTextContent}
            key_name="plans.h2_title_card_2"
          >
            <h2 className="card__title">{plans.h2_title_card_2}</h2>
          </EditableElement>
          <EditableElement
            isContentEditable={isContentEditable}
            onBlur={setActualTextContent}
            key_name="plans.p_users_card_2"
          >
            <p className="card__users">{plans.p_users_card_2}</p>
          </EditableElement>
          <hr />
          <EditableElement
            isContentEditable={isContentEditable}
            onBlur={setActualTextContent}
            key_name="plans.h1_number_card_2"
          >
            <h1 className="card__number">{plans.h1_number_card_2}</h1>
          </EditableElement>
          <EditableElement
            isContentEditable={isContentEditable}
            onBlur={setActualTextContent}
            key_name="plans.p_number_card_2"
          >
            <p className="card__p-number">{plans.p_number_card_2}</p>
          </EditableElement>
          <EditableElement
            isContentEditable={isContentEditable}
            onBlur={setActualTextContent}
            key_name="plans.btn_card_2"
          >
            <button type="button" className="card__btn card__btn--pink">
              {plans.btn_card_2}
            </button>
          </EditableElement>
        </article>
        <article className="card">
          <EditableElement
            isContentEditable={isContentEditable}
            onBlur={setActualTextContent}
            key_name="plans.h2_title_card_3"
          >
            <h2 className="card__title">{plans.h2_title_card_3}</h2>
          </EditableElement>
          <EditableElement
            isContentEditable={isContentEditable}
            onBlur={setActualTextContent}
            key_name="plans.p_users_card_3"
          >
            <p className="card__users">{plans.p_users_card_3}</p>
          </EditableElement>
          <hr />
          <EditableElement
            isContentEditable={isContentEditable}
            onBlur={setActualTextContent}
            key_name="plans.h1_number_card_3"
          >
            <h1 className="card__number">{plans.h1_number_card_3}</h1>
          </EditableElement>
          <EditableElement
            isContentEditable={isContentEditable}
            onBlur={setActualTextContent}
            key_name="plans.p_number_card_3"
          >
            <p className="card__p-number">{plans.p_number_card_3}</p>
          </EditableElement>
          <EditableElement
            isContentEditable={isContentEditable}
            onBlur={setActualTextContent}
            key_name="plans.btn_card_3"
          >
            <button type="button" className="card__btn">
              {plans.btn_card_3}
            </button>
          </EditableElement>
        </article>
      </div>
    </section>
  );
};
