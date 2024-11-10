import React , { useState, useEffect } from "react";
import "./NormColumn.css";

const NormColumn = ({ value, maxTotal, maxHeight }) => {
  const [isVisible, setIsVisible] = useState(false);
  const normHeight = value > 0 ? (value / maxTotal) * maxHeight : 0;

  useEffect(() => {
    setIsVisible(value > 0);
  }, [value]);

  return (
    <div className="normColumn">
        <div className={`normColumnBody ${isVisible ? "fadeIn" : "fadeOut"}`} 
          style={{
            height: `${normHeight}px`,
            lineHeight: `${normHeight}px`,
          }}
        ><span className="textChip">{value}</span>
        </div>
      <div className="inscription">
        норматив
      </div>
    </div>
  );
};

export default NormColumn;
