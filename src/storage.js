const todosArr = []

export function storeTodo (todo) {
    todosArr.push(todo)

    localStorage.setItem('todos', JSON.stringify(todosArr));

    const sotoredTodos = localStorage.getItem('todos')
    const sotoredTodosArr = JSON.parse(sotoredTodos);

    console.log(sotoredTodosArr)
}