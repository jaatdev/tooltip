import React, { useState } from "react";
import "../tooltip.css";

const Tooltip = (props) => {
  const [tooltipState, setTooltipState] = useState({
    direction: "my-tooltiptext t-top",
    content: "Hover Content",
  });

  const handleTooltip = () => {
    setTooltipState((prevState) => ({
      ...prevState,
      content: props.content,
      direction: determineDirection(props.direction),
    }));
  };

  const determineDirection = (direction) => {
    switch (direction) {
      case "top":
        return "my-tooltiptext t-top";
      case "right":
        return "my-tooltiptext t-right";
      case "left":
        return "my-tooltiptext t-left";
      default:
        return "my-tooltiptext t-bottom";
    }
  };

  return (
    <div className="my-tooltip" onMouseEnter={handleTooltip}>
      <span className={tooltipState.direction}>{tooltipState.content}</span>
      {props.children}
    </div>
  );
};

export default Tooltip;
