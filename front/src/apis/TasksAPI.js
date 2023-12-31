import axios from "axios";
import { resolve } from "./resolve.js";

const baseURL = "http://localhost:8080";

const TasksAPI = {
  getAllTasks: async () => {
    try {
      const response = await axios.get("/tasks");
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
};

export default TasksAPI;

export async function getTasks() {
  console.log("REQUEST GET TASKS");
  return await resolve(
    axios.get(parseArgumentsForTasksAPI(baseURL + "/task")).then((response) => {
      if (!response) return false;
      return response.data;
    })
  );
}

export async function getTasksUnfinished() {
  return await resolve(
    axios
      .get(parseArgumentsForTasksAPI(baseURL + "/task/unfinished"))
      .then((response) => {
        if (!response) return false;
        return response.data;
      })
  );
}

export async function createTask(task) {
  var f = await resolve(
    axios
      .post(baseURL + "/task", task)
      .then((response) => {
        if (!response) return false;
        return response.data;
      })
      .catch((error) => {
        return error;
      })
  );

  return f;
}

export async function updateTask(task) {
  return await resolve(
    axios
      .patch(baseURL + "/task/", task)
      .then((response) => {
        if (!response) return false;
        return response.data;
      })
      .catch((error) => {
        return error;
      })
  );
}

export async function deleteTask(task) {
  return await resolve(
    axios
      .delete(baseURL + "/task/", {
        data: {
          id: task.id,
        },
      })
      .then((response) => {
        if (!response) return false;
        return response.data;
      })
      .catch((error) => {
        return error;
      })
  );
}

export async function updateTaskStatus(task) {
  return await resolve(
    axios
      .put(baseURL + "/task/updatestatus", {
        id: task.id,
        done: task.done,
      })
      .then((response) => {
        if (!response) return false;
        return response.data;
      })
      .catch((error) => {
        return error;
      })
  );
}

// where[args.key] = args.value;
function parseArgumentsForTasksAPI(url, args = []) {
  if (args.length === 0) return url;
  if (args.length === 1)
    return (
      url +
      "?" +
      args.map((arg) => "where[" + arg.key + "]=" + arg.value).join("&")
    );
}
