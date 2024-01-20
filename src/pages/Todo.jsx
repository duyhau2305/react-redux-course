import { useSelector } from 'react-redux';

import TodoForm from '../components/todo/TodoForm';
import TodoList from '../components/todo/TodoList';

function Todo() {
  const state = useSelector(state => state);

  console.log('Todo: ', state);
  return (
    <div>
      <TodoForm />
      <TodoList />
    </div>
  )
}

export default Todo