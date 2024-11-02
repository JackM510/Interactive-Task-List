//ensure the HTML elements are loaded to the DOM before executing any functions on input elements
document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.querySelector("#newtask input");
    const taskSection = document.querySelector(".tasks");
    //event listener for the enter key when the #newtask input is populated
    if (taskInput) {
      taskInput.addEventListener("keyup", (e) => {
        if (e.key === "Enter") {
          createTask(taskInput, taskSection);
        }
      });
    }
    //event listener for the Add button #push
    const pushButton = document.querySelector("#push");
    if (pushButton) {
      pushButton.onclick = function () {
        createTask(taskInput, taskSection);
      };
    }
  });

//function that creates a task
function createTask(taskInput, taskSection) {
    if (taskInput.value.length == 0) {
        alert("The task field is blank. Enter a task name and try again.");
    }
    else {
        addTask(taskSection);
        deleteTask(taskSection); 
    }
}

//function to add a task
function addTask(taskSection) {
  //insert HTML that creates each task into the task area div element
  taskSection.innerHTML +=
  `<div class="task">
  <label id="taskname">
  <input onclick="updateTask(this)" type="checkbox" id="check-task">
  <p>${document.querySelector('#newtask input').value}</p>
  </label>
  <div class="delete">
  <i class="uil uil-trash"></i></div></div>`;
}

//function to delete a task
function deleteTask(taskSection) {
  var current_tasks = document.querySelectorAll(".delete");
        for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function () {
                this.parentNode.remove();
            }
        }
        taskSection.offsetHeight >= 300
        ? taskSection.classList.add("overflow")
        : taskSection.classList.remove("overflow");
}

//function to add strikethrough for a completed task
function updateTask(task) {
    let taskItem = task.parentElement.lastElementChild;
    if (task.checked) {
        taskItem.classList.add("checked");
    }
    else {
        taskItem.classList.remove("checked");
    }
}