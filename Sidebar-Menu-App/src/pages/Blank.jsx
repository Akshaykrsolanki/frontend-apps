import React from "react";

const Blank = () => {
  const pageStyle = {
    flexGrow: 1,
    padding: 0,
    backgroundColor: "#FFB6C1", // Light pink color code
    height: "100vh", // Setting height to 100% of the viewport height
  };

  const divStyle = {
    padding: "55px", // Padding for better visual appearance
  };

  return (
    <div style={pageStyle}>
      <div style={divStyle}>WELCOME</div>
    </div>
  );
};

export default Blank;

