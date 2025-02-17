// Ensure the HTML elements are loaded to the DOM before executing any functions
document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.querySelector("#newtask input");
    const taskSection = document.querySelector(".tasks");
    // Event listener for the enter key
    if (taskInput) {
      taskInput.addEventListener("keyup", (e) => {
        if (e.key === "Enter") {
          createTask(taskInput, taskSection);
        }
      });
    }
    // Event listener for the 'Add' button
    const pushButton = document.querySelector("#push");
    if (pushButton) {
      pushButton.onclick = function () {
        createTask(taskInput, taskSection);
      };
    }
  });

// Create a new task when the 'Add' button or ENTER key is pressed
function createTask(taskInput, taskSection) {
    if (taskInput.value.length == 0) {
        alert("The task field is blank. Enter a task name and try again.");
    }
    else {
        addTask(taskSection);
        deleteTask(taskSection); 
    }
}

// Add a new task to the .tasks div
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

// Delete a task from the task list and adds an onclick listener for the .delete icon
function deleteTask(taskSection) {
  var current_tasks = document.querySelectorAll(".delete");
        for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function () {
                this.parentNode.remove();
            }
        }
        // Add or remove overflow to the taskSection
        taskSection.offsetHeight >= 300
        ? taskSection.classList.add("overflow")
        : taskSection.classList.remove("overflow");
}

// Add a strikethrough for a completed task
function updateTask(task) {
    let taskItem = task.parentElement.lastElementChild;
    if (task.checked) {
        taskItem.classList.add("checked");
    }
    else {
        taskItem.classList.remove("checked");
    }
}
