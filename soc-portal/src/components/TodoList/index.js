/*
we want a function that will move the task from the incomplete list to the complete list when the user clicks the checkbox and when the user clicks the checkbox, the task will be removed from the incomplete list and added to the complete list 

we need a function that checks if the check box is checked
probably need a useState hook to keep track of the state of the checkbox

*/


import React, { useState } from "react";

function TodoList({list, complete, setList, setComplete}) {
  console.log(list)
  const moveToCompleted = (index) => {
   
    const updatedList = list.filter((item, i) => i !== index);
    updatedList.completed = !updatedList.completed

    const itemToMove = list[index];
    itemToMove.completed = !itemToMove.completed

    setList(updatedList);
    setComplete([...complete, itemToMove]);
  };

  const moveToToDo = (index) => {

    const updatedList = complete.filter((item, i) => i !== index);
    updatedList.completed = !updatedList.completed

    const itemToMove = complete[index];
    itemToMove.completed = !itemToMove.completed

    setList([...list, itemToMove]);
    setComplete([...updatedList]);
  };





  return (
    <div>
      <h3>Outstanding Tasks:</h3>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            <label>
              <p>Task: {item.task}</p><p>Date Due: {item.dueDate}</p>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => moveToCompleted(index)}
              />
            </label>
          </li>
        ))}
      </ul>
      <h3>Completed Tasks:</h3>
      <ul>
        {complete.map((item, index) => (
          <li key={index}>
            <label>
            <p>Task: {item.task}</p>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => moveToToDo(index)}
              />
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;