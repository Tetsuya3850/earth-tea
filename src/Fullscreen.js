import React, { Component } from "react";
import Client from "./api";
import { timeConverter } from "./utils";

class Fullscreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      loading: true,
      livecam: {}
    };
  }

  componentDidMount() {
    Client.liveCamSearch(livecam => {
      this.setState({ loading: false, livecam });
    }, this.props.match.params.hour);
  }

  renderLoading() {
    return <div>Loading...</div>;
  }

  renderError() {
    return <div>I'm sorry! Please try again.</div>;
  }

  renderLivecam() {
    let showIMG = this.state.show ? "block" : "none";
    const { id, title, time } = this.state.livecam;
    const standardTime = timeConverter(time);
    return (
      <div>
        <img
          src={`https://images.webcams.travel/thumbnail/${id}.jpg`}
          style={{
            display: showIMG,
            margin: "auto",
            width: "100%"
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            left: "40%",
            zIndex: 100
          }}
        >
          <p>{title}</p>
          <p>{standardTime}</p>
        </div>
      </div>
    );
  }

  render() {
    if (this.state.loading) {
      return this.renderLoading();
    } else if (this.state.livecam) {
      return this.renderLivecam();
    } else {
      return this.renderError();
    }
  }
}

export default Fullscreen;
