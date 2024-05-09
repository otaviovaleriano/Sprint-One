import React, { useState, useEffect } from 'react';
import './App.css';
import Todo from './Todo';
import { db, addTodoToFirestore } from './firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

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
      addTodoToFirestore(input)
        .then(() => {
          console.log('Todo added successfully');
          setInput('');
        })
        .catch(error => {
          console.error('Error adding todo: ', error);
        });
    }
  };

  return (
    <div className="App">
      <h1>To-do Web App 😁</h1>
      <form onSubmit={addTodo}>
        <input value={input} onChange={event => setInput(event.target.value)} />
        <button type="submit" disabled={!input.trim()}>Add To-Do</button>
      </form>
      <ul>
        {todos.map(todo => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
