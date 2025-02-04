const todosArr = [
    { name: 'learn react', date: '27 feb', desc: 'somedetails'},
    { name: 'learn react1', date: '28 feb', desc: 'somedetails1'},
    { name: 'learn react2', date: '29 feb', desc: 'somedetails2'}
]

export function storeTodo (todo) {
    localStorage.setItem('todos', JSON.stringify(todosArr));

    const sotoredTodos = localStorage.getItem('todos')
    const sotoredTodosArr = JSON.parse(sotoredTodos);

    console.log(sotoredTodosArr)
}