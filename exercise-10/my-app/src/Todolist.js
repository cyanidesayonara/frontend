import React, { useState } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

const Todolist = () => {
  const [desc, setDesc] = useState('');
  const [date, setDate] = useState('');
  const [todos, setTodos] = useState([]);

  const columns = [
    {Header: 'Date', accessor: 'date'},
    {Header: 'Description', accessor: 'desc' },
    {Header: '', accessor: '',
      Cell: row => (
        <button onClick={() => deleteTodo(row.index)}>
          Delete
        </button>
      )
    }
  ]

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
      <ReactTable data={todos} columns={columns} sortable='true' defaultPageSize='10' />
    </div>
  );
};

export default Todolist;