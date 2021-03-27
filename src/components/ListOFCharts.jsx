import React, { useContext } from "react";
import { Context } from "../context/Context";
import EditableElement from "./EditableElement";
import { Chart } from "./Chart";
import chartImg from '../assets/png/chart.png';
import calendar from '../assets/png/calendar.png';
import group from '../assets/png/Group 1.png';

import './styles/ListOfCharts.css';
export const ListOFCharts = () => {
  const {
    state: {
      initialState: { isContentEditable },
      tagContent: { chart },
    },
    setActualTextContent,
  } = useContext(Context);
  return (
    <section className="charts">
      <Chart imgSrc={chartImg} imgAlt="Chart" rowReverse={true}>
        <EditableElement
          isContentEditable={isContentEditable}
          onBlur={setActualTextContent}
          key_name="chart.h1_first"
        >
          <h1 className="chart__title">{chart.h1_first}</h1>
        </EditableElement>
        <EditableElement
          isContentEditable={isContentEditable}
          onBlur={setActualTextContent}
          key_name="chart.p_first"
        >
          <p className="chart__text">{chart.p_first}</p>
        </EditableElement>
      </Chart>
      <Chart imgSrc={group} imgAlt="Bars" rowReverse={false}>
        <EditableElement
          isContentEditable={isContentEditable}
          onBlur={setActualTextContent}
          key_name="chart.h1_second"
        >
          <h1 className="chart__title">{chart.h1_second}</h1>
        </EditableElement>
        <EditableElement
          isContentEditable={isContentEditable}
          onBlur={setActualTextContent}
          key_name="chart.p_second"
        >
          <p className="chart__text">{chart.p_second}</p>
        </EditableElement>
      </Chart>
      <Chart imgSrc={calendar} imgAlt="Bars" rowReverse={true}>
        <EditableElement
          isContentEditable={isContentEditable}
          onBlur={setActualTextContent}
          key_name="chart.h1_third"
        >
          <h1 className="chart__title">{chart.h1_third}</h1>
        </EditableElement>
        <EditableElement
          isContentEditable={isContentEditable}
          onBlur={setActualTextContent}
          key_name="chart.p_third"
        >
          <p className="chart__text">{chart.p_third}</p>
        </EditableElement>
      </Chart>
    </section>
  );
};
