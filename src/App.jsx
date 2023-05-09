import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { AgregarTarea } from "./components/AgregarTarea";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ListaTareas } from "./components/ListaTareas";
import { FcTodoList, FcCustomerSupport } from "react-icons/fc";

export const App = () => {
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

  return (
    <div className="contenedor">
      <header>
        <div className="header">
          <FcCustomerSupport size={40} />
          <h3 className="saludo">Hola!</h3>
        </div>
        <p className="aviso">
          Tienes {tareas.filter((tarea) => tarea.done == false).length}{" "}
          <span>{`${
            tareas.filter((tarea) => tarea.done == false).length == 1
              ? "tarea"
              : "tareas"
          }    `}</span>
          pendientes
        </p>
      </header>
      <div className="usuario">
        <h1>
          Lista de Tareas <FcTodoList size={40} />
        </h1>
      </div>

      <AgregarTarea guardarTarea={guardarTarea} />

      <div className="contenedor-lista-tareas">
        <div>
          <ListaTareas
            completada={false}
            tareas={tareas}
            eliminarTarea={eliminarTarea}
            estadoTarea={estadoTarea}
          />
        </div>

        <div>
          <ListaTareas
            completada={true}
            tareas={tareas}
            eliminarTarea={eliminarTarea}
            estadoTarea={estadoTarea}
          />
        </div>
      </div>
    </div>
  );
};
