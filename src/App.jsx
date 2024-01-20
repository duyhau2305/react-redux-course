import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

// services
import { request } from './services/axiosInstance';

// components
import Loading from './components/Loading';

// pages
import Todo from './pages/Todo';

// actions
import * as todoActions from './redux/todo.actions';

function App() {
  const dispatch = useDispatch();

  React.useState(() => {
    async function fetchData() {
      const response = await request('/api/todo?page=1&limit=5', {
        method: 'GET',
        showSpinner: true,
      });
      const data = response.data.data;
      dispatch(todoActions.setTodos(data));
    }
    fetchData();
  },[])

  // view
  return (
    <>
      <h2 style={{ textAlign: 'center' }}>React Redux</h2>
      <Todo />

      <Loading />


     
    </>
  )
}

export default App
