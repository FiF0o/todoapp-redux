/**
 * Created by jonlazarini on 05/09/16.
 */
import React from 'react'

const People = ({ avatar, first_name, last_name }) => {
  return (
    <div>
      <img src={ avatar } alt=""/>
      <p>{ first_name }</p>
      <p>{ last_name }</p>
    </div>
  )
}

const PeopleList = ({ peopleList, onLoadPeople }) => (
    <div>
      <ul>
        {
          peopleList.map((person) => {
            const params = {
              ...person
            }
            return (
              <li key={ person.id }>
                <People {...params} />
              </li>
            )
          })
        }
      </ul>
    </div>
  )

export default PeopleList