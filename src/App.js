import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Fullscreen from "./Fullscreen";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/fullscreen/:hour" component={Fullscreen} />
        </Switch>
      </div>
    );
  }
}

export default App;
