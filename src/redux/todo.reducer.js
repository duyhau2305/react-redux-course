import * as todoActions from './todo.actions';

// initial state
const initialState = {
  todos: [],
}

export const todoReducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case todoActions.SET_TODOS:
      return {
        ...state,
        todos: payload
      }
    case todoActions.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, payload]
      }
    case todoActions.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== payload),
      };
    default:
      return state;
  }
}


export default todoReducer;