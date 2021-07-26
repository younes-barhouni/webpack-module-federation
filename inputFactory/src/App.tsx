import React from "react";
import ReactDOM from "react-dom";
import Input from "./Input";

const App = () => (
  <div>
    <h1> 🚀 magic input!</h1>
    <Input />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));