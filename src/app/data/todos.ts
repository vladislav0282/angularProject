import { ITodo } from "../models/todo";

export const todos:ITodo[]=[
    {
      id: 1,
      title: "Купить хлеб",
      completed: true,
      date: new Date(),
  },
  {
      id: 2,
      title: "Купить масло",
      completed: false,
      date: new Date(),
  },
  {
      id: 3,
      title: "Купить рыбу",
      completed: false,
      date: new Date(),
  },
  ]