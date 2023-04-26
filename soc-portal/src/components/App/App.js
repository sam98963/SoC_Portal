import './App.css';
import Bio from "../Bio"
import Login from "../Login"
import TodoList from "../TodoList"
import { useState } from 'react';
import { useEffect } from 'react';
import ListItemComplete from '../ListItemComplete';

/* using the database created, we want to create a function that will pull down data from the database and display it on the page, when the checkbox is checked, change completed in the database to be true

use usestate to take in the data from the database and display the objects within the array on the page

push the task object into an array and display the array on the page


run through to-do list array and select completed key
if completed === true then add object to second array and remove from first. 


*/

function App() {
  const userData = {
    toDoList: [
      { task: "make avatar", dueDate: "25/04/2023", completed: true },
      { task: "make game", dueDate: "30/04/2023", completed: false },
    ],
  };

    const [list, setList] = useState(userData.toDoList);
    const [complete, setComplete] = useState ([])
  

  useEffect(() => {
    const secondListItem = userData.toDoList.filter((item,index)=>{
      return item.completed
      })
      const firstListItem = userData.toDoList.filter((item,index)=>{
        return !item.completed})
        setComplete(secondListItem)
        setList(firstListItem)
  }, [])


  // console.log(userData); // add this line to check the value of userData


  return (
    <div className="App">
      <TodoList userData = {userData} setList ={setList} setComplete = {setComplete} list={list} complete={complete}/>
    </div>
  );
}

export default App;
