import React from "react";
import arrowUp from '../../assets/arrowUp.svg';
import arrowDown from '../../assets/arrowDown.svg';
import "./DifferenceChip.css";

const Difference = ({ position, difference, backgroundColor }) => {
  return (
    <div
      className="difference"
      style={{
        left: position,
        backgroundColor: backgroundColor,
      }}
    >
      {difference > 0 && (
        <img src={arrowUp} alt="Arrow Up" className="arrowIcon"/>
      )}
      {difference < 0 && (
        <img src={arrowDown} alt="Arrow Down" className="arrowIcon"/>
      )}
      {difference || 0}
    </div>
  );
};

export default Difference;
