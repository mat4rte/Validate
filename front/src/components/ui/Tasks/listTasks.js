import Task from "./taskFull";
import React, { useEffect } from "react";

import "./listTasks.css";

export default function ListTasks({ tasks, deleteTaskLocal }) {
  const [listTasks, setListTasks] = React.useState([]);

  useEffect(() => {
    async function parseTasks() {
      setListTasks(
        tasks.map((task, i) => {
          return <Task key={i} task={task} deleteTaskLocal={deleteTaskLocal} />;
        })
      );
    }
    parseTasks();
  }, [tasks]);

  return (
    <>
      <div id="list-tasks" className="flex flex-col gap-y-2 w-full">
        {listTasks && listTasks.length > 0 ? (
          listTasks
        ) : (
          <div className="text-white text-2xl font-bold my-5">
            No tasks to show
          </div>
        )}
      </div>
    </>
  );
}
