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

// export async function getTask(id) {}

// function retrieveTasks(baseURL) {
//   try {
//     console.log("PEDIDO");
//     return axios
//       .get(baseURL)
//       .then((response) => {
//         if (!response) return false;
//         return response.data;
//       })
//       .catch(function (error) {
//         if (error.response) {
//           console.log(error.response.data);
//           throw new Error("Erro ao buscar as tarefas");
//         }
//       });
//   } catch (error) {
//     console.log("Error", error.message);
//     return false;
//   }
// }

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
