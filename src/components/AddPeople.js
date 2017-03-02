/**
 * Created by jonlazarini on 23/08/16.
 */
import React from 'react'

// UI logic rendering is handled in the component not reducer

class AddPeople extends React.Component {
  render() {
    return (
      <div>
        <form action="" onSubmit={ this._submitPeople.bind(this) }>
          <input type="text" ref={ (input) => { this._newPeople = input } }/>
          <button type="submit">search page number</button>
        </form>
      </div>
    )
  }
  _submitPeople(e) {
    e.preventDefault()
    const { onPeopleLoad } = this.props
    const newPeople = this._newPeople.value
    // receives an action creator here e.g. newToDo
    onPeopleLoad(newPeople)
    this._newPeople.value=''
  }
}

export default AddPeople