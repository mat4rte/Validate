import React, { useEffect } from "react";
import ListTasks from "../../components/ui/Tasks/listTasks";
import NewTask from "../../components/ui/Tasks/newTask";
import { getTasks } from "../../apis/TasksAPI";

function Tasks() {
  const [tasks, setTasks] = React.useState([]);

  const updateTasks = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  useEffect(() => {
    const retrieveTasks = async () => {
      const tasksTemp = await getTasks();
      setTasks(tasksTemp.data);
    };
    retrieveTasks();
  }, []);

  return (
    <>
      <div className="tasks-page flex flex-col items-center mx-60 gap-y-8">
        <ListTasks tasks={tasks} />
        <NewTask updateTasks={updateTasks} />
      </div>
    </>
  );
}

export default Tasks;
