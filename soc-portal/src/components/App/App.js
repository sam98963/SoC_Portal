import './App.css';
import Bio from "../Bio"
import ListItem from "../ListItemIncomplete"
import Login from "../Login"
import TodoList from "../TodoList"
import CompletedList from '../CompletedList';


function App() {
  return (
    <div className="App">
    <Bio/> 
    <TodoList/>
    <CompletedList/>
    </div>
  );
}

export default App;
