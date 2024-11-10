import React, { useEffect, useState } from "react";
import Column from "../Column/Column";
import NormColumn from "../NormColumn/NormColumn";
import "./Graph.css";
import Arrows from "../Arrow/Arrow";
import DifferenceChip from "../DifferenceChip/DifferenceChip";

const Graph = ({ data, maxHeight }) => {
  const [differences, setDifferences] = useState([]);
  const [columnTops, setColumnTops] = useState({ dev: 0, test: 0, prod: 0 });
  const [animatedTops, setAnimatedTops] = useState({
    dev: 0,
    test: 0,
    prod: 0,
  });

  const maxDevTotal = data.dev.front + data.dev.back + data.dev.db;
  const maxTestTotal = data.test.front + data.test.back + data.test.db;
  const maxProdTotal = data.prod.front + data.prod.back + data.prod.db;
  const maxNormTotal = data.norm;

  const maxTotal = Math.max(
    maxDevTotal,
    maxTestTotal,
    maxProdTotal,
    maxNormTotal
  );

  const sums = [maxDevTotal, maxTestTotal, maxProdTotal];

  useEffect(() => {
    const diffs = [sums[1] - sums[0], sums[2] - sums[1]];

    const formattedDiffs = diffs.map((diff) =>
      diff > 0 ? `+${diff}` : `${diff}`
    );

    setDifferences(formattedDiffs);
  }, [data]);

  useEffect(() => {
    const calculateTop = (total) =>
      maxTotal > 0 && !isNaN(total)
        ? maxHeight - (total / maxTotal) * maxHeight
        : 0;
    setColumnTops({
      dev: calculateTop(maxDevTotal),
      test: calculateTop(maxTestTotal),
      prod: calculateTop(maxProdTotal),
    });
  }, [data, maxHeight, maxTotal]);

  useEffect(() => {
    let animationFrame;
    const duration = 700;
    const startTime = performance.now();
    const initialTops = { ...animatedTops };

    const animate = (time) => {
      const elapsedTime = time - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      setAnimatedTops({
        dev: initialTops.dev + (columnTops.dev - initialTops.dev) * progress,
        test:
          initialTops.test + (columnTops.test - initialTops.test) * progress,
        prod:
          initialTops.prod + (columnTops.prod - initialTops.prod) * progress,
      });

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [columnTops]);

  const getBackgroundColor = (difference) => {
    if (difference > 0) return "var(--increase-color)";
    if (difference < 0) return "var(--decrease-color)";
    return "var(--main-text-color)";
  };

  return (
    <div
      className="graph"
      style={{
        height: `${maxHeight + 100}px`,
      }}
    >
      <Column
        label="dev"
        data={data.dev}
        maxTotal={maxTotal}
        maxHeight={maxHeight}
      />
      <Column
        label="test"
        data={data.test}
        maxTotal={maxTotal}
        maxHeight={maxHeight}
      />
      <Column
        label="prod"
        data={data.prod}
        maxTotal={maxTotal}
        maxHeight={maxHeight}
      />
      <NormColumn value={data.norm} maxTotal={maxTotal} maxHeight={maxHeight} />

      {maxTotal !== 0 && (
        <>
          <Arrows animatedTops={animatedTops} />

          <DifferenceChip
            position="155px"
            difference={differences[0]}
            backgroundColor={getBackgroundColor(differences[0])}
          />

          <DifferenceChip
            position="305px"
            difference={differences[1]}
            backgroundColor={getBackgroundColor(differences[1])}
          />
        </>
      )}
    </div>
  );
};

export default Graph;
