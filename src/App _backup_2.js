import "./App.css";
import React, { useState } from "react";

function App() {
  let [a, updateValue] = useState(100);

  return(
    <>
    {a} <br/>
    <button onClick={() => {
        updateValue(200);
    }}> Send </button>
    <input type="text"  value={a}  onChange={(e) => {
        updateValue(e.target.value)
    }}/>
    </>
  )
}


export default App;
