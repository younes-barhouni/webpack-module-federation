import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";

const App = () => (
  <div>
    <h1> 🚀 magic button!</h1>
    <Button />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));