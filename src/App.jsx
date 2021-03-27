import React, { useContext, useEffect } from "react";
import { Context } from "./context/Context";
import { keyDownEvent } from "./utils/keyDownEvent";
import { Fold } from "./components/Fold";
import { Navbar } from "./components/Navbar";
import { EditableTools } from "./components/EditableTools";
import { ListOfFeatures } from "./components/ListOfFeatures";
import { ListOFCharts } from "./components/ListOFCharts";
import "./App.css";

function App() {
  const { state, activeContentEditable } = useContext(Context);
  const isState = Object.keys(state).length > 0 ? true : false;

  useEffect(() => {
    if (isState) {
      keyDownEvent(activeContentEditable);
    }
  }, [isState]);

  if (!isState) return <h1>Loading.......</h1>;
  return (
    <>
      <div className="top">
        <Navbar></Navbar>
        <EditableTools />
        <Fold></Fold>
      </div>
      <main>
        <ListOfFeatures />
        <ListOFCharts/>
      </main>
    </>
  );
}

export default App;
