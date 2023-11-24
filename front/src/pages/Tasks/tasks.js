import React, { useEffect } from "react";
import ListTasks from "../../components/ui/Tasks/listTasks";
import NewTask from "../../components/ui/Tasks/newTask";
import { getTasksUnfinished } from "../../apis/TasksAPI";

function Tasks() {
  const [tasks, setTasks] = React.useState([]);

  const insertTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTaskLocal = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  useEffect(() => {
    const retrieveTasks = async () => {
      const tasksTemp = await getTasksUnfinished();
      setTasks(tasksTemp.data);
    };
    retrieveTasks();
  }, []);

  return (
    <>
      <div className="tasks-page flex flex-col items-center mx-60 gap-y-8">
        <ListTasks tasks={tasks} deleteTaskLocal={deleteTaskLocal} />
        <NewTask insertTask={insertTask} />
      </div>
    </>
  );
}

export default Tasks;
