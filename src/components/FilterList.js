/**
 * Created by jonlazarini on 27/08/16.
 */
import React from 'react'

//'SHOW_ALL' is the attribute passed down in the actionCreator as filterName

const FilterList = ({ onFilter, currentFilter }) => {
  return (
    <div>
      <button className={ currentFilter === 'SHOW_ALL' ? 'current' : '' } onClick={ () => onFilter('SHOW_ALL') }>SHOW_ALL</button>
      <button className={ currentFilter === 'SHOW_COMPLETED' ? 'current' : '' } onClick={ () => onFilter('SHOW_COMPLETED') }>SHOW_COMPLETED</button>
      <button className={ currentFilter === 'SHOW_ACTIVE' ? 'current' : '' } onClick={ () => onFilter('SHOW_ACTIVE') }>SHOW_ACTIVE</button>
    </div>
  )
}

export default FilterList