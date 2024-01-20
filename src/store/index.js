import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';

import { appReducer } from "../redux/app.reducer";
import { todoReducer } from "../redux/todo.reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  app: appReducer,
  todo: todoReducer
})

export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
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