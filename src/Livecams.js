import React, { Component } from "react";
import Client from "./api";

class Livecams extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ids: []
    };
  }

  componentDidMount() {
    Client.liveCamSearch(ids => {
      this.setState({ ids });
    });
  }

  render() {
    const livecams = this.state.ids.map(id => (
      <img
        src={`https://images.webcams.travel/thumbnail/${id}.jpg`}
        key={id}
        alt={"livecam"}
      />
    ));
    return <div>{livecams}</div>;
  }
}

export default Livecams;
