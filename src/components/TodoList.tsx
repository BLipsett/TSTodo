import React from 'react'
import { Todo } from '../todoModel';

interface Props {
  todos: Array<Todo>;
}


const TodoList = ({todos}: Props) => {
  return (
    <div>
      <div>TodoList</div>
      {todos.map((t) => (
      <li>{t.todo}</li>
      ))}
    </div>
  )
}

export default TodoList