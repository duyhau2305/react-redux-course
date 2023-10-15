import { combineReducers, createStore } from "redux";
import { appReducer } from "../redux/app.reducer";
import { todoReducer } from "../redux/todo.reducer";

const rootReducer = combineReducers({
  app: appReducer,
  todo: todoReducer
})

export const store = createStore(rootReducer);



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