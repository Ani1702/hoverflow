import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MenuBar from "./MenuBar";
import Chatbox from "./Chatbox";

function App() {
  return (
    <>
      <MenuBar></MenuBar>
      <Chatbox></Chatbox>
    </>
  );
}

export default App;
