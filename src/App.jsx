import React, { useContext } from "react";
import { Context } from "./context/Context";
import { keyDownEvent } from "./utils/keyDownEvent";
import { Fold } from "./components/Fold";
import { Navbar } from "./components/Navbar";
import "./App.css";

function App() {
  const { state, activeContentEditable } = useContext(Context);
  const isState = Object.keys(state).length > 0 ? true : false;
  if (isState) {
    keyDownEvent(activeContentEditable);
  }
  if (!isState) return <h1>Loading.......</h1>;
  return (
    <>
      <Navbar></Navbar>
      <Fold></Fold>
      <main></main>
    </>
  );
}

export default App;
