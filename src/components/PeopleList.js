/**
 * Created by jonlazarini on 05/09/16.
 */
import React from 'react'


const People = ({ avatar, first_name, last_name }) => {
  return (
    <div>
      <img source={ avatar }/>
      <p>{ first_name }</p>
      <p>{ last_name }</p>
    </div>

  )
}

const PeopleList = ({ peopleList}) => {
  return (
    <ul>
      {
        peopleList.map((people) => {
          const params = {
            ...people
          }
          return (
            <li
            key={ people.id }>
              <People { ...params } />
            </li>
          )
        })
      }
    </ul>
  )
}

export default PeopleList