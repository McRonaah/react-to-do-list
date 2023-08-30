// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const TodoForm = () => {
  const [value, setValue] = useState(''); // Provide an initial value

  const handleSubmit = e => {
    e.preventDefault();

    console.log(value);
  }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input
        type="text"
        className='todo-input'
        value={value}
        placeholder='What is the task today?'
        onChange={(e) => setValue(e.target.value)}
      />
      <button type='submit' className='todo-btn'>
        Add Task
      </button>
    </form>
  )
}

export default TodoForm;