import React from "react";
import "./taskHeader.css";
import DynamicInput from "./dynamicInput.js";

function TaskHeader({ index, task, done, toggleDone, toggleCollapse }) {
  function handleInputChange() {
    console.log("handleInputChange");
  }

  return (
    <div className="task-header flex flex-row justify-between bg-main rounded-3xl py-4 px-8 text-slate-100 align-center relative z-10">
      <div className="flex flex-row gap-x-4 items-center">
        <button
          onClick={toggleDone}
          className={"check circle" + (task.done ? " done" : "")}
        ></button>
        <span
          className={"name" + (task.done ? " line-through text-slate-300" : "")}
        >
          {task.name}
        </span>
      </div>
      <div className="flex flex-row gap-x-4">
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
