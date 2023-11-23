import React from "react";
import "./popup.css";
import Line from "./line.js";
import { createTask } from "../../apis/TasksAPI.js";

const CreateTaskPopup = ({ open, closePopup, insertTask }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    let task = {
      user_id: 1,
      name: e.target[0].value,
      description: e.target[1].value,
      estimated_duration: e.target[2].value,
      tags: e.target[3].value,
      project: e.target[4].value,
      priority: e.target[5].value,
      date_limit: e.target[6].value,
    };
    var response = await createTask(task);
    console.log(response);
    if (response.error) return console.log(response.error);
    else {
      task.id = response.data.id;
      insertTask(task);
      closePopup();
    }
  };

  return (
    <>
      {open && (
        <div className="popup">
          <div className="popup-inner">
            <div className="w-fit">
              <button className="button" onClick={closePopup}>
                Close
              </button>
            </div>
            <h1 className="text-center text-white text-2xl font-bold my-5">
              New task
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="top-form">
                <div className="task-name flex flex-col">
                  <input
                    className="button"
                    placeholder="Name"
                    type="text"
                    name="this.name"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label htmlFor="description"></label>
                  <textarea
                    placeholder="Description"
                    className="button !w-full resize-none"
                    name="this.description"
                  />
                </div>
              </div>
              <Line />
              <div className="bottom-form">
                <select name="this.estimatedTime" className="button">
                  <option value="">Estimated Time</option>
                  <option value="short">Short</option>
                  <option value="medium">Medium</option>
                  <option value="long">Long</option>
                </select>
                <select name="this.tags" className="button">
                  <option value="">Tags</option>
                  <option value="work">Work</option>
                  <option value="study">Study</option>
                  <option value="personal">Personal</option>
                </select>
                <select name="this.project" className="button">
                  <option value="">Project</option>
                  <option value="work">Work</option>
                  <option value="study">Study</option>
                  <option value="personal">Personal</option>
                </select>
                <select name="this.priority" className="button">
                  <option value="">Priority</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                  <option value="urgent">Urgent</option>
                </select>
                <input type="date" name="this.dateLimit" className="button" />
              </div>
              <div className="flex justify-end ">
                <button type="submit" className="button !bg-sky-600">
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateTaskPopup;

//Form fields for creating new task
//name
//description
//estimated time
//tags (select)
//project (select)
//priority
//date limit
