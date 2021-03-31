import React from 'react'

interface Todo {
    text: string,
    complete: boolean
}

interface Props {
    todo: Todo
}

const TodoListItem: React.FC<Props> = (props) => {
    return (
        <li>
          <label
            style={{ textDecoration: todo.complete ? 'line-through' : undefined }}
          >
            <input type="checkbox" checked={todo.complete} /> {todo.text}
          </label>
        </li>
      );
}