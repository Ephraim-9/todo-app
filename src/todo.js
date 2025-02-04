import { storeTodo } from "./storage"

export default function makeTodo (sentTodo) {
    const todo = {sentTodo}

    storeTodo(todo)
}