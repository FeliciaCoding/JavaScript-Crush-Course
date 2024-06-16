// {JSON} Placeholder API : https://jsonplaceholder.typicode.com/

// Define and add token to Fetch Request 
// token : 09W8XKZHKdOfEbC9d3FLqYT2pwnm4S0Xoe6kW4me

// headers: { ... }: This specifies the HTTP headers to be included with the request. 
//                   Headers provide additional information about the request, such as 
//                   the type of content being sent or the type of response expected.

// 'Authorization': Bearer ${apiToken}`:
//       `Authorization` header is commonly used to send credentials to authenticate a user or a service.
//       `Bearer` is a type of token commonly used for authentication.

const apiUrl = "https://jsonplaceholder.typicode.com/todos";
const myToken= "09W8XKZHKdOfEbC9d3FLqYT2pwnm4S0Xoe6kW4me "; 

fetch(apiUrl,{
    headers : {
        "authorization" : `Bearer ${myToken}`
    } 
})
    .then(response => response.json())
    .then(json => {
        console.log("RunJson");
        console.log(json)
    })

// Add Task c

// Edit Task 

// Delete Task 

// Marked as complete 

// main function 

