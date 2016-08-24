/**
 * Created by jonlazarini on 23/08/16.
 */
import React from 'react'

// UI logic rendering is handled in the component not reducer

class AddToDo extends React.Component {
  render() {
    return (
      <div>
        <form action="" onSubmit={ this._submitToDo.bind(this) }>
          <input type="text" ref={ (input) => { this._toDoItem = input } }/>
          <button type="submit">add</button>
        </form>
      </div>
    )
  }
  _submitToDo(e) {
    e.preventDefault()
    const { onUserSubmit } = this.props
    const newToDo = this._toDoItem.value
    // receives an action creator here e.g. newToDo
    onUserSubmit(newToDo)
    this._toDoItem.value=''
  }
}

export default AddToDo