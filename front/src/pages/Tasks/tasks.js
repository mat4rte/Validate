import React from "react";
import ListTasks from "../../components/ui/Tasks/listTasks";

function Tasks() {
  return (
    <>
      <div className="tasks-page flex flex-col">
        <ListTasks />
        <div className="">
          <button className="btn btn-primary">+</button>
        </div>
      </div>
    </>
  );
}

export default Tasks;
