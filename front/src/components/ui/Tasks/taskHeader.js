import React from "react";
import "./taskHeader.css";
import DynamicInput from "./dynamicInput.js";

function TaskHeader({ index, task }) {
  const [collapsed, setCollapsed] = React.useState(true);

  const [done, setDone] = React.useState(task.done);

  function toggleCollapse() {
    setCollapsed(!collapsed);
  }

  function toggleDone() {
    console.log("toggleDone", done);
    setDone(!done);
  }

  function handleInputChange() {
    console.log("handleInputChange");
  }

  return (
    <div className="task-header flex flex-row justify-between bg-main rounded-3xl py-4 px-8 text-slate-100 align-center">
      <div className="flex flex-row gap-x-4">
        <button
          onClick={toggleDone}
          className={"check circle" + (done === true ? " done" : "")}
        ></button>
        <DynamicInput
          type={"text"}
          name="name"
          value={task.name}
          onChange={handleInputChange}
          placeholder="Task Name"
          className="name input-field"
        />
      </div>
      <div className="flex flex-row gap-x-4">
        {task.estimated_duration > 0 ? (
          <div className="flex flex-row items-center gap-x-2">
            <DynamicInput
              type={"number"}
              name="estimated_duration"
              value={task.estimated_duration}
              onChange={handleInputChange}
              placeholder="Duration"
              className="duration input-field"
            />
            <span className="duration">min</span>
          </div>
        ) : (
          ""
        )}
        <div className="date flex flex-row gap-x-1 bg-[#D9D9D9] rounded-full text-black px-2 items-center">
          {task.date_limit ? (
            <div className="day">{task.date_limit.split("T")[0]}</div>
          ) : (
            <div className="date">Sel. Date</div>
          )}
          <span className="m-0">|</span>
          <div className="choose-date">O</div>
        </div>
        <button onClick={toggleCollapse} className="open">
          {" "}
          &gt;{" "}
        </button>
      </div>
    </div>
  );
}

export default TaskHeader;

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
