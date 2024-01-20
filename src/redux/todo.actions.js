// CONSTANT
export const ADD_TODO = 'TODO/ADD_TODO';
export const  DELETE_TODO = 'TODO/DELETE_TODO'
// actions
export const addTodo = (payload = {}) => {
  return {
    type: ADD_TODO,
    payload
  }
}
export const delTodo = (payload)=>{
  return {
    type: DELETE_TODO,
    payload
  }
}


export const asyncAddTodo = (payload) => (dispatch, getState) => {
  console.log('asyncAddTodo', getState())
  const todos = getState().todo.todos;
  if(todos.length >= 10){
    return
  }
}