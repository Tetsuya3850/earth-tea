import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Fullscreen from "./Fullscreen";
import Livecams from "./Livecams";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/fullscreen" component={Fullscreen} />
          <Route path="/livecams" component={Livecams} />
        </Switch>
      </div>
    );
  }
}

export default App;
