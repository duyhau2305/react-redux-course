# React + Vite

- redux

```
const todoState = {
  todos: [],
  isLoading: false,
  todoItem: null
}

function todoReducer() {
  switch (action.type) {
    case 'ADD_TODO':{
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
    }
  }
}

const aboutState = {
  content: '',
  title: '',
}

function aboutReducer() {
  switch (action.type) {
    case 'ADD_TODO':{
      return {
        ...state,
        title: action.payload
      }
    }
  }
}
- after using combineReducers

const rootState = {
  todos: [],
  isLoading: false,
  todoItem: null,
  content: '',
  title: '',
} 
function rootReducer() {
  switch (action.type) {
    case 'TODO/ADD_TODO':{
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
    }
    case 'ABOUT/ADD_TODO':{
      return {
        ...state,
        title: action.payload
      }
    }
  }
}
```