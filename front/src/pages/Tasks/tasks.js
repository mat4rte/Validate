import React from "react";
import ListTasks from "../../components/ui/Tasks/listTasks";

function Tasks() {
  return (
    <>
      <div className="tasks-page flex flex-col items-center mx-60 gap-y-8">
        <ListTasks />
      </div>
    </>
  );
}

export default Tasks;
