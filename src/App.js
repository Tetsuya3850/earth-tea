import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Fullscreen from "./Fullscreen";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/fullscreen" component={Fullscreen} />
        </Switch>
      </div>
    );
  }
}

export default App;
