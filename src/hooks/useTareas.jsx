import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export const useTareas = () => {
  const [tareas, settareas] = useState([]);

  const guardarTarea = (texto) => {
    if (texto === "") return;
    settareas([...tareas, { id: uuidv4(), name: texto, done: false }]);
  };

  const eliminarTarea = (id) => {
    settareas(tareas.filter((tarea) => tarea.id !== id));
  };

  const estadoTarea = (id) => {
    settareas(
      tareas.map((tarea) =>
        tarea.id == id ? { ...tarea, done: !tarea.done } : tarea
      )
    );
  };

  return {
    guardarTarea,
    eliminarTarea,
    estadoTarea,
    tareas,
  };
};
