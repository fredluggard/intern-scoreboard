import React, { useState } from "react";
import { interns } from "./data";
import "../score.css";

function Scoreboard() {
  // I used this for quick styling for my rendered components
  const style = [
    {
      id: "0",
      width: "60px",
      height: "60px",
      borderRadius: "50%",
    },
    {
      id: "1",
      position: "relative",
      right: "0",
      margin: "10px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "20px",
    },
    {
      id: "2",
      margin: "20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "20px",
    },
    {
      id: "3",
      fontSize: "20px",
      fontWeight: "bolder",
      width: "200px",
    },
  ];

  // This state and function is used to control the toggling of highlighted buttons for different learnable tracks when clicked
  const [selectedButton, setSelectedButton] = useState(null);
  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId === selectedButton ? null : buttonId);
  };

  // I sorted the interns here from the person with the highest grade to the lowest for easy ranking
  const MainInterns = interns.sort(
    (a, b) => parseInt(b.grade) - parseInt(a.grade)
  );

  // This functions renders the display for the track passed in when called
  const renderDisplay = (internsToShow) => {
    return internsToShow.map((intern, index) => (
      <div style={style[1]} key={index}>
        <p style={style[3]}>{index + 1}.</p>
        <img src={intern.img} style={style[0]} alt="" />
        <p style={style[3]}>{intern.name}</p>
        <p style={style[3]}>{intern.track}</p>
        <p style={style[3]}>{intern.grade}%</p>
      </div>
    ));
  };

  return (
    <div style={style[2]}>
      {/* This div contains all the buttons to click to see different tracks of Learnable interns */}
      <div className="rating-count">
        <button
          onClick={() => handleButtonClick(1)}
          className={
            selectedButton === 1 ? "selected count_hover" : "count count_hover"
          }
        >
          All
        </button>
        <button
          onClick={() => handleButtonClick(2)}
          className={
            selectedButton === 2 ? "selected count_hover" : "count count_hover"
          }
        >
          Frontend
        </button>
        <button
          onClick={() => handleButtonClick(3)}
          className={
            selectedButton === 3 ? "selected count_hover" : "count count_hover"
          }
        >
          Backend
        </button>
        <button
          onClick={() => handleButtonClick(4)}
          className={
            selectedButton === 4 ? "selected count_hover" : "count count_hover"
          }
        >
          Product Design
        </button>
        <button
          onClick={() => handleButtonClick(5)}
          className={
            selectedButton === 5 ? "selected count_hover" : "count count_hover"
          }
        >
          Web 3
        </button>
      </div>

      {/* This shows a list of all interns on Learnable from the person with the highest score to the person with the lowest  */}
      {selectedButton === null && renderDisplay(MainInterns)}

      {/* This shows all the interns on learnable when the all button is clicked */}
      {selectedButton === 1 && renderDisplay(MainInterns)}

      {/* This shows all the Frontend interns on Learnable when the Frontend button is clicked */}
      {selectedButton === 2 &&
        renderDisplay(
          MainInterns.filter((intern) => intern.track === "Frontend")
        )}

      {/* This shows all the Backend interns on Learnable when the Backend button is clicked */}
      {selectedButton === 3 &&
        renderDisplay(
          MainInterns.filter((intern) => intern.track === "Backend")
        )}

      {/* This shows all the Product Design interns on Learnable when the Product Design button is clicked */}
      {selectedButton === 4 &&
        renderDisplay(
          MainInterns.filter((intern) => intern.track === "Product Design")
        )}

      {/* This shows all the Web 3 interns on Learnable when the Web 3 button is clicked */}
      {selectedButton === 5 &&
        renderDisplay(MainInterns.filter((intern) => intern.track === "Web 3"))}
    </div>
  );
}

export default Scoreboard;
