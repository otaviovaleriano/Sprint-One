import React, { useState } from "react";
import { deleteTodo, updateTodo } from "./firebase";
import "./App.css";

function Todo(props) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTodo, setUpdatedTodo] = useState(props.todo.todo);
  // const [deadline, setDeadline] = useState(props.todo.deadline);

  // delete function
  const deleteTodos = () => {
    setIsDeleting(true);
    deleteTodo(props.todo.id);
    setIsDeleting(false);
  };

  // edit function
  const editTodo = () => {
    setIsEditing(true);
  };

  const saveTodo = () => {
    updateTodo(props.todo.id, updatedTodo).then(() => {
      setIsEditing(false);
    });
  };

  // Deadline feature
  // const handleDeadlineChange = (event) => {
  //   setDeadline(event.target.value);
  // };

  // const handleSaveDeadline = () => {
  //   // Save the updated deadline
  //   updateTodo(props.todo.id, updatedTodo, deadline)
  // setIsEditing(false);

  // };

  return (
    <div className="todo">
      <li>
        {isEditing ? (
          <>
            <input
              value={updatedTodo}
              onChange={(e) => setUpdatedTodo(e.target.value)}
            />
            {/* <input type="date" value={deadline} onChange={handleDeadlineChange} /> */}
            <button onClick={saveTodo}> Save </button>
          </>
        ) : (
          <>
            {props.todo.todo}{" "}
            {/* {deadline && <span>Deadline: {deadline}</span>} 
            {!isEditing && originalDeadline && <span>Deadline: {originalDeadline}</span>} */}
            <button onClick={editTodo}> ✏️ </button>
            <button onClick={deleteTodos} disabled={isDeleting}>
              {isDeleting ? "Deleting..." : "🗑️"}
            </button>
          </>
        )}
      </li>
    </div>
  );
}

export default Todo;
