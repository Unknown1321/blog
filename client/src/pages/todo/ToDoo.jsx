import React from 'react'
import axios from "axios";
import { useEffect, useState } from 'react';
import "./todo.css";

function Todo() {
	const [todos, setTodos] = useState([]);
	const [popupActive, setPopupActive] = useState(false);
	const [newTodo, setNewTodo] = useState("");


  useEffect(() => {
    const GetTodos = async () => {
    const res = await axios.get("/todo");
    setTodos(res.data);
  };
  GetTodos();
}, []);


const addTodo = async () => {
  try {
    const response = await axios.post("/todo", {
      text: newTodo
    });

    const newTodoItem = response.data;
    setTodos([...todos, newTodoItem]);
    setPopupActive(false);
    setNewTodo("");
  } catch (error) {
    console.error('Error adding todo:', error);
  }
};


const completeTodo = async id => {
  try {
      const response = await axios.get(`/todo/complete/${id}`);
      const data = response.data;

      if (data && data._id && data.complete !== undefined) {
          setTodos(todos => todos.map(todo => {
              if (todo._id === data._id) {
                  todo.complete = data.complete;
              }
              return todo;
          }));
      } else {
          console.error("Todo not found or incomplete data returned:", data);
      }
  } catch (error) {
      console.error('Error completing todo:', error);
  }
}


	const deleteTodo = async id => {
    try {
      await axios.delete(`/todo/${id}`);
      setTodos(todos => todos.filter(todo => todo._id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };
  

	return (
		<div className="Todo">
			<h1>Hello, Team</h1>
			<h4>This is our tasks</h4>

			<div className="todos">
				{todos.length > 0 ? todos.map(todo => (
					<div className={
						"todo" + (todo.complete ? " is-complete" : "")
					} key={todo._id} onClick={() => completeTodo(todo._id)}>
						<div className="checkbox"></div>

						<div className="text">{todo.text}</div>

						<div className="delete-todo" onClick={() => deleteTodo(todo._id)}>x</div>
					</div>
				)) : (
					<p>You currently have no tasks</p>
				)}
			</div>

			<div className="addPopup" onClick={() => setPopupActive(true)}>+</div>

			{popupActive ? (
				<div className="popup">
					<div className="closePopup" onClick={() => setPopupActive(false)}>X</div>
					<div className="content">
						<h3>Add Task</h3>
						<input type="text" className="add-todo-input" onChange={e => setNewTodo(e.target.value)} value={newTodo} />
						<div className="button" onClick={addTodo}>Create Task</div>
					</div>
				</div>
			) : ''}
		</div>
	);
}

export default Todo;
