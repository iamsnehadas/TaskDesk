const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

addTaskButton.addEventListener('click', addTask);
newTaskInput.addEventListener('keyup', function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    addTask();
  }
});

function addTask() {
  const taskText = newTaskInput.value.trim();
  if (taskText) {
    const task = document.createElement('li');
    task.classList.add('task');
    task.innerHTML = `
      <input type="checkbox">
      <span class="task-text">${taskText}</span>
      <button onclick="toggleSubtask(this)">Add Subtask</button>
      <div class="subtask">
        <input type="text" placeholder="Add subtask...">
        <button onclick="addSubtask(this)">Add</button>
      </div>
      <ul class="subtask-list"></ul>
      <button onclick="deleteTask(this)">Delete</button>
    `;
    taskList.appendChild(task);
    newTaskInput.value = '';
  }
}

function toggleSubtask(button) {
  const subtask = button.nextElementSibling;
  subtask.style.display = subtask.style.display === 'none' ? 'block' : 'none';
}

function addSubtask(button) {
  const subtaskList = button.parentElement.previousElementSibling;
  const subtaskText = button.previousElementSibling.value.trim();
  if (subtaskText) {
    const subtask = document.createElement('li');
    subtask.innerHTML = `
      <input type="checkbox">
      <span class="subtask-text">${subtaskText}</span>
      <button onclick="deleteSubtask(this)">Delete</button>
    `;
    subtaskList.appendChild(subtask);
    button.previousElementSibling.value = '';
  }
}


function deleteSubtask(button) {
  button.parentElement.remove();
}


function deleteTask(button) {
  const task = button.parentElement;
  task.remove();
}