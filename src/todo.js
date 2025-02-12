import { storeTodo } from './storage';

export default function makeTodo(name, date, desc, projectName) {
  const newTodo = {
    name,
    date,
    desc,
    project: projectName,
  };

  storeTodo(newTodo);

  return newTodo;
}
