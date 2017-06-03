/**
 * Created by jonlazarini on 23/08/16.
 */
import React from 'react';

const ToDoItem = ({ text, deleteToDo }) => {
  return (
  <p>
    <span>
      { text }
    </span>
    <button onClick={ deleteToDo }>Delete</button>
  </p>
  )
}
// passing down the tdo item (ToDoItem) in the list (listToDo array) and
// ...tdo is destructured to expose all his props and add a new prop
// with the splat operator to be retrieved as props down in the child component
const ToDoList = ({ listToDo, onDeleteToDo, onToggleToDo }) => {
  return (
  <ul>
    {
      listToDo.map((todo) => {
        const params = {
          ...todo,
          deleteToDo: () => onDeleteToDo(todo.id),
        }
        return (
          <li
            key={ todo.id }
            onClick={ () => onToggleToDo(todo.id) }
            style={ {textDecoration: todo.completed ? 'line-through' : 'none'} } >
            <ToDoItem { ...params } />
          </li>
        )
      })
    }
  </ul>
  )
}
export default ToDoList