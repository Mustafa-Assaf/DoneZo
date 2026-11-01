import { Link } from "react-router-dom";
import ListTask from "./ListTask";

function HomePage({ taskValue, setTaskValue }) {
  const handleTaskRemove = (index) => {
    const stateCopy = [...taskValue];
    stateCopy.splice(index, 1);
    setTaskValue(stateCopy);
  };

  const handleTaskCheck = (index, checked) => {
    const stateCopy = [...taskValue];
    const taskCopy = { ...stateCopy[index] };
    taskCopy.completed = checked;
    stateCopy[index] = taskCopy;
    setTaskValue(stateCopy);
  };

  return (
    <div className="listContainer">
      <div id="myTasks">
        <h2>My Tasks</h2>
        <Link to={`/new-task`} id="newTaskBtn">+ New Task</Link>
      </div>

      <div>
        <ListTask
          taskValue={taskValue}
          handleTaskRemove={handleTaskRemove}
          handleTaskCheck={handleTaskCheck}
        />
      </div>
    </div>
  );
}

export default HomePage;
