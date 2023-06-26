//Funções de lógica para tratar dados recebidos
//Criar classe
import TasksService from "../services/taskService.js";

export default class TaskController {
  constructor() {
    this.tasksService = new TasksService();
  }

  async getTasks(data) {
    let tasks = await this.tasksService.getTasks(data.query);
    return tasks;
  }

  async createTask(data) {
    let result = await this.tasksService.createTask(data.body);
    return result;
  }

  async deleteTask(data) {
    let status = await this.tasksService.deleteTask(data.body);
    return status;
  }

  async updateTask(data) {
    let status = await this.tasksService.updateTask(data.body);
    return status;
  }
}
