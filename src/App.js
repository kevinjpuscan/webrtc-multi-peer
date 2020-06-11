import React from "react";
import Start from "./pages/start";
import Meet from "./pages/meet";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/meet/:roomid" component={Meet} />
          <Route path="/" component={Start} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
