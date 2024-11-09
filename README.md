# Web-Interactive-Task-List
An interactive Task List Web page as part of the Web Development Fundamentals course on IBM SkillBuild. This project uses minimal HTML and allows a user to dynamically add new tasks to the page using JavaScript. 

There are three key files within this project:
- **index.html**
  - index.html is the primary page for the Task List application.
  - From this page a new task can be added by adding an input value under the 'Add a task' element and selecting the 'Add' button or ENTER key.
  - After selecting 'Add' or ENTER, JavaScript will handle the event and dynamically add HTML to a vacant div called '.tasks'. 
- **style.css**
  - style.css is the external stylesheet linked to the index.html file for applying some generic styles to the Task List application.
- **script.js**
  - script.js is an external JavaScript file linked to index.html.
  - This file is used to dynamically add HTML content to index.html when a user selects to either 'Add' or 'Delete' a task from the Task List.

**Overview of the script:**
- The script begins by checking that the HTML elements are loaded to the DOM before executing any functions on input elements.
  - Afterwards, event listeners are added for the ENTER key and 'Add' button. The function called under each of these event listeners is named createTask().
- The **createTask()** function simply checks that there is a value in the input field before calling the addTask() and deleteTask() functions.
  - Otherwise, if there is no input an alert will display to the user to "Enter a task name and try again".
- The **addTask()** function is used for creating a new task and accepts a parameter called 'taskSection', which is the div element where each new task is added (.tasks).
  - The addTask() function uses the innerHTML method on the 'taskSection' element and appends a new task with the input value to the list.
- The **deleteTask()** function which was also called through createTask() adds an onclick() function for the delete icon (which is next to each new task).
  - The deleteTask() function also adds overflow to the 'taskSection' if necessary (when the .tasks div is populated with several tasks).
- The **updateTask()** function is also referenced during the addTask() method and is assigned as an onclick function for the checkbox that is added to each new task.
  - The updateTask() function is adds a strikethrough to each task when the checkbox element is 'ticked'. 
