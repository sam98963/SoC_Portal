import './App.css';
import Bio from "../Bio"
import Login from "../Login"
import TodoList from "../TodoList"
import { useState } from 'react';


function App() {
  const userData = [
    {
        toDoList: [ 
            { task1: "make avatar", dueDate: "25/04/2023", completed: false},
            { task2:" make game", dueDate: "30/04/2023", completed: false, }
        ]
      }
    ]


  const [list1, setList1] = useState(userData[0]);
  const [list2, setList2] = useState([]);


const handleCheckboxClick = (item) => {
  if (list1.includes(item)) {
    setList1(list1.filter((listItem) => listItem !== item));
    setList2([...list2, item]);
  } else {
    setList2(list2.filter((listItem) => listItem !== item));
    setList1([...list1, item]);
  }
};


  return (
    <div className="App">
    <Bio/> 
    <h1> list 1 </h1>
    <TodoList items = {list1} onCheckboxClick={handleCheckboxClick}/>
    <h1> list 2 </h1>
    <TodoList items = {list2} onCheckboxClick = {handleCheckboxClick}/>
    </div>
  );
}

export default App;
