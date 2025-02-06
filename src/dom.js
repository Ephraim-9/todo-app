import makeTodo from './todo';
import makeProj from './project';

export function getFormData() {
  const form = document.getElementById('todo-form');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = form.elements['task-name'].value;
    const date = form.elements['due-date'].value;
    const desc = form.elements['task-desc'].value;
    const proj = form.elements['project-name'].value;

    makeTodo(name, date, desc);
    makeProj(proj);
  });
}

export function renderTodo(todoArr) {
  const todoDiv = document.getElementById('todos');
  todoDiv.innerHTML = '';

  todoArr.forEach((todo) => {
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');
    todoItem.innerHTML = `
            <h3>${todo.name}</h3>
            <p>Due: ${todo.date}</p>
            <p>${todo.desc}</p>
        `;
    todoDiv.appendChild(todoItem);
  });
}
