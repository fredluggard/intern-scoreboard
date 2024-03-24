import React from "react";

function NavBar() {
  const style = [
    {
      color: "black",
      fontSize: "40px",
      margin: "40px auto",
    },
  ];

  return (
    <div className="navbar">
      <h1 style={style[0]}>Learnable Interns' Scoreboard</h1>
    </div>
  );
}

export default NavBar;
