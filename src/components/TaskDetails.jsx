import { ChessKing } from "lucide-react";
import { useParams, Link } from "react-router-dom";

function TaskDetails({ taskValue, setTaskValue }) {
  const { taskId } = useParams();
  console.log(typeof taskId);
  console.log(taskValue.id);

  const foundTask = taskValue.find((task) => task.id === taskId);
  console.log(foundTask);

  //Create local state and onChange handlers to handle form input

  return (
    <div className="listContainer">
      <h2>Task Details</h2>

      <form>
        {/* Task name */}
        <div className="formContainer">
          <label title="task">Task Name</label>
          <input
            type="text"
            id="task"
            name="task"
            value={foundTask.task}
            placeholder="Enter task name"
          />
        </div>

        {/* Description */}
        <div className="formContainer">
          <label title="description">Description</label>
          <input
            id="description"
            name="description"
            value={foundTask.description}
            placeholder="Add a description..."
          />
        </div>
        <div className="statusPriorityContainer">
          {/* Status */}
          <div className="statusPriority">
            <label title="status">Status</label>
            <select
              id="status"
              name="status"
              value={foundTask.completed === true ? "completed" : "pending"}
            >
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          {/* Priority */}
          <div className="statusPriority">
            <label title="priority">Priority</label>
            <select id="priority" name="priority" value={foundTask.priority}>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
        </div>

        <div className="taskDetailsButtons">
          <Link to="/">
            <button id="cancelBtn" type="button">Cancel</button>
          </Link>
          <button id="saveBtn" type="submit">Save Task</button>
        </div>
      </form>
    </div>
  );
}

export default TaskDetails;
