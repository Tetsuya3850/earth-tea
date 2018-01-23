import React, { Component } from "react";
import Client from "./api";
import Livecam from "./Livecam";

class LivecamContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      show: true
    };
  }

  componentDidMount() {
    Client.liveCamSearch(livecams => {
      this.setState({ loading: false, livecams });
    }, this.props.match.params.hour);
    /*
    Client.showCam(bool => {
      this.setState({ show: bool });
    });

    setInterval(() => {
      Client.showCam(bool => {
        this.setState({ show: bool });
      });
      console.log("fetch");
    }, 10000);
    */
  }

  render() {
    return <Livecam {...this.state} />;
  }
}

export default LivecamContainer;
