import React, { useState } from 'react';
import { deleteTodo, updateTodo } from './firebase';

function Todo(props) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newTodoText, setNewTodoText] = useState(props.todo.todo);

  const handleDelete = () => {
    setIsDeleting(true);
    deleteTodo(props.todo.id)
      .then(() => {
        console.log('Deleted successfully');
      })
      .catch(error => {
        console.error('Error deleting todo: ', error);
      })
      .finally(() => {
        setIsDeleting(false);
      });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    updateTodo(props.todo.id, newTodoText)
      .then(() => {
        console.log('Todo updated successfully');
        setIsEditing(false);
      })
      .catch(error => {
        console.error('Error updating todo: ', error);
      });
  };

  return (
    <div>
      <li>
        {isEditing ? (
          <>
            <input value={newTodoText} onChange={e => setNewTodoText(e.target.value)} />
            <button onClick={handleSaveEdit}>Save</button>
          </>
        ) : (
          <>
            {props.todo.todo}{' '}
            <button onClick={handleEdit}>✏️</button>
            <button onClick={handleDelete} disabled={isDeleting}>
              {isDeleting ? 'Deleting...' : '❌'}
            </button>
          </>
        )}
      </li>
    </div>
  );
}

export default Todo;
