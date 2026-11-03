import { Link } from "react-router-dom";
import ListTask from "./ListTask";
import { ArrowDownAZ, ClockArrowDown, ArrowUpAZ, ClockArrowUp} from "lucide-react";

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

  const handleSortByName = () => {
    const stateCopy = [...taskValue];
    stateCopy.sort((a, b) => a.task.localeCompare(b.task));
    setTaskValue(stateCopy);
  };

  const handleSortByPriority = () => {
    const sortObj = { High: 1, Medium: 2, Low: 3 };

    const stateCopy = [...taskValue];
    stateCopy.sort((a, b) => sortObj[a.priority] - sortObj[b.priority]);
    console.log(stateCopy);
    setTaskValue(stateCopy);
  };

  return (
    <div className="listContainer">
      <div id="myTasks">
        <h2>My Tasks ({taskValue.length})</h2>
        <button onClick={handleSortByName}>
          <ArrowDownAZ /><ArrowUpAZ />
        </button>
        <button onClick={handleSortByPriority}>
          <ClockArrowDown /> <ClockArrowUp />
        </button>
        <Link to={`/new-task`} id="newTaskBtn">
          + New Task
        </Link>
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
