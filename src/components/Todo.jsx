// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Todo = ({task, toggleComplete, deleteTodo}) => {
  return (
    <div className="Todo">
        <p className={`${task.id ? 'completed' : ""}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
        <div>
        <FontAwesomeIcon icon={faPenToSquare}  />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
        </div>
    </div>
  )
}

export default Todo;