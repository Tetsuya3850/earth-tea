import React, { Component } from "react";
import { timeConverter } from "./utils";
import "./livecam.css";

class Livecam extends Component {
  renderLoading() {
    return <div>Loading...</div>;
  }

  renderError() {
    return <div>I'm sorry! Please try again.</div>;
  }

  renderLivecam() {
    let showIMG = this.props.show ? "block" : "none";
    const { id, title, time } = this.props.livecam;
    const standardTime = timeConverter(time);
    return (
      <div className="fadeI">
        <img
          src={`https://images.webcams.travel/thumbnail/${id}.jpg`}
          style={{
            display: showIMG,
            margin: "auto",
            width: "100%"
          }}
          alt={title}
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
    if (this.props.loading) {
      return this.renderLoading();
    } else if (this.props.livecam) {
      return this.renderLivecam();
    } else {
      return this.renderError();
    }
  }
}

export default Livecam;
