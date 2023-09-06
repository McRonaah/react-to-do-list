// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';

// eslint-disable-next-line react/prop-types
const EditTodoForm = ({editTodo, task}) => {
  // eslint-disable-next-line react/prop-types
  const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
        e.preventDefault();
        // eslint-disable-next-line react/prop-types
        editTodo(value, task.id);
      };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='Update task' />
    <button type="submit" className='todo-btn'>Add Task</button>
  </form>
  )
}

export default EditTodoForm;