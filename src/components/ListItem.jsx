import { Link } from "react-router-dom";
import { SquarePen, Trash2, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

function ListItem({ handleTaskCheck, handleTaskRemove, item, index }) {
  const styleListItemsDone = {
    textDecoration: "line-through",
  };

  const stylePriorityItems = {
    borderRadius: "8px",
    backgroundColor: item.priority=== "Low" ? "#DDF5E4" : item.priority=== "Medium" ? "#FFF0CA" :"#FCE5E5",
    color: item.priority=== "Low" ? "#277445" : item.priority=== "Medium" ? "#946200" :"#A83232",
    padding: "0 5px",
    fontWeight: "500"
  }

  const [showDescription, setShowDescription] = useState (false);
 
  const handleToggleDescription = () =>{
    let toggle = !showDescription;
    setShowDescription(toggle);
  }
  console.log(showDescription);
  return (
    <li
      className="styleListItems"
      style={item.completed ? styleListItemsDone : {}}
    ><div style={{display: "flex", flex: "1", alignItems: "center"}}>
       <input
        onChange={(event) => handleTaskCheck(index, event.target.checked)}
        checked={item.completed}
        type="checkbox"
      />
      <span className="taskName">{item.task}</span>
      <div className="listIcons">

      <span  style={stylePriorityItems}>{item.priority}</span>
      <button onClick={handleToggleDescription}>{showDescription ?<ChevronUp />:<ChevronDown /> }</button>
      
      <Link to={`/task-details/${item.id}`} className="taskEditLink">
        <SquarePen size={20} color="blue" />
      </Link>

      <button onClick={() => handleTaskRemove(index)}>
        <Trash2 size={20} color="#C65F6A" />
      </button>
      </div>
    </div>
      <div>
        {showDescription && <p>{item.description}</p>}
      </div>
      
    </li>
    
  );
}



export default ListItem;
