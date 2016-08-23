/**
 * Created by jonlazarini on 23/08/16.
 */
import React from 'react'

class ToDoText extends React.Component {
  render() {
    return (
      <div>
        <form action="" onSubmit={ this._submitToDo.bind(this) }>
          <input type="text" ref={ (input) => this._toDoItem = input }/>
          <button type="submit">Search</button>
        </form>
      </div>
    )
  }
  _submitToDo(e) {
    e.preventDefault()
    const { onUserSubmit } = this.props
    const newToDo = this._toDoItem.value
    onUserSubmit(newToDo)
    this._toDoItem.value=''
  }
}

export default ToDoText