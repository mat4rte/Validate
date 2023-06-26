//Funções de lógica para tratar dados recebidos
//Criar classe
import HabitService from "../services/habitService.js";
import TasksService from "../services/taskService.js";

export default class HabitController {
  constructor() {
    this.HabitService = new HabitService();
    this.tasksService = new TasksService();
  }

  async getHabits(data) {
    let habits = await this.HabitService.getHabits(data.query);
    return habits;
  }

  async createHabit(data) {
    let body = data.body;
    //Cria Task com recorrencia
    let result = await this.HabitService.createHabit(body);
    // console.log(result.sql);

    if (result.errno != undefined) {
      //Foi um erro
      // console.log(result.errno);
    }

    if (result.serverStatus == 2) {
      let insertedId = result.insertId;
      let task_data = this.prepare_create_task(insertedId, body);
      //cria tasks
      this.tasksService.createTask(task_data);
      // console.log(insertedId);
    }

    return result;
  }

  async deleteHabit(data) {
    let status = await this.HabitService.deleteHabit(data.body);
    return status;
  }

  async updateHabit(data) {
    //Apaga Tasks com id associado a este hábito

    //Cria Task com recorrencia
    let status = await this.HabitService.updateHabit(data.body);
    return status;
  }

  prepare_create_task(habitID, body) {
    let valid_columns = [
      "user_id",
      "name",
      "description",
      "tags",
      "project",
      "priority",
    ];

    let task_data = [];
    console.log(body);
    for (const key in body) {
      if (valid_columns.includes(key) && body[key]) {
        task_data[key] = body[key];
      }
    }
    task_data["type"] = "habit";
    task_data["habit_id"] = habitID;

    console.log(task_data);
    return task_data;
    // task_data[]
    // Habito
    // {
    //   user_id: 1,
    //   name: 'Corrida',
    //   description: 'Corrida',
    //   tags: 'exercicio',
    //   project: 'pessoal',
    //   priority: 3,
    //   recorrencia: 'diario',
    //   done: 0,
    //   date_end: '2023-05-20'
    // }
    //Task
    // {
    //   user_id: 11,
    //   name: 'Soco ao Helder7',
    //   description: 'Dar um soco ao helder',
    //   estimated_duration: '30',
    //   tags: 'lazer',
    //   project: 'escola',
    //   urgent: 0,
    //   priority: 1,
    //   done: 0,
    //   type: 'task',
    //   date_limit: '2023-03-28'
    // }
  }
}

// {
//  'type' : 'daily',
//  'every' : 2,
//  'data' : {
//
//  },
//  'hour' : "11:30",
//  'date_end' : 12/12/2024
// }

//A cada 3 semanas há segunda, quarta, quinta, sexta e domingo ás 10:30
// {
//  "type" : "weekly",
//  "every" : 3,
//  "days" : {
//    "seg" : 1,
//    "ter" : 0,
//    "qua" : 1,
//    "qui" : 1,
//    "sex" : 1,
//    "sab" : 0,
//    "dom" : 1
//  },
//  "hour" : "10:30",
//  'date_end' : "12/12/2024"
// }

// {
//  "type" : "mensal",
//  "every" : 1,
//  "days" : {
//
//  },
//  "hour" : "15:30",
//  "date_end" : "29/01/2024"
// }
