import React, { useState, useReducer } from "react";
import "./App.css";

function App() {
  const [checked, setChecked] = useState(false);
  const [newChecked, newToggle] = useReducer(
    (newChecked) => !newChecked,
    false
  );

  function toggle() {
    setChecked((checked) => !checked);
  }

  return (
    <>
      <input type="checkbox" value={checked} onChange={toggle} />
      {checked ? "checked" : "not checked"}
      <input type="checkbox" value={newChecked} onChange={newToggle} />
      {newChecked ? "checked" : "not checked"}
    </>
  );
}

export default App;
