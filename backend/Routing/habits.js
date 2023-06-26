import express from "express";
import HabitController from "../controllers/habitController.js";
const router = express.Router();
let habitController = new HabitController();

// define the home page route
///habit?select=id,name,priority&where[id]=1&where[name]="Ir aos Correis"
router.get("/", (req, res) => {
  exec_function("getHabits", req, res);
});

//Post de Task (cria uma task)
router.post("/", (req, res) => {
  exec_function("createHabit", req, res);
});

//Apaga uma Task
router.delete("/", (req, res) => {
  exec_function("deleteHabit", req, res);
});

//Atualiza uma
router.patch("/", (req, res) => {
  exec_function("updateHabit", req, res);
});

export default router;

function exec_function(function_name, req, res) {
  habitController[function_name](req)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
}
