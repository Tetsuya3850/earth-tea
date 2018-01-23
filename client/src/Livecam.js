import React, { Component } from "react";
import { timeConverter } from "./utils";
import "./livecam.css";

class Livecam extends Component {
  componentDidUpdate() {
    this.slideshow();
  }

  renderLoading() {
    return <div>"Loading..."</div>;
  }

  renderError() {
    return <div>"I'm sorry! Please try again."</div>;
  }

  renderLivecam() {
    let show = this.props.show ? "block" : "none";
    const allLivecams = this.props.livecams.map(livecam => (
      <div key={livecam.title}>
        <img
          style={{ display: show, width: "100%" }}
          src={`https://images.webcams.travel/thumbnail/${livecam.id}.jpg`}
          alt={livecam.title}
        />
        <p style={{ display: show }}>
          {livecam.title} <br /> {timeConverter(livecam.time)}
        </p>
      </div>
    ));

    return (
      <div>
        <figure id="slideshow">{allLivecams}</figure>
      </div>
    );
  }

  slideshow() {
    const imgs = document.getElementById("slideshow").children;
    const interval = 4000;
    let currentPic = 0;
    imgs[currentPic].style.webkitAnimation = "fadey " + interval + "ms";
    imgs[currentPic].style.animation = "fadey " + interval + "ms";
    setInterval(() => {
      imgs[currentPic].removeAttribute("style");
      if (currentPic === imgs.length - 1) {
        currentPic = 0;
      } else {
        currentPic++;
      }
      imgs[currentPic].style.webkitAnimation = "fadey " + interval + "ms";
      imgs[currentPic].style.animation = "fadey " + interval + "ms";
    }, interval);
  }

  render() {
    if (this.props.loading) {
      return this.renderLoading();
    } else if (this.props.livecams) {
      return this.renderLivecam();
    } else {
      return this.renderError();
    }
  }
}

export default Livecam;
