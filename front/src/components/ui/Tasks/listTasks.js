import Task from "./taskFull";
import React, { useEffect } from "react";
import { getTasks } from "../../../apis/TasksAPI.js";

import "./listTasks.css";

export default function ListTasks() {
  const [listTasks, setListTasks] = React.useState([]);

  useEffect(() => {
    async function fetchTasks() {
      const tasks = await getTasks();
      var tsksF = tasks.data.map((task, i) => {
        return <Task key={i} task={task} />;
      });
      setListTasks(tsksF);
    }
    fetchTasks();
  }, []);

  return (
    <>
      <div id="list-tasks" className="flex flex-col gap-y-2">
        {listTasks}
      </div>
    </>
  );
}
