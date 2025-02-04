import makeTodo from "./todo";


export function getFormData () {
    const form = document.getElementById('todo-form')

    form.addEventListener('submit', function(event) {

        event.preventDefault();

        const name = form.elements['task-name'].value;
        const date = form.elements['due-date'].value;
        const desc = form.elements['task-desc'].value;

        makeTodo({name, date, desc})
    })
}