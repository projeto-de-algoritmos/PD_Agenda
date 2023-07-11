import React from "react";

const Agenda = ({ results }) => {
  return (
    <div className="col-span-2 p-5 flex flex-col gap-5 border-2 rounded">
      <h2 className="text-2xl">Sugestão de agenda</h2>
      <div className="flex flex-col gap-3">
        <span>Tarefas</span>
        <ul className="flex gap-3">
          {results.intervals &&
            results.intervals.map((task, indexTask) => {
              return (
                <li
                  key={indexTask}
                  className="outline outline-1 py-2 px-4 rounded"
                >
                  {task.name}
                </li>
              );
            })}
        </ul>
      </div>
      <div className="flex flex-col gap-3">
        <span>Peso total</span>
        <span className="text-2xl font-bold outline outline-1 py-2 px-4 rounded w-fit bg-tertiary">
          {results.maxWeight}
        </span>
      </div>
    </div>
  );
};

export default Agenda;
