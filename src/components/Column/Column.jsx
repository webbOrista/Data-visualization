import React, { useState, useEffect } from "react";
import "./Column.css";

const Column = ({ label, data, maxTotal, maxHeight }) => {
  const [isVisible, setIsVisible] = useState({
    front: false,
    back: false,
    db: false,
  });

  const calculateHeights = (instanceData) => {
    const total = instanceData.front + instanceData.back + instanceData.db;
    const scaleFactor = total / maxTotal;
    return {
      front: total
        ? (instanceData.front / total) * (maxHeight * scaleFactor)
        : 0,
      back: total ? (instanceData.back / total) * (maxHeight * scaleFactor) : 0,
      db: total ? (instanceData.db / total) * (maxHeight * scaleFactor) : 0,
    };
  };

  const heights = calculateHeights(data);

  useEffect(() => {
    setIsVisible({
      front: heights.front > 0,
      back: heights.back > 0,
      db: heights.db > 0,
    });
  }, [heights.front, heights.back, heights.db]);

  return (
    <div className="column">
      <div
        className={`segment frontSegment ${
          isVisible.front ? "fadeIn" : "fadeOut"
        }`}
        style={{
          height: `${heights.front}px`,
          lineHeight: `${heights.front}px`,
        }}
      >
        {data.front}
      </div>
      <div
        className={`segment backSegment ${
          isVisible.back ? "fadeIn" : "fadeOut"
        }`}
        style={{
          height: `${heights.back}px`,
          lineHeight: `${heights.back}px`,
        }}
      >
        {data.back}
      </div>
      <div
        className={`segment dbSegment ${isVisible.db ? "fadeIn" : "fadeOut"}`}
        style={{
          height: `${heights.db}px`,
          lineHeight: `${heights.db}px`,
        }}
      >
        {data.db}
      </div>
      <div className="inscription">{label}</div>
    </div>
  );
};

export default Column;
