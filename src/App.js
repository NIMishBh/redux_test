import React, { useState } from "react";
import "./styles.css";
import {useSelector, useDispatch} from "react-redux";
import {toggleMode} from "./redux/actions/toggleMode"

export default function App() {
  //const [dark, setMode] = useState(false);
  const Mode = useSelector(state => state.Mode)
  const dispatch = useDispatch();

  return (
    <div className={Mode ? "App dark-mode" : "App"}>
      <div className="nav">
        <label className="switch">
          <input type="checkbox" onChange={() => dispatch(toggleMode())} />
          <span className="slider round"></span>
        </label>
      </div>
      <div className="content">
        <h1> {Mode ? "Gone Dark" : "Lights On"} </h1>
        <p style={{ fontSize: "20px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
}
