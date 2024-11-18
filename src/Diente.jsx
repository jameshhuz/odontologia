import React, { useState } from "react";
import "./Diente.css";

const Diente = () => {
  const [selectedAreas, setSelectedAreas] = useState({
    centerTopLeft: false,
    centerTopRight: false,
    centerBottomLeft: false,
    centerBottomRight: false,
    top: false,
    bottom: false,
    left: false,
    right: false,
  });

  const toggleSelection = (area) => {
    setSelectedAreas((prevState) => ({
      ...prevState,
      [area]: !prevState[area],
    }));
  };

  return (
    <div className="diente">
      <div
        className={`rectangulo top ${selectedAreas.top ? "selected" : ""}`}
        onClick={() => toggleSelection("top")}
      />
      <div
        className={`rectangulo bottom ${
          selectedAreas.bottom ? "selected" : ""
        }`}
        onClick={() => toggleSelection("bottom")}
      />
      <div
        className={`rectangulo left ${selectedAreas.left ? "selected" : ""}`}
        onClick={() => toggleSelection("left")}
      />
      <div
        className={`rectangulo right ${selectedAreas.right ? "selected" : ""}`}
        onClick={() => toggleSelection("right")}
      />

      <div
        className={`cuadrado top-left ${
          selectedAreas.centerTopLeft ? "selected" : ""
        }`}
        onClick={() => toggleSelection("centerTopLeft")}
      />
      <div
        className={`cuadrado top-right ${
          selectedAreas.centerTopRight ? "selected" : ""
        }`}
        onClick={() => toggleSelection("centerTopRight")}
      />
      <div
        className={`cuadrado bottom-left ${
          selectedAreas.centerBottomLeft ? "selected" : ""
        }`}
        onClick={() => toggleSelection("centerBottomLeft")}
      />
      <div
        className={`cuadrado bottom-right ${
          selectedAreas.centerBottomRight ? "selected" : ""
        }`}
        onClick={() => toggleSelection("centerBottomRight")}
      />
    </div>
  );
};

export default Diente;
