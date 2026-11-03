import { Link } from "react-router-dom";
import ListTask from "./ListTask";
import { ClockArrowDown, ClockArrowUp, ArrowDownUp } from "lucide-react";
import { useState } from "react";

function HomePage({ taskValue, setTaskValue }) {
  const [sortByPriority, setSortByPriority] = useState("unsorted");

  const handleTaskRemove = (index) => {
    const stateCopy = [...taskValue];
    stateCopy.splice(index, 1);
    setTaskValue(stateCopy);
  };

  const handleTaskCheck = (index, checked) => {
    const stateCopy = [...taskValue];
    const taskCopy = { ...stateCopy[index],  };
    taskCopy.completed = checked;
    stateCopy[index] = taskCopy;
    setTaskValue(stateCopy);
  };

  const handleSortByPriority = () => {
    const sortObj = { High: 1, Medium: 2, Low: 3 };

    const stateCopy = [...taskValue];
    if (sortByPriority === "high" || sortByPriority === "unsorted") {
      stateCopy.sort((a, b) => sortObj[a.priority] - sortObj[b.priority]);
      setTaskValue(stateCopy);
      setSortByPriority("low");
    } else if (sortByPriority === "low") {
      stateCopy.sort((a, b) => sortObj[b.priority] - sortObj[a.priority]);
      setTaskValue(stateCopy);
      setSortByPriority("high");
    }
  };

  return (
    <div className="listContainer">
      <div id="myTasks">
        <h2>My Tasks ({taskValue.length})</h2>
        <button onClick={handleSortByPriority} id="srtBtn">
          {sortByPriority === "unsorted" ? (
            <ArrowDownUp />
          ) : sortByPriority === "high" ? (
            <ClockArrowDown />
          ) : (
            <ClockArrowUp />
          )}
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
