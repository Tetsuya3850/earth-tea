import React, { Component } from "react";
import Client from "./api";
import Livecam from "./Livecam";

class LivecamContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      loading: true
    };
  }

  componentDidMount() {
    Client.liveCamSearch(livecam => {
      this.setState({ loading: false, livecam });
    }, this.props.match.params.hour);
  }

  render() {
    return <Livecam {...this.state} />;
  }
}

export default LivecamContainer;
