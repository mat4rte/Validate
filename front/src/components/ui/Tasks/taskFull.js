import React from "react";
import "./taskFull.css";
import TaskHeader from "./taskHeader";
import TaskBody from "./taskBody";
import { updateTaskStatus } from "../../../apis/TasksAPI";
import { updateTask } from "../../../apis/TasksAPI";
import { deleteTask } from "../../../apis/TasksAPI";

function Task({ index, task, deleteTaskLocal }) {
  const [collapsed, setCollapsed] = React.useState(true);

  const [done, setDone] = React.useState(task.done);

  function toggleCollapse() {
    setCollapsed(!collapsed);
  }

  async function toggleDone() {
    setDone(!done);
    if (done) {
      task.done = false;
    } else {
      task.done = true;
    }

    await updateTaskStatus(task);
  }

  function updateTaskLocal(set) {
    for (let key in set) {
      task[key] = set[key];
    }
  }

  return (
    <div
      className="task
    "
    >
      <TaskHeader
        key={index}
        task={task}
        done={done}
        toggleDone={toggleDone}
        toggleCollapse={toggleCollapse}
      />
      <TaskBody
        key={index}
        task={task}
        collapsed={collapsed}
        updateTask={updateTask}
        updateTaskLocal={updateTaskLocal}
        deleteTask={deleteTask}
        deleteTaskLocal={deleteTaskLocal}
      />
    </div>
  );
}

export default Task;

// id
// user_id
// name
// description
// estimated_duration
// tags
// project
// urgent
// priority
// done
// type
// habit_id
// date_limit
// date_created
