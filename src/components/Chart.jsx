import React from "react";
export const Chart = ({ children, imgSrc, imgAlt, rowReverse }) => {
  return (
    <article className={rowReverse ? "chart chart--revert" : "chart"}>
      <div className="chart__image">
        <img src={imgSrc} alt={imgAlt} />
      </div>
      <div className="chart__content">{children}</div>
    </article>
  );
};
