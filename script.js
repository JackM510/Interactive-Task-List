//ensure the HTML elements are loaded to the DOM before executing any functions on input elements
document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.querySelector("#newtask input"); //the input element for a new task
    const taskSection = document.querySelector(".tasks"); //the .tasks div where new tasks are added
    //event listener for the enter key when #newtask input is populated
    if (taskInput) {
      taskInput.addEventListener("keyup", (e) => {
        if (e.key === "Enter") {
          createTask(taskInput, taskSection);
        }
      });
    }
    //event listener for #push, the 'Add' button
    const pushButton = document.querySelector("#push");
    if (pushButton) {
      pushButton.onclick = function () {
        createTask(taskInput, taskSection);
      };
    }
  });

//function to create a new task in the list when the 'Add' button or ENTER key is pressed
//this function checks the input is populated before calling the addTask() and deleteTask() functions
function createTask(taskInput, taskSection) {
    if (taskInput.value.length == 0) {
        alert("The task field is blank. Enter a task name and try again.");
    }
    else {
        addTask(taskSection);
        deleteTask(taskSection); 
    }
}

//function to add a new task to the .tasks div
function addTask(taskSection) {
  //create the HTML elements for a new task and append them to the .tasks section
  taskSection.innerHTML +=
  `<div class="task">
  <label id="taskname">
  <input onclick="updateTask(this)" type="checkbox" id="check-task">
  <p>${document.querySelector('#newtask input').value}</p>
  </label>
  <div class="delete">
  <i class="uil uil-trash"></i></div></div>`;
}

//function to delete a task for the task list
//this function also adds an onclick listener for the .delete icon on each task
function deleteTask(taskSection) {
  var current_tasks = document.querySelectorAll(".delete");
        for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function () {
                this.parentNode.remove();
            }
        }
        //ternary statement to add/remove overflow to the taskSection
        taskSection.offsetHeight >= 300
        ? taskSection.classList.add("overflow")
        : taskSection.classList.remove("overflow");
}

//function to add a strikethrough for a completed task
function updateTask(task) {
    let taskItem = task.parentElement.lastElementChild;
    if (task.checked) {
        taskItem.classList.add("checked");
    }
    else {
        taskItem.classList.remove("checked");
    }
}
