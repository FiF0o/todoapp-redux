/**
 * Created by jonlazarini on 23/08/16.
 */

export const createToDo = (text) => ({
  type: 'ADD_TO_DO',
  id: Date.now(),
  text,
  completed: false,
})