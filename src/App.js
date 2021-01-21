import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [emotion, setEmotion] = useState("happy :)");
  const [secondary, setSecondary] = useState("tired *)");

  useEffect(() => {
    console.log(`It's ${emotion} around here!!!`);
  }, [emotion]);

  useEffect(() => {
    console.log(`It's ${secondary} around here!!!`);
  }, [secondary]);

  return (
    <>
      <h1>
        Hello!!! I am currently {emotion} and {secondary} !!!
      </h1>
      <button onClick={() => setEmotion("happy :)")}>Happy</button>
      <button onClick={() => setSecondary("tired *)")}>Tired</button>
      <button onClick={() => setEmotion("frustrated (:")}>Frustrate</button>
      <button onClick={() => setSecondary("crabby (V)")}>Crabby</button>
      <button onClick={() => setEmotion("sad ;)")}>Sad</button>
      <button onClick={() => setSecondary("weak (%)")}>Weak</button>
      <button onClick={() => setEmotion("surprised ;)")}>Surprised</button>
    </>
  );
}

export default App;
