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
    
  const loginData =  [  
    {
        firstName: "Hani",
        surname: "Abdi",
        username:"hania",
        email: "hani@gmail.com",
        password: "1234"
    },  
     {
        firstName: "Samuel",
        surname: "Willimason",
        username:"samw",
        email: "samw@gmail.com",
        password: "1234"
    },  
    {
        firstName: "Ahia",
        surname: "Jalil",
        username:"ahiaj",
        email: "ahiaj@gmail.com",
        password: "1234"
    },  
    {
        firstName: "Hung",
        surname: "Vo",
        username:"hungv",
        email: "hungv@gmail.com",
        password: "1234"
    },  
  ]  



  function handleLogin(event){
    event.preventDefault()
    const username = event.target.elements.username.value
    const password = event.target.elements.password.value
    console.log(username)
    console.log(password)
// for loop loginData[i].username
// nest if loop within
    let userEmail = ""
    for (let i=0; i<loginData.length; i++){
        if(username === loginData[i].username && password === loginData[i].password){
            userEmail = loginData[i].email
        } if(username === loginData[i].username && password !== loginData[i].password)
        {
            alert("Password Incorrect")
        }
        else {console.log(false)}
      }
      
    for (let i=0; i<loginData.length; i++){
      if(userEmail === userData[i].email) {
        setList(userData[i].toDoList)
        setPInfo(userData[i])
      } else {
        console.log("no")
      }
    }

        

    
}







  // console.log(userData); // add this line to check the value of userData


  return (
    <div className="App">
    <Login handleLogin = {handleLogin}/>
    <Bio pInfo = {pInfo}/>
      <TodoList userData = {userData} setList ={setList} setComplete = {setComplete} list={list} complete={complete}/>
    </div>
  );
}
export default App;
