import React from 'react';


function ListItemComplete ({ item, isChecked, onCheckboxClick }) {
  const handleCheckboxClick = () => {
      onCheckboxClick(item);
  }

  return (
      <div>
          <ul>
          <label>{item}</label>
          <input type="checkbox" checked ={isChecked} onChange={handleCheckboxClick}></input>
          {/* <ListItemIncomplete /> */ }

          </ul>
      </div>
  )
  
  
  }
  
  

export default ListItemComplete