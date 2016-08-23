/**
 * Created by jonlazarini on 23/08/16.
 */
import React from 'react';

// Props come from the container
const ToDoItem = ({ content }) =>
  <div>
    <p style={{color: 'black'}}>
      { content }
    </p>
  </div>

export default ToDoItem