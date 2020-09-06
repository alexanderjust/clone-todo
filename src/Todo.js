import React, { useState } from "react";
import './Todo.css';
import { List, ListItemText, ListItem, Button, Modal } from "@material-ui/core";
import db from './firebase';
import {makeStyles} from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Todo(props) {

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState();

  const handleOpen = () => {
    setOpen(true);
  };


  const updateTodo = () => {
    db.collection('todos').doc(props.todo.id).set({
      todo: input
    }, { merge: true })
    setOpen(false);
  }


  return (
    <>
    <Modal
      open={open}
      onClone={e => setOpen(false)}
      >
    <div className={classes.paper}>
      <input placeholder={props.todo.todo} value={input} onChange = {event => setInput(event.target.value)}/>
      <Button onClick={updateTodo}>UPDATE MESSAGE</Button>
    </div>
      </Modal>
  
    <List>
      <ListItem>
        <ListItemText primary= {props.todo.todo} secondary={props.todo.timestamp}  />
      </ListItem>
      <button onClick={e => setOpen(true)}>
        Edit
        </button>
      <Button onClick={event => db.collection('todos').doc(props.todo.id).delete()}>
      ❌ DELETE ME ❌
    </Button>
    </List>
    </>
  )
  
}

export default Todo;