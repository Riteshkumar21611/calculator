import { useState } from "react";
import "./App.css";
import style from "./App.module.css";
import ButtonContainer from "./components/ButtonContainer";
import Display from "./components/Display";

function App() {
  const [calValue, setCalvalue] = useState("");
  const getValue = (value) => {
    if (value === "C") {
      setCalvalue("");
    } else if (value === "=") {
      const res = eval(calValue);
      setCalvalue(res);
    } else {
      let newValue = calValue + value;
      setCalvalue(newValue);
    }
  };
  return (
    <div className={` ${style["calculator"]}`}>
      <Display displayValue={calValue} />
      <ButtonContainer buttonClicked={getValue} />
    </div>
  );
}

export default App;
