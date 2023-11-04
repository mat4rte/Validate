import React from "react";
import "./taskFull.css";
import TaskHeader from "./taskHeader";
import TaskBody from "./taskBody";

function Task({ index, task }) {
  const [collapsed, setCollapsed] = React.useState(true);

  const [done, setDone] = React.useState(task.done);

  function toggleCollapse() {
    setCollapsed(!collapsed);
  }

  function toggleDone() {
    setDone(!done);
  }

  return (
    <div className="task mx-80">
      <TaskHeader key={index} task={task} />
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
