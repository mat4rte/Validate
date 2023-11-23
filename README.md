# Validate

Validate is a productivity-focused web application for managing tasks. This project includes both a backend API built with Express.js and a frontend application built with React.

## Getting Started

### Prerequisites
- Node.js (version X.X.X)
- npm (version X.X.X)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/validate.git
   cd validate
   ``````

2. Install backend dependencies:
    ```bash
    cd backend
    npm install
    ```

3. Install frontend dependencies:
    ```bash
    cd frontend
    npm install
    ```

## Features

- **Task Management:** Create, update, and delete tasks.
- **Tags:** Categorize tasks with tags for better organization.
- **User-Friendly Interface:** Intuitive design for a seamless user experience.

## API Endpoints

### Get All Tasks
- `/tasks`
  - **Method:** GET
  - **Description:** Get a list of all tasks.

### Get Task by ID
- `/tasks/:id`
  - **Method:** GET
  - **Description:** Get a task by its ID.

### Create New Task
- `/tasks`
  - **Method:** POST
  - **Description:** Create a new task.

### Update Task Status
- `/tasks/updatestatus`
  - **Method:** PUT
  - **Description:** Mark a task as done.

### Delete Task
- `/tasks`
  - **Method:** DELETE
  - **Description:** Delete a task.

### Update Task
- `/tasks`
  - **Method:** PATCH
  - **Description:** Update a task.

## Technologies Used

- **Backend:**
  - Express.js
  - Node.js
  - MySQL (as the database)

- **Frontend:**
  - React
  - React Router
  - Axios (for making HTTP requests)
