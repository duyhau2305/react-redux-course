// CONSTANT
export const ADD_TODO = 'TODO/ADD_TODO';
export const SHOW_LOADING = 'TODO/SHOW_LOADING';
export const HIDE_LOADING = 'TODO/HIDE_LOADING';


// actions
export const addTodo = (payload = {}) => {
  return {
    type: ADD_TODO,
    payload
  }
}
export const showLoading = (payload = {}) => {
  return {
    type: SHOW_LOADING,
    payload
  }
}
export const hideLoading = (payload = {}) => {
  return {
    type: HIDE_LOADING,
    payload
  }
}