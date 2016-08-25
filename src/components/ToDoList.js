/**
 * Created by jonlazarini on 23/08/16.
 */
import React from 'react';
// Props come from the List container, text is an attribute of the tdo
// action creator

// const _removeToDo = () => {
//   const { onDeleteToDo } = this.props
//   const deletedToDo = this._item
//   onDeleteToDo(deletedToDo)
// }

const ToDoItem = ({ text, deleteToDo }) => {
  return (
  <p>
    <span>{ text }</span>
    <button onClick={ deleteToDo }>Delete</button>
  </p>
  )
}
// passing down the tdo item (ToDoItem) in the list (listToDo array) and
// ...tdo is destructured to expose all his props and add a new prop
// with the splat operator to retrieve props
const ToDoList = ({ listToDo, onDeleteToDo }) => {
  return (
  <ul>
    {
      listToDo.map((todo) => {
        const params = {
          ...todo,
          deleteToDo: () => onDeleteToDo()
        }
        return (
          <li
            key={ todo.id } >
            <ToDoItem { ...params } />
          </li>
        )
      })
    }
  </ul>
  )
}
export default ToDoList