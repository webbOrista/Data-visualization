import "./Button.css";

const Button = ({ onClick, text }) => {
  return (
    <button className="nextReportButton" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
