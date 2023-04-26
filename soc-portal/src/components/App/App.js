import './App.css';
import Bio from "../Bio"
import Login from "../Login"
import TodoList from "../TodoList"
import { useState } from 'react';
import { useEffect } from 'react';
import ListItemComplete from '../ListItemComplete';
import userData from "../data/data.js"

/* using the database created, we want to create a function that will pull down data from the database and display it on the page, when the checkbox is checked, change completed in the database to be true

use usestate to take in the data from the database and display the objects within the array on the page

push the task object into an array and display the array on the page


run through to-do list array and select completed key
if completed === true then add object to second array and remove from first. 


*/


function App() {

    const [list, setList] = useState(userData[0].toDoList);
    const [complete, setComplete] = useState ([])
    const [pInfo, setPInfo] = useState(userData[0])

  useEffect(() => {
    const completedItems = list.filter(item => item.completed);
    const toDoItems = list.filter(item => !item.completed);
    setComplete(completedItems);
    setList(toDoItems);
  }, []);


  // console.log(userData); // add this line to check the value of userData


  return (
    <div className="App">
    <Bio pInfo = {pInfo}/>
      <TodoList userData = {userData} setList ={setList} setComplete = {setComplete} list={list} complete={complete}/>
    </div>
  );
}

export default App;
