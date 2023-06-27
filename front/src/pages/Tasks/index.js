import React from "react";
import axios from "axios";
import Task from "../../components/ui/task";
import './tasks.css'
const baseURL = "http://localhost:8000/task";

function Tasks() {
  const [tasks, setTasks] = React.useState([]);
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      // console.log(response)
      setTasks(response.data);
    }); 
  }, []);

  if (!tasks) return null;
 
  const listTasks = tasks.map((task,i) => {
    return <Task key={i} task={task} />;
  })
  return (
    <>
    <div className="tasks-page">
      <h1>Tasks</h1>
      <div>{listTasks}</div>
    </div>


      {/* {tasks.map((task, i) => {
        return <Task key={i} task={task} />;
      })} */}
    </>
  )
}

export default Tasks;
