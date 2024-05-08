import React, { useState, useEffect } from 'react';
import './App.css';
import Todo from './Todo';
import {db} from './firebase'
import firebase from 'firebase';

function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState(['']);

  useEffect(() => {
    const data = db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      const todosData = snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo}));
      setTodos(todosData);
    });

    return () => data(); //will return the info from the database from the snapshots on changes;
  }, []); 

  const addTodo = (event) => {
    //  console.log('Testing Add')
     //spread - appending the input value to the end of my list/array
     event.preventDefault();

     db.collection('todos').add({
      todo:input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
     })
    //  setTodos([...todos, input])
     setInput('');
  }

  return (
    <form>
    <div className="App">
      <h1>Hello World</h1>
      <input value={input} onChange={event => setInput(event.target.value)}/>
      <button type="submit" onClick={addTodo} disabled={!input}> Add To-Do </button>

      <ul>
      {todos.map(todo => (
          <Todo todo={todo}/>
        ))}            
      </ul>
      
    </div>
    </form>
  );
}

export default App;
