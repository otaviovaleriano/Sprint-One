import React, { useState, useEffect } from 'react';
import './App.css';
import Todo from './Todo';
import { db, addTodoToFirestore } from './firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  // const [deadline, setDeadline] = useState('');

  useEffect(() => {
    const unsubscribe = db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      const todosData = snapshot.docs.map(doc => ({ id: doc.id, todo: doc.data().todo }));
      setTodos(todosData);
    });

    return () => unsubscribe();
  }, []); 

  const addTodo = (event) => {

    event.preventDefault();
    
    if (input.trim() !== '') {
      // const deadlineValue = document.getElementById('deadline-field').value;
      addTodoToFirestore(input)
      setInput('');
    }
  };

  return (
    <div className="container">
      <h1>To-do Web App 😁</h1>
      <form onSubmit={addTodo}>
        <input className="input-field" value={input} onChange={event => setInput(event.target.value)} />
        {/* <input id="deadline-field" className="deadline" type="date" value={deadline} onChange={event => setDeadline(event.target.value)} placeholder="Select deadline"/> */}
        <button className="add-button" type="submit" disabled={!input.trim()}>Add To-Do</button>
      </form>
      <ul className="todo-list">
        {todos.map(todo => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
