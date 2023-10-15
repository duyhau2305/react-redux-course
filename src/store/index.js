import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';

import { appReducer } from "../redux/app.reducer";
import { todoReducer } from "../redux/todo.reducer";

const rootReducer = combineReducers({
  app: appReducer,
  todo: todoReducer
})

export const store = createStore(
  rootReducer,
  composeWithDevTools()
);



/*
const initialState = {
  isLoading: false
}

state = {
  app: {
    isLoading: false
  }
  todo: {
    todos: []
  }
}
state.app.isLoading

*/