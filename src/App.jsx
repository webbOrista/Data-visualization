import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Explanation from "./components/Explanation/Explanation";
import { fetchDataSet } from "./Api";
import Graph from "./components/Graph/Graph";
import Button from "./components/Button/Button"
import "./App.css";

function App() {
  const [fileNumber, setFileNumber] = useState(1);
  const [data, setData] = useState(null);
  
  const maxHeight = 265;

  useEffect(() => {
    const loadData = async () => {
      const result = await fetchDataSet(fileNumber);
      setData(result);
    };
    loadData();
  }, [fileNumber]);

  const handleButtonClick = () => {
    const nextFileNumber = (fileNumber % 5) + 1;
    setFileNumber(nextFileNumber);
  };

  return (
    <div className="appWrapper">
      {data && (
        <>
        <Header title={data.title} />
        <div className="content">
          <Graph data={data} maxHeight={maxHeight} />
          <Explanation />
          <Button onClick={handleButtonClick} text={"К следующему отчету"}/>
        </div>
        </>
      )}
    </div>
  );
}

export default App;
