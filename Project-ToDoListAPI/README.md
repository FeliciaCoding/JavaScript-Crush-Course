# To-Do List with Backend Integration

## Description
This project is a simple to-do list application that allows users to add, edit, delete, and mark tasks as completed. The application interacts with a backend service to persist tasks, using the JSONPlaceholder API as a mock backend.

## Features
- **Add Tasks**: Users can add new tasks to their to-do list.
- **Edit Tasks**: Users can edit the title of existing tasks.
- **Delete Tasks**: Users can delete tasks from their to-do list.
- **Mark as Completed**: Users can mark tasks as completed or incomplete.
- **Persist Tasks**: Tasks are persisted using the JSONPlaceholder API.

## Technologies Used
- HTML
- CSS
- JavaScript
- JSONPlaceholder API

## Getting Started

### Prerequisites
To run this project, you will need a modern web browser and a text editor.

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/todo-list-with-backend.git
    ```
2. Navigate to the project directory:
    ```bash
    cd todo-list-with-backend
    ```

### Usage
1. Open the `index.html` file in your web browser to start the application.
2. Use the input field to add new tasks.
3. Click on the "Add Task" button to add the task to the list.
4. Use the "Complete" button to mark tasks as completed.
5. Use the "Edit" button to edit the title of a task.
6. Use the "Delete" button to remove a task from the list.

## Project Structure

    ```bash
    /todo-list-with-backend
    /index.html
    /styles.css
    /script.js
    ```

### index.html
The main HTML file that includes the structure of the to-do list application.

### styles.css
The CSS file that contains styles for the to-do list application.

### script.js
The JavaScript file that contains the logic for interacting with the JSONPlaceholder API and handling user interactions.

## API Reference
The application uses the JSONPlaceholder API to persist tasks. The following endpoints are used:

- **GET /todos**: Fetch all tasks.
- **POST /todos**: Add a new task.
- **PUT /todos/{id}**: Update an existing task.
- **DELETE /todos/{id}**: Delete a task.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) for providing the mock API used in this project.
- Inspiration from various to-do list tutorials and projects available online.

Feel free to fork this project and contribute by submitting pull requests. If you encounter any issues or have suggestions for improvements, please open an issue. Enjoy building your to-do list application!
