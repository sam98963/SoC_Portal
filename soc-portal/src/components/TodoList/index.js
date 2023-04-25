/*
we want a function that will move the task from the incomplete list to the complete list when the user clicks the checkbox and when the user clicks the checkbox, the task will be removed from the incomplete list and added to the complete list 

we need a function that checks if the check box is checked
probably need a useState hook to keep track of the state of the checkbox

*/


import React from "react";
import CompletedList from "../CompletedList";

function TodoList({ items, onCheckboxClick }) {
  return (
    <ul>
      {items &&
        items.map((item) => (
          <CompletedList
            key={item}
            item={item}
            isChecked={onCheckboxClick.includes(item)}
            onCheckboxClick={onCheckboxClick}
          />
        ))}
    </ul>
  );
}

export default TodoList;