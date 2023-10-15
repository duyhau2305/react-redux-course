import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'

// components
import App from './App.jsx'

// styles
import './index.css'

// store
import { store } from './store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ChakraProvider>
    <App />

    </ChakraProvider>
  </Provider>,
)


/*
Q: step to step to setup redux
  1. install redux, react-redux
  2. create store
  3. create reducer
  4. create action

Q. step to step to create a action to update new state of component
  1. create action
  2. create reducer
*/