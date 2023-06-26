import express from "express";
import TaskController from "../controllers/taskController.js";
const router = express.Router();
let taskController = new TaskController();

// // middleware that is specific to this router
// router.use((req, res, next) => {
//   console.log('Time: ', Date.now())
//   next()
// })

// define the home page route
///task?select=id,name,priority&where[id]=1&where[name]="Ir aos Correis"
router.get("/", (req, res) => {
  exec_function("getTasks", req, res);
});

//Post de Task (cria uma task)
router.post("/", (req, res) => {
  exec_function("createTask", req, res);
});

//Apaga uma Task
router.delete("/", (req, res) => {
  exec_function("deleteTask", req, res);
});

//Atualiza uma
router.patch("/", (req, res) => {
  exec_function("updateTask", req, res);
});

export default router;

function exec_function(function_name, req, res) {
  taskController[function_name](req)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
}
