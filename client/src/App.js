import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import LivecamContainer from "./LivecamContainer";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/livecams/:hour" component={LivecamContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
