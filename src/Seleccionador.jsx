import React, { useState, useEffect } from "react";
import "./Seleccionador.css";

const Seleccionador = () => {
  const [figuraSeleccionada, setFiguraSeleccionada] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleSelectChange = (event) => {
    setFiguraSeleccionada(event.target.value);
    setPosition({ x: 0, y: 0 }); // Reiniciar posición al cambiar de figura
  };

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setOffset({
      x: event.clientX - position.x,
      y: event.clientY - position.y,
    });
  };

  const handleMouseMove = (event) => {
    if (isDragging) {
      setPosition({
        x: event.clientX - offset.x,
        y: event.clientY - offset.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div className="seleccionador">
      <label htmlFor="figura-select">Selecciona una figura:</label>
      <select id="figura-select" onChange={handleSelectChange}>
        <option value="">-- Selecciona una opción --</option>
        <option value="circulo">Círculo</option>
        <option value="triangulo">Triángulo</option>
        <option value="rectangulo-1">Rectángulo</option>
      </select>

      {figuraSeleccionada && (
        <div
          className={`figura ${figuraSeleccionada}`}
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
          }}
          onMouseDown={handleMouseDown}
        ></div>
      )}
    </div>
  );
};

export default Seleccionador;
