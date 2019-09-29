import React from 'react';


const TodoTable = ({todos, deleteTodo}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {
          todos &&
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
  )
};

export default TodoTable;