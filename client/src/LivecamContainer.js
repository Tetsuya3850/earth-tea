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
  }

  componentDidUpdate() {
    this.slideshow();
    this.flagOnOff();
  }

  slideshow() {
    const imgs = document.getElementById("slideshow").children;
    const interval = 6000;
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

  flagOnOff() {
    setInterval(() => {
      Client.showCam(bool => {
        const container = document.getElementById("container");
        if (bool === true) {
          container.style.display = "block";
        } else {
          container.style.display = "none";
        }
      });
      console.log("fetch");
    }, 10000);
  }

  render() {
    return <Livecam {...this.state} />;
  }
}

export default LivecamContainer;
