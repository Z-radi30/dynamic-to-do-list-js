// Ensure the script runs after the HTML document has fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Select DOM elements and store them in constants
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");
  
    // Function to add a new task
    function addTask() {
      const taskText = taskInput.value.trim(); // Retrieve and trim the input value
  
      // Check if the input value is empty
      if (taskText === "") {
        alert("Please enter a task.");
        return;
      }
  
      // Create new task elements
      const li = document.createElement("li");
      li.textContent = taskText;
      li.classList.add("task-item"); // Add a class to the task item
  
      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.className = "remove-btn";
      removeButton.classList.add("btn", "btn-remove"); // Add multiple classes to the remove button
  
      // Set up the remove button to delete the task when clicked
      removeButton.onclick = function () {
        taskList.removeChild(li);
      };
  
      // Append the remove button to the task, and the task to the task list
      li.appendChild(removeButton);
      taskList.appendChild(li);
  
      // Clear the input field after adding the task
      taskInput.value = "";
    }
  
    // Attach event listeners to the "Add Task" button and the input field
    addButton.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        addTask();
      }
    });
  });

/*
// Setup Event Listener for Page Load
document.addEventListener("DOMContentLoaded", function () {
    // Select DOM Elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Load tasks from Local Storage
    loadTasks();

    // Create the addTask Function
    function addTask(taskText, save = true) {
        // Check if taskText is not empty
        if (!taskText) {
            alert("Please enter a task.");
            return;
        }

        // Task Creation and Removal
        // Create a new li element and set its textContent
        const listItem = document.createElement("li");
        listItem.textContent = taskText;

        // Create a new button element for removing the task
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.className = "remove-btn";

        // Assign an onclick event to the remove button
        removeButton.onclick = function () {
            taskList.removeChild(listItem);
            removeTaskFromLocalStorage(taskText);
        };

        // Append the remove button to the li element, then append the li to taskList
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        // If save is true, save the task to Local Storage
        if (save) {
            saveTaskToLocalStorage(taskText);
        }

        // Clear the task input field
        taskInput.value = "";
    }

    // Attach Event Listeners
    // Add event listener to addButton
    addButton.addEventListener("click", function() {
        const taskText = taskInput.value.trim();
        addTask(taskText);
    });

    // Add event listener to taskInput for the 'keypress' event
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            const taskText = taskInput.value.trim();
            addTask(taskText);
        }
    });

    // Load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
    }

    // Save task to Local Storage
    function saveTaskToLocalStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    // Remove task from Local Storage
    function removeTaskFromLocalStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        const updatedTasks = storedTasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }
});*/
