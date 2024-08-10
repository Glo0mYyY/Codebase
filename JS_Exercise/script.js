const tasks = []; // Initialize the tasks array if it doesn't exist

// Function to add a new task to the list
function addTask() {
    let inputField = document.getElementById("taskInput"); // Assuming the input field has an id of 'taskInput'
    if (inputField) {
        let taskText = inputField.value;
        if (taskText.trim() !== "") {
            tasks.push(taskText); // Add the new task to the tasks array
            inputField.value = ""; // Clear the input field after adding the task
            displayTaskList(); // Call the displayTaskList function after adding a new task
        }
    }
    else {
        console.error("Input field not found."); // Log an error if the input field is not found
    }
}

// Function to display the task list
function displayTaskList() {
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item"); // Bootstrap class for styling

    // Create a span for the task name
    const taskNameSpan = document.createElement("span");
    taskNameSpan.className = "task-name"; // Set class for the span
    taskNameSpan.textContent = task; // Set task description

    // Append the task name span to the li
    li.appendChild(taskNameSpan);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete"; // Button text
    deleteButton.classList.add("btn", "btn-primary", "ms-2"); // Bootstrap classes for styling and margin
    deleteButton.onclick = function () {
      // Define delete button click behavior here
      const task = deleteButton.parentElement;
      task.remove();
    };

    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete"; // Button text
    completeButton.classList.add("btn", "btn-success", "ms-2"); // Bootstrap classes for styling and margin
    completeButton.onclick = function () {
      // Modify complete button click behavior to only strike through the task name
      const task = completeButton.parentElement;
      const taskNameSpan = task.querySelector(".task-name"); // Find the span containing the task name
      if (taskNameSpan) {
        taskNameSpan.innerHTML = `<s>${taskNameSpan.textContent}</s>`; // Strike through the task name
      }
    };

    // Append buttons to the li
    li.appendChild(deleteButton);
    li.appendChild(completeButton);

    // Append the li to the task list
    taskList.appendChild(li);
  });
}
