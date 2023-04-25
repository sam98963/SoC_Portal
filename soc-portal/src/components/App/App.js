import './App.css';
import Bio from "../Bio"
import ListItem from "../ListItem"
import Login from "../Login"
import TodoList from "../TodoList"


function App() {
  return (
    <div className="App">
    <Bio/> 
    <ListItem/>
    <TodoList/>
    </div>
  );
}

export default App;
