# Vue To Do List

This project is a to do list created using Bootstrap and Vue.js.  
Each task is represented by a Javascript object containing the task itself and a boolean indicating whether or not the task has been completed.

Features include:

- Tasks being barred if they have been completed.  
- An "X" button for each task that eliminates it from the list.  
- An input bar to add new tasks to the list, either by clicking on the button or by pressing "Enter".  
- The ability to toggle tasks between the completed and the incomplete state by clicking on their text.

## Workflow

1. Add Vue, Bootstrap, and Font Awesome to the html.
2. Create base html structure using Bootstrap.
3. Use v-for to populate the list with Vue.
4. Use Vue class binding to add strikethrough to completed tasks.
5. Add "X" buttons that trigger the deleteTask function which removes the task from the array.
6. Use v-if & v-else to display a message when the list is empty.
7. Add input field. Use v-model to track its text and a button to call an addTask function that pushes the new task into the tasks array. "done" is set to "false" by default.
8. Use @keyup.enter to allow adding new tasks with Enter.
9. Create a toggleDone function that toggles the state of "done" for a given object. Activate it on click of a task.
10. Add v-cloak