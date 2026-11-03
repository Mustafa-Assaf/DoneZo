import ListItem from "./ListItem";

function ListTask({ taskValue, handleTaskRemove, handleTaskCheck }) {
  return (
    <ul id="styleList">
      {taskValue.map((item, index) => {
        return (
          <ListItem
            key={item.id}
            handleTaskCheck={handleTaskCheck}
            handleTaskRemove={handleTaskRemove}
            item={item}
            index={index}
          />
        );
      })}
    </ul>
  );
}

export default ListTask;
