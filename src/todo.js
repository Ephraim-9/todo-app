import { storeTodo } from "./storage"

export default function makeTodo (name, date, desc) {
    const todo = {name, date, desc}

    storeTodo(todo)
}