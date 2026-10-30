import {useParams, Link} from "react-router-dom";

function TaskDetails() {

  const {taskId} = useParams ();
  console.log(taskId);

  return (
    <div className = "taskDetailsContainer">
    <h2>Edit Task</h2>

    <form>
            {/* Task name */}
            <div>
          <label title="task">Task Name</label>
          <input
            type="text"
            id="task"
            name="task"
            placeholder="Enter task name"
          />
        </div>

        {/* Description */}
        <div>
          <label title="description">Description</label>
          <input
            id="description"
            name="description"
            placeholder="Add a description..."
          />
        </div>

        {/* Status */}
        <div>
          <label title="status">Status</label>
          <select id="status" name="status">
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        {/* Priority */}
        <div>
          <label title="priority">Priority</label>
          <select id="priority" name="priority">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <div className="taskDetailsButtons">
          <button type="submit">Save Changes</button>

          <Link to="/">
            <button type="button">Cancel</button>
          </Link>
        </div>

      </form>

      </div>
  );
}

export default TaskDetails;