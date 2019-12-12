import React from 'react';

  const Filter = ({ filter, setFilter }) => {
    return (
      <div>
        <label>Search</label>
        <br />
        <input type="text" onChange={event => setFilter(event.target.value) } value={ filter } />
      </div>
    )
  }

export default Filter