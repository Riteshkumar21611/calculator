import React from "react";
import style from "../components/Display.module.css";

function Display({ displayValue }) {
  return (
    <input
      className={style["display"]}
      type="text"
      value={displayValue}
      readOnly
    />
  );
}

export default Display;
