import { renderTodo } from './dom';

export function storeTodo(todo) {
  const todosArr = JSON.parse(localStorage.getItem('todos')) || [];
  todosArr.push(todo);

  localStorage.setItem('todos', JSON.stringify(todosArr));

  renderStoredTodos();
}

export function renderStoredTodos() {
  const sotoredTodos = localStorage.getItem('todos');
  const sotoredTodosArr = JSON.parse(sotoredTodos);

  renderTodo(sotoredTodosArr);
}
