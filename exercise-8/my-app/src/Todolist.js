import React, { useState } from 'react';

const Todolist = () => {
  const [desc, setDesc] = useState('');
  const [date, setDate] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = (event) => {
    event.preventDefault();
    const todo = { "desc": desc, "date": date};
    setTodos([...todos, todo]);
  }

  const deleteTodo = (index) => {
    index = parseInt(index);
    const updatedTodos = todos.filter((todo, i) => i !== index);
    setTodos(updatedTodos);
  }

  return (
    <div>
      <form onSubmit={addTodo}>
        <label htmlFor="desc">Description:</label>
        <input type="text" id="desc" onChange={ event => setDesc(event.target.value) } value={ desc } />
        <label htmlFor="date">Date:</label>
        <input type="text" onChange={ event => setDate(event.target.value) } value={ date } />
        <input type="submit" value="Add" />
      </form>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {
            todos.map((todo, index) => {
              return (
                <tr key={index}>
                  <td>{todo.date}</td>
                  <td>{todo.desc}</td>
                  <td>
                    <button onClick={() => deleteTodo(index)}>
                      Delete
                    </button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default Todolist;