"use client";

const ListaTarefas = ({ tasks, setTasks, setGerarLista }) => {
  const deleteTask = (task) => {
    const updatedItems = tasks.filter((item) => item !== task);
    setTasks(updatedItems);
    setGerarLista(false);
  };

  return (
    <div className="p-5 flex flex-col gap-5 border-2 rounded">
      <h2 className="text-2xl">Lista de tarefas</h2>
      <ul className="px-5 grid grid-cols-3 gap-5 overflow-y-scroll">
        {tasks &&
          tasks.map((task, index) => {
            return (
              <li
                key={index}
                className="outline outline-1 p-1 rounded flex justify-between bg-white text-primary"
              >
                <div className="flex flex-col">
                  <span>{task.name}</span>
                  <div className="flex gap-2 flex-wrap">
                    <span>
                      {task.start.toLocaleTimeString(undefined, {
                        hour: "numeric",
                        minute: "numeric",
                        hour12: false,
                      })}
                    </span>
                    <span>-</span>
                    <span>
                      {task.end.toLocaleTimeString(undefined, {
                        hour: "numeric",
                        minute: "numeric",
                        hour12: false,
                      })}
                    </span>
                  </div>
                  <span>Peso: {task.weight}</span>
                </div>
                <div className="flex justify-end flex-wrap">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 cursor-pointer text-red-500"
                    onClick={() => deleteTask(task)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </li>
            );
          })}
      </ul>
      {tasks.length > 0 && (
        <button
          className="bg-secondary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded uppercase"
          onClick={() => setGerarLista(true)}
        >
          Gerar Agenda
        </button>
      )}
    </div>
  );
};

export default ListaTarefas;
