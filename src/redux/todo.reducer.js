import * as todoActions from './todo.actions';

// initial state
const initialState = {
  todos: []
}

export const todoReducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case todoActions.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, payload]
      }
    case todoActions.SHOW_LOADING:
      return {
        ...state,
        todos: [...state.todos,payload]
      }
      case todoActions.HIDE_LOADING:
      return {
        ...state,
        todos: [...state.todos,payload]
      }
    default:
      return state;
  }
}