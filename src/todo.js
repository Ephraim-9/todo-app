import { storeTodo } from './storage';

export default function makeTodo(sentTodo) {
  storeTodo(sentTodo);
}
