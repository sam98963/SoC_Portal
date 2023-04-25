import ListItemComplete from "../ListItemComplete"


// To do list will need completed state to pass props to this component.
function CompletedList(){
return(<div>
  <ul>
  <label>Completed tasks:
    <ListItemComplete/>
    <ListItemComplete/>
    <ListItemComplete/>
    </label>
  </ul>
</div>)
}


export default CompletedList