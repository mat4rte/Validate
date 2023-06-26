import mysql from "mysql";

//TODO: criar env vars com dados
export const connection = mysql.createConnection({
  host: "localhost",
  user: "backend_server",
  password: "password",
  database: "validate",
});

connection.connect();

// connection.end()

function create_tasks_table() {
  connection.query(`CREATE TABLE Tasks(
    id int NOT NULL,
    user_id int NOT NULL,
    name varchar(100) NOT NULL,
    description varchar(255) NULL,
    estimated_duration int NULL,
    tags varchar(255) NULL,
    project varchar(255),
    urgent boolean,
    priority int NOT NULL,
    done boolean default 0,
    type varchar(50) NOT NULL,
    habit_id int(50),
    date_limit datetime,
    date_created datetime default CURRENT_TIMESTAMP,
    PRIMARY KEY(id)`);
}

function create_habits_table() {
  connection.query(
    `
    CREATE TABLE Habits(
      id int NOT NULL,
      user_id int NOT NULL,
      name varchar(100) NOT NULL,
      description varchar(255) ,
      tags varchar(255),
      project varchar(255),
      priority int,
      done boolean default 0,
      deleted boolean,
      recorrencia varchar(255) NOT NULL,
      date_end datetime,
      date_limit datetime,
      date_created datetime default CURRENT_TIMESTAMP,
      PRIMARY KEY(id)
    )
    `
  );
}

function create_user_table() {
  connection.query(
    `
    CREATE TABLE users(
      user_id int not null auto_increment primary key,
      name varchar(100) not null,
      password varchar(100) not null,
      email varchar(255),
      settings varchar(255),
      date_created datetime default CURRENT_TIMESTAMP
    )
    `
  );
}
