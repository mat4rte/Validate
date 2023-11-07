import { connection } from "./dbconnect.js";

export default class TasksService {
  constructor() {
    this.connection = connection;
  }

  async getTasks(body) {
    let select = body.select == undefined ? "*" : body.select;
    let where = body.where == undefined ? undefined : body.where;
    let sql_query = "SELECT " + select + " FROM Tasks";
    let sql_where = "";
    if (where != undefined)
      sql_where = this.prepare_sql_set_where(sql_query, undefined, where);
    sql_query += sql_where;

    console.log(sql_query);
    return new Promise((resolve, reject) => {
      this.connection.query(sql_query, (err, rows, fields) => {
        if (err) reject(err);
        else resolve(rows);
      });
    });
  }

  async createTask(body) {
    if (body == undefined) return false;
    let parsed_body = this.parse_request_body_create_task(body);
    let keys = parsed_body[0];
    let values = parsed_body[1];
    let sql_query = "INSERT INTO Tasks (" + keys + ") VALUES ( " + values + ")";

    console.log(sql_query);
    return new Promise((resolve, reject) => {
      this.connection.query(sql_query, (err, rows, fields) => {
        if (err) reject(err);
        else resolve(rows);
      });
    });
  }

  async updateTask(body) {
    let sql_query = "UPDATE Tasks";
    sql_query += this.prepare_sql_set_where(sql_query, body.SET, body.WHERE);
    console.log(sql_query);

    return new Promise((resolve, reject) => {
      this.connection.query(sql_query, (err, rows, fields) => {
        if (err) reject(err);
        else {
          resolve(rows);
        }
      });
    });
  }

  async deleteTask(body) {
    let where = body == undefined ? undefined : body;
    let sql_query = "DELETE FROM Tasks";
    sql_query += this.prepare_sql_set_where(sql_query, undefined, where);
    console.log(sql_query);
    return new Promise((resolve, reject) => {
      this.connection.query(sql_query, (err, rows, fields) => {
        if (err) reject(err);
        else resolve(rows);
      });
    });
  }

  parse_request_body_create_task(body) {
    Object.entries(body).forEach(([key, value]) => {
      if (value == "") delete body[key];
    });

    let keys = Object.keys(body).join();

    let values = Object.values(body)
      .map((value) => {
        if (typeof value == "string") return "'" + value + "'";
        return value;
      })
      .join();

    return [keys, values];
  }

  prepare_sql_get(where) {
    var i = 0;
    let sql_query = "";
    for (var key in where) {
      if (i == 0) {
        sql_query += "WHERE ";
        sql_query += key + " = " + where[key];
      } else sql_query += " AND " + key + " = " + where[key];

      i++;
    }
    return sql_query;
  }

  /**
   * Prepara o array para GET/UPDATE/DELETE (select, where / set, where / where)
   * @param {*} sql_query  - query sql
   * @param {Array} set - Array com colunas para SET
   * @param {Array} where - Array dados para filtrar colunas
   * @returns {String} - Retorna string com query em sql já tratada
   */
  prepare_sql_set_where(sql_query, set, where) {
    let set_string = "";
    let where_string = "";
    if (set !== undefined) set_string = " SET ";
    if (where !== undefined) where_string = " WHERE ";

    set_string += this.prepare_column_string(set, "set");
    where_string += this.prepare_column_string(where, "where");

    return set_string + where_string;
  }

  prepare_column_string(data, type) {
    let data_string = "";
    let i = 0;
    for (let key in data) {
      let value = data[key];
      if (typeof value == "string") value = "'" + value + "'";
      if (i != 0) {
        if (type == "set") data_string += ", ";
        if (type == "where") data_string += " AND ";
      }

      data_string += key + "=" + value;
      i++;
    }
    return data_string;
  }
}
