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

export function storeProject(project) {
  const projectsArr = JSON.parse(localStorage.getItem('projects')) || [];
  projectsArr.push(project);

  localStorage.setItem('projects', JSON.stringify(projectsArr));

  renderStoredTodos();
}
