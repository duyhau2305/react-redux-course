// CONSTANT
export const ADD_TODO = 'TODO/ADD_TODO';

// actions
export const addTodo = (payload = {}) => {
  return {
    type: ADD_TODO,
    payload
  }
}