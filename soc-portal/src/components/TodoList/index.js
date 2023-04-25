import ListItemIncomplete from "../ListItemIncomplete";
function TodoList (){

    return (
        <div>
            <h1>Tasks to be Completed:</h1>
            <ul>
                <ListItemIncomplete />
                <ListItemIncomplete />
                <ListItemIncomplete />
            </ul>
        </div>
    )
    
    
    }
    
    
    
    
    
    
    
    
    export default TodoList;