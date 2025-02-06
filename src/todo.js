import { storeTodo } from './storage';

export default function makeTodo(name, date, desc) {
  const newTodo = {
    name,
    date,
    desc,
  };

  madeTodo(newTodo);

  return newTodo;
}

function madeTodo(todo) {
  storeTodo(todo);
  console.log(todo);
}
