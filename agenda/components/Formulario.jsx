"use client";

import React from "react";

import { useForm } from "react-hook-form";

const Formulario = ({ tasks, setTasks, setGerarLista }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const createTask = (task) => {
    const [startHour, startMinute] = task.start.split(":");
    const [finishHour, finishMinute] = task.finish.split(":");

    const startTime = new Date();
    const finishTime = new Date();

    startTime.setHours(startHour);
    startTime.setMinutes(startMinute);

    finishTime.setHours(finishHour);
    finishTime.setMinutes(finishMinute);

    const newTask = {
      name: task.name,
      start: startTime,
      end: finishTime,
      weight: Number(task.peso),
    };

    setTasks([...tasks, newTask]);
    reset();
    setGerarLista(false);
  };

  return (
    <div className="p-5 flex flex-col gap-5 border-2 rounded">
      <h2 className="text-2xl">Adicone uma nova tarefa</h2>
      <form
        action=""
        onSubmit={handleSubmit(createTask)}
        className="grid grid-cols-3 gap-5"
      >
        <div className="flex flex-col col-span-3">
          <label htmlFor="name">Nome da tarefa</label>
          <input
            type="text"
            id="name"
            name="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
            {...register("name")}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="start">Horário de início</label>
          <input
            type="time"
            id="start"
            name="start"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
            {...register("start")}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="finish">Horário de termino</label>
          <input
            type="time"
            id="finish"
            name="finish"
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            {...register("finish")}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="finish">Peso da Tarefa</label>
          <input
            type="number"
            id="peso"
            name="peso"
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            {...register("peso")}
          />
        </div>
        <div className="flex justify-center col-span-3">
          <button
            type="submit"
            className="bg-secondary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded uppercase"
          >
            Adiconar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
