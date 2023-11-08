import React from "react";
import "./taskFull.css";
import TaskHeader from "./taskHeader";
import TaskBody from "./taskBody";
import { updateTaskStatus } from "../../../apis/TasksAPI";

function Task({ index, task }) {
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

  return (
    <div className="task">
      <TaskHeader key={index} task={task} done={done} toggleDone={toggleDone} />
      <TaskBody key={index} task={task} />
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
