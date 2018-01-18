import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    };
  }

  toggleImage = () => {
    this.setState({
      show: !this.state.show
    });
  };

  render() {
    let showIMG = this.state.show ? "block" : "none";
    return (
      <div>
        <img
          src={`https://images.webcams.travel/preview/1425411457.jpg`}
          style={{
            display: showIMG,
            margin: "auto",
            width: "80%"
          }}
          alt={"livecam"}
        />
        <button type="button" onClick={this.toggleImage}>
          Click Me
        </button>
      </div>
    );
  }
}

export default App;
