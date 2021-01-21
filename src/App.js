import React from "react";
import "./App.css";

function SecretComponent() {
  return <h1>This information is so Secret, for authorized users only</h1>;
}

function RegularComponent() {
  return <h1>This information is open for public, everyone can see !!!</h1>;
}
function App(props) {
  return <>{props.authorized ? <SecretComponent /> : <RegularComponent />}</>;
}

export default App;
