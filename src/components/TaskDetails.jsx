import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

function TaskDetails({ taskValue, setTaskValue }) {
  const { taskId } = useParams();
  const navigate = useNavigate();
  
  const isEditing = !taskId ? false : true;
  const foundTask = isEditing
    ? taskValue.find((task) => task.id === taskId)
    : { id: "", task: "", description: "", completed: false, priority: "High" };

  const [formData, setFormData] = useState(foundTask);

  const handleFormData = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    const formCopy = { ...formData };
    name === "status"
      ? (formCopy.completed = value === "completed")
      : (formCopy[name] = value);
    setFormData(formCopy);
  };

  const handleSaveTask = (e) => {
    e.preventDefault();
    if (isEditing) {
      const stateCopy = [...taskValue];
      const index = taskValue.findIndex((task) => task.id === taskId);
      stateCopy[index] = formData;
      setTaskValue(stateCopy);
      navigate("/")
    }
  };

  return (
    <div className="listContainer">
      <h2>Task Details</h2>

      <form onSubmit={handleSaveTask}>
        {/* Task name */}
        <div className="formContainer">
          <label title="task">Task Name</label>
          <input
            onChange={handleFormData}
            type="text"
            id="task"
            name="task"
            value={formData.task}
            placeholder="Enter task name"
          />
        </div>

        {/* Description */}
        <div className="formContainer">
          <label title="description">Description</label>
          <textarea
            onChange={handleFormData}
            id="description"
            name="description"
            value={formData.description}
            placeholder="Add a description..."
            rows={4}
            maxLength={250}
          />
        </div>

        <div className="statusPriorityContainer">
          {/* Status */}
          <div className="statusPriority">
            <label title="status">Status</label>
            <select
              onChange={handleFormData}
              id="status"
              name="status"
              value={formData.completed === true ? "completed" : "pending"}
            >
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          {/* Priority */}
          <div className="statusPriority">
            <label title="priority">Priority</label>
            <select
              onChange={handleFormData}
              id="priority"
              name="priority"
              value={formData.priority}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
        </div>

        <div className="taskDetailsButtons">
          <Link to="/">
            <button id="cancelBtn" type="button">
              Cancel
            </button>
          </Link>

          <button  id="saveBtn" type="submit">
            Save Task
          </button>
        </div>
      </form>
    </div>
  );
}

export default TaskDetails;
