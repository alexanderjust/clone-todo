import React, { useState, useEffect } from "react";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import Todo from "./Todo";
import db from './firebase';
import firebase from 'firebase';



function App() {
  const [todos, setTodos] = useState(['']);
  const [input, setInput] = useState("");
  

useEffect(() => {
  db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
    setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
  })
}, [])

  const addTodo = (event) => {
    event.preventDefault();

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput("");
  };

  

  return (
    <div>
      <h1>🍘 LIVE CHAT 🍘 </h1>
      <form>
        <FormControl>
          <InputLabel> TYPE A MESSAGE  🚀 </InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>
        <Button
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
          disabled={!input}
        >
          SEND
        </Button>
      </form>

      <ul>
        {todos.map(todo => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
