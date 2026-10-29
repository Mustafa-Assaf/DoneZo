import { List, Trash2 } from "lucide-react";

function ListItem({ handleTaskCheck, handleTaskRemove, item, index }) {
  const styleListItemsDone = {
    textDecoration: "line-through",
  };

  return (
    <li
      className="styleListItems"
      style={item.completed ? styleListItemsDone : {}}
    >
      <input
        onChange={(event) => handleTaskCheck(index, event.target.checked)}
        checked={item.completed}
        type="checkbox"
      />
      <span>{item.task}</span>
      <button onClick={() => handleTaskRemove(index)}>
        <Trash2 size={20} color="#C65F6A" />
      </button>
    </li>
  );
}

export default ListItem;
