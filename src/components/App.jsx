import React from "react";
import Form from "./Form";

var userIsRegistered = true;

function App() {
  return (
    <div className="container">
      <div>
        <Form IsRegistered={userIsRegistered} />
      </div>
    </div>
  );
}

export default App;
