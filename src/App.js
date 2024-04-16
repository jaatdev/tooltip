import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Tooltip from "./components/Tooltip";

const App = () => {
  const [tooltipState, setTooltipState] = useState({
    direction: "top",
    content: "I'm a tooltip",
  });

  const handleContentInput = (e) => {
    const content =
      e.target.value.length > 0 ? e.target.value : "Tooltip Content";
    setTooltipState((prevState) => ({
      ...prevState,
      content,
    }));
  };

  const handleDirectionInput = (e) => {
    const direction = e.target.value;
    setTooltipState((prevState) => ({
      ...prevState,
      direction,
    }));
  };

  return (
    <div className="App">
      <div className="main">
        <h1>Tooltip</h1>
        <div className="form-div">
          <label className="form-label">Tooltip Content</label>
          <input
            type="text"
            className="form-control"
            onKeyUp={handleContentInput}
          />
        </div>
        <div className="form-div">
          <label>Direction</label>
          <select className="form-select" onChange={handleDirectionInput}>
            <option value="top">Top</option>
            <option value="left">Left</option>
            <option value="right">Right</option>
            <option value="bottom">Bottom</option>
          </select>
        </div>
        <Tooltip
          content={tooltipState.content}
          direction={tooltipState.direction}
        >
          <Button />
        </Tooltip>
      </div>
    </div>
  );
};

export default App;
