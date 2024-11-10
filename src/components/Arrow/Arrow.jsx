import React from "react";
import ArrowHead from "./ArrowHead";
import "./Arrow.css";

const Arrow = ({ animatedTops }) => {
  return (
    <svg className="arrows" width="100%" height="100%">
      <defs>
        <ArrowHead />
      </defs>
      <line
        x1="90"
        y1={0}
        x2="220"
        y2={0}
        stroke="#898290"
        strokeWidth="1"
      />
      <line
        x1="240"
        y1={0}
        x2="370"
        y2={0}
        stroke="#898290"
        strokeWidth="1"
      />
      <line
        x1="90"
        y1={0}
        x2="90"
        y2={animatedTops.dev + 65}
        stroke="#898290"
        strokeWidth="1"
        className="vertical"
      />
      <line
        x1="220"
        y1={0}
        x2="220"
        y2={animatedTops.test + 65}
        stroke="#898290"
        strokeWidth="1"
        markerEnd="url(#arrowhead)"
        className="vertical"
      />
      <line
        x1="240"
        y1={0}
        x2="240"
        y2={animatedTops.test + 65}
        stroke="#898290"
        strokeWidth="1"
        className="vertical"
      />
      <line
        x1="370"
        y1={0}
        x2="370"
        y2={animatedTops.prod + 65}
        stroke="#898290"
        strokeWidth="1"
        markerEnd="url(#arrowhead)"
        className="vertical"
      />
    </svg>
  );
};

export default Arrow;
