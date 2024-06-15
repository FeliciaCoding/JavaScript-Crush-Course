// {JSON} Placeholder API : https://jsonplaceholder.typicode.com/

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => {
        console.log("RunJson");
        console.log(json.message);
    })

// Add Task c

// Edit Task 

// Delete Task 

// Marked as complete 

// main function 

