// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
import TodoForm from './TodoForm';
import { v4 as uuidv4 } from 'uuid';
uuidv4();
import Todo from './Todo';

const TodoWrapper = () => {

  const [todos, setTodos] = useState([])

  const addTodo = todo => {
    setTodos([...todos, {id: uuidv4(), task: todo,
       completed: false, isEditing: false}])
       console.log(todos)
  }

  return (
    <div className='TodoWrapper'>
      <h1>Get Things Done!</h1>
      <TodoForm addTodo={addTodo} />

      {todos.map((todo, index) => (
        <Todo task={todo} key ={index}
         />
      ))}

    </div>
  )
}

export default TodoWrapper;