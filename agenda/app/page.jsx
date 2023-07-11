"use client";

import Agenda from "@components/Agenda";
import Formulario from "@components/Formulario";
import ListaTarefas from "@components/ListaTarefas";
import findMaxWeightedSchedule from "@utils/weightedIntervalScheduling";
import { useEffect, useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [results, setResults] = useState([]);
  const [gerarLista, setGerarLista] = useState(false);

  useEffect(() => {
    const newArray = [...tasks];
    const result = findMaxWeightedSchedule(newArray);
    setResults(result);
  }, [tasks]);

  return (
    <main className="w-screen h-screen text-white flex flex-row justify-center">
      <div className="w-[80%] grid grid-rows-2 grid-cols-2 gap-10 mt-10 mb-10">
        <Formulario
          tasks={tasks}
          setTasks={setTasks}
          setGerarLista={setGerarLista}
        />
        <ListaTarefas
          tasks={tasks}
          setTasks={setTasks}
          setGerarLista={setGerarLista}
        />
        {gerarLista && <Agenda results={results} />}
      </div>
    </main>
  );
}
