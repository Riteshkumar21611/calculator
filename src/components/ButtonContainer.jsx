import React from "react";
import style from "../components/ButtonConatiner.module.css";

function ButtonContainer({ buttonClicked }) {
  const calculatorButtons = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={style["buttonContainer"]}>
      {calculatorButtons.map((item) => (
        <button
          key={item}
          className={style["button"]}
          onClick={() => buttonClicked(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default ButtonContainer;
