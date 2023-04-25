/*
we want a function that will move the task from the incomplete list to the complete list when the user clicks the checkbox and when the user clicks the checkbox, the task will be removed from the incomplete list and added to the complete list 

we need a function that checks if the check box is checked
probably need a useState hook to keep track of the state of the checkbox

*/


import React from "react";
//import CompletedList from "../CompletedList";

function TodoList() {
    const userData = [
        {
            toDoList: [ 
                { task: "make avatar", dueDate: "25/04/2023", completed: false},
                { task:" make game", dueDate: "30/04/2023", completed: false, }
            ]
          }
        ]

function text (userData) {
    userData[0].toDoList.map((item) => (item.task))
    }

  return (
    <ul>
    {userData[0].toDoList.map((item) => (<li>{item.task}</li>))}
    {userData[0].toDoList.map((item) => (<li>{item.completed}</li>))}
    </ul>
  );
}

export default TodoList;