import React from 'react'
import { Todo } from '../todoModel'

type Props = {
  todo: Todo,
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({todo, todos, setTodos}: Props) => {
  return (
    <form>
      <span>
        {todo.todo}
      </span>
    </form>
  )
}

export default SingleTodo