import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";

// remote input
const RemoteInput = lazy(() => import('inputFactory/Input'));
// remote button
const RemoteButtpn = lazy(() => import('buttonFactory/Button'));

// Host Application
const App = () => (
  <div>
    <h1> 🚀 magic Form!</h1>

    <Suspense fallback='loading...'>
      <RemoteInput />
      <br/>
      <RemoteButtpn />
    </Suspense>
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));