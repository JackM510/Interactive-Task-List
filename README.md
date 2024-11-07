# Web-Task-List
An interactive Task List Web page as part of the Web Development Fundamentals course on IBM SkillBuild.

This project uses minimal HTML and allows a user to dynamically add new tasks to the page using JavaScript. A new task can be added by adding an input value under the 'Add a task' element and selecting the 'Add' button or ENTER key. After selecting 'Add' or ENTER, JavaScript will handle the event and dynamically add HTML to a vacant div called '.tasks'. 

The script begins by checking that the HTML elements are loaded to the DOM before executing any functions on input elements. Afterwards, event listeners are added for the ENTER key and 'Add' button. The function called under each of these event listeners is named createTask(). The createTask() function simply checks that there is a value in the input field before calling addTask() and deleteTask(), otherwise an alert will display to the user to "Enter a task name and try again".

The addTask() function is used for creating a new task and accepts a parameter called 'taskSection', which is the div element where each new task is added (.tasks). The addTask() function uses the innerHTML method on the 'taskSection' element and appends a new task with the input value to the list. The deleteTask() function which was also called adds an onclick() function for the delete icon (next to each task) and also adds overflow to the 'taskSection' if necessary (when the .tasks div is populated with several tasks).

The updateTask() function is also referenced during the addTask() method for the checkbox elements under each task. The updateTask() function is used for adding a strikethrough to each task when the checkbox element is 'ticked'. 
