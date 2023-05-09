import React, { useState } from "react";
import "./styles.css/agregarTarea.css";

export const AgregarTarea = ({ guardarTarea }) => {
  const [texto, settexto] = useState("");

  const manejarSubmit = (e) => {
    e.preventDefault();
    settexto(texto);

    guardarTarea(texto);
    settexto("");
  };

  return (
    <div className="contenedor-formulario">
      <form className="formulario" onSubmit={manejarSubmit} action="">
        <input
          className="input"
          value={texto}
          onChange={(e) => settexto(e.target.value)}
          type="text"
        />
        <button className="boton-submit" type="submit">
          Agregar Tarea
        </button>
      </form>
    </div>
  );
};
