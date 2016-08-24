/**
 * Created by jonlazarini on 23/08/16.
 */
import React from 'react';
// Props come from the List container, text is an attribute of the tdo
// action creator
const ToDoItem = ({ text }) =>
    <li>
      <span>{ text }</span>
    </li>

// passing down the tdo item (ToDoItem) in the list and ...tdo is destructured
// with the splat operator to retrieve props
const ToDoList = ({ listToDo }) =>
  <div>
    {
      listToDo.map((todo) => {
        return (
          <ul key={todo.id} >
            <ToDoItem completed={ false } { ...todo } />
          </ul>
        )
      })
    }
  </div>

export default ToDoList