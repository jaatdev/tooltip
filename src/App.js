import React, { Component } from "react";
import "./App.css";
import Button from "./components/Button";
import Tooltip from "./components/Tooltip";

export default class App extends Component {

  // constructor to create state for this class
  constructor() {
    super();
    this.state = {
      direction: "top",
      content: "I'm a tooltip"
    };
  }

  //? function to handle input content for hover by user itself
  handleContentInput = (e) => {
    console.log(e.target.value);
    if (e.target.value.length > 0) {
      this.setState({
        content: e.target.value,
      });
    } else {
      this.setState({
        content: "Tooltip Content",
      });
    }
  };

  //? function to handle direction according to selected option wheather it is top, right, lefet, bottom
  handleDirectionInput = (e) => {
    console.log(e.target.value);
    this.setState({
      direction: e.target.value,
    });
  };
  render() {
    return (
      <div className="App">
      <div className="main">
            {/* Start :For Dynamic tooltip content and direction of tooltip*/}
            <div>
            {/* heading */}
            <h1>Tooltip</h1>
            <div className="form-div">
              <label className="form-label">Tooltip Content</label>
              <input
                type="text"
                className="form-control"
                onKeyUp={this.handleContentInput}
              />
            </div>
            <div className="form-div">
              <label>Direction</label>
              <select
                className="form-select"
                onChange={this.handleDirectionInput}
              >
                <option value="top">Top</option>
                <option value="left">Left</option>
                <option value="right">Right</option>
                <option value="bottom">Bottom</option>
              </select>
            </div>
          </div>
          {/* End :For Dynamic tooltip content and direction of tooltip */}
  
          {/* //? Tooltip has created successfully */}

          {/* //? Binding Content inside tooltip content */}
          <Tooltip content={this.state.content} direction={this.state.direction}>
            {/*//? Button component called */}
            <Button />
          </Tooltip>
      </div>
  
      </div>
    );
  }
}