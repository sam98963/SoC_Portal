/*
we want a function that will move the task from the incomplete list to the complete list when the user clicks the checkbox and when the user clicks the checkbox, the task will be removed from the incomplete list and added to the complete list 

we need a function that checks if the check box is checked
probably need a useState hook to keep track of the state of the checkbox

*/


import React, { useState } from "react";

function TodoList({userData, list, complete, setList, setComplete}) {
  const handleChange = (index) => {
    const updatedList = [...list];
    updatedList[index].completed = !updatedList[index].completed;
    setList(updatedList);
    // console.log(updatedList)

  

    setComplete(userData.toDoList.filter((item,index)=>{
      return item.completed
      }))
    console.log(complete)
  };

  return (
    <div>
    <ul>
      {list.map((item, index) => (
        <li key={index}>
          <label>
          {item.task}
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => handleChange(index)}
            />
          </label>
        </li>
      ))}
    </ul>
    <h3>Completed List</h3>
    <ul>
      {complete.map((item, index) => (
        <li key={index}>
          <label>
          {item.task}
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => handleChange(index)}
            />
          </label>
        </li>
      ))}
    </ul>
</div>
    
  );
}

export default TodoList;