import "./Explanation.css";

const  Explanation = () => {
  return (
    <div className="explanation">
      <div className="colorContainer">
        <div className="colorSample front"></div>
        <div className="colorDescription">Клиентская часть</div>
      </div>
      <div className="colorContainer">
        <div className="colorSample back"></div>
        <div className="colorDescription">Серверная часть</div>
      </div>
      <div className="colorContainer">
        <div className="colorSample dataBase"></div>
        <div className="colorDescription">База данных</div>
      </div>
    </div>
  );
}

export default Explanation;


