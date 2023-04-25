import React from 'react';


function ListItemComplete({ items, handleToggle }) {
  return (
    <div>
      <h3>Completed List</h3>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => handleToggle(item.id)}
            />
            <label>{item.task}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListItemComplete;