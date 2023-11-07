import Task from "./taskFull";
import React, { useEffect } from "react";

import "./listTasks.css";

export default function ListTasks({ tasks }) {
  const [listTasks, setListTasks] = React.useState([]);

  useEffect(() => {
    async function parseTasks() {
      setListTasks(
        tasks.map((task, i) => {
          return <Task key={i} task={task} />;
        })
      );
    }
    parseTasks();
  }, [tasks]);

  return (
    <>
      <div id="list-tasks" className="flex flex-col gap-y-2 w-full">
        {listTasks}
      </div>
    </>
  );
}
