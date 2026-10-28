import ListItem from "./ListItem";

function ListTask({ taskValue, handleTaskRemove, handleTaskCheck }) {
  const styleList = {
    margin: "0px",
    padding: "0px",
  };

  return (
    <ul style={styleList}>
      {taskValue.map((item, index) => {
        return (
          <ListItem
            key={index}
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
