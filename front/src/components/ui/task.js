import React from "react";
import "./task.css";

function Task({ index, task }) {
  console.log("Task", index, task.name);
  return (
    <div className="task-main">
      <div className="task-top">
        <h3>{task.name}</h3>
        <p>{task.tags}</p>
      </div>
      <div className="task-middle">
        <p>{task.estimated_duration}</p>
        <p>{task.date_limit}</p>
      </div>
      <div className="task-bottom">
        <p>{task.project}</p>
        {task.description}
      </div>
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
