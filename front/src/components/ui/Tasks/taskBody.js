import React from "react";
import "./taskBody.css";
// import Line from "./line.js";

function TaskBody({
  index,
  task,
  collapsed,
  updateTask,
  updateTaskLocal,
  deleteTask,
  deleteTaskLocal,
}) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    let taskPost = {
      where: { id: task.id },
      set: {
        user_id: 1,
        name: e.target[0].value,
        description: e.target[1].value,
        estimated_duration: e.target[2].value,
        tags: e.target[3].value,
        project: e.target[4].value,
        priority: e.target[5].value,
        date_limit: e.target[6].value,
      },
    };

    var response = await updateTask(taskPost);
    if (response.error) return console.log(response.error);
    else {
      task.id = response.data.id;
      updateTaskLocal(task.id, taskPost.set);
    }
  };

  async function handleDelete(e) {
    console.log("DELETE TASK");
    e.preventDefault();

    var response = await deleteTask(task);
    if (response.error) return console.log(response.error);
    else {
      deleteTaskLocal(task.id);
    }
  }

  if (!collapsed) {
    return (
      <div className="task-body bg-gray-700 rounded-xl p-5 relative z-0">
        <h1 className="text-center text-white text-2xl font-bold my-5">
          Edit task
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="top-form">
            <div className="task-name flex flex-col">
              <input
                className="button"
                placeholder="Name"
                type="text"
                name="this.name"
                defaultValue={task.name}
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="description"></label>
              <textarea
                placeholder="Description"
                className="button !w-full resize-none"
                name="this.description"
                defaultValue={task.description}
              />
            </div>
          </div>
          {/* <Line /> */}
          <div className="bottom-form">
            <select
              name="this.estimatedTime"
              className="button"
              defaultValue={task.estimated_duration}
            >
              <option value="">Estimated Time</option>
              <option value="short">Short</option>
              <option value="medium">Medium</option>
              <option value="long">Long</option>
            </select>
            <select
              name="this.tags"
              className="button"
              defaultValue={task.tags}
            >
              <option value="">Tags</option>
              <option value="work">Work</option>
              <option value="study">Study</option>
              <option value="personal">Personal</option>
            </select>
            <select
              name="this.project"
              className="button"
              defaultValue={task.project}
            >
              <option value="">Project</option>
              <option value="work">Work</option>
              <option value="study">Study</option>
              <option value="personal">Personal</option>
            </select>
            <select
              name="this.priority"
              className="button"
              defaultValue={task.priority}
            >
              <option value="">Priority</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
              <option value="urgent">Urgent</option>
            </select>
            <input
              type="date"
              name="this.dateLimit"
              className="button"
              defaultValue={
                task.date_limit ? task.date_limit.substring(0, 10) : ""
              }
            />
          </div>
          <div
            className="flex justify-between
          space-x-5 mt-5
          "
          >
            <button
              type="button"
              className="button !bg-red-600"
              onClick={handleDelete}
            >
              Delete
            </button>
            <button type="submit" className="button !bg-sky-600">
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }
  return <div></div>;
}

export default TaskBody;
