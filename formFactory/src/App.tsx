import React, { Suspense } from "react";
import ReactDOM from "react-dom";


const RemoteInput = React.lazy(() => import('inputFactory/Input'));

const RemoteButtpn = React.lazy(() => import('buttonFactory/Button'));

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