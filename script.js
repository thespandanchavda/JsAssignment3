// Get references to elements
const todoInput = document.getElementById('todoInput');
const addButton = document.getElementById('addButton');
const todoList = document.getElementById('todoList');

// Function to add a new to-do item
function addTodo() {
  const todoText = todoInput.value.trim();
  if (todoText !== '') {
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', toggleTodo);

    const todoTextElement = document.createElement('span');
    todoTextElement.textContent = todoText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', deleteTodo);

    todoItem.appendChild(checkbox);
    todoItem.appendChild(todoTextElement);
    todoItem.appendChild(deleteButton);

    todoList.appendChild(todoItem);
    todoInput.value = '';
  }
}

// Function to toggle the completed state of a to-do item
function toggleTodo(event) {
  const todoItem = event.target.parentNode;
  if (event.target.checked) {
    todoItem.classList.add('checked', 'green');
    playDingSound(); // Function to play the 'ding' sound when a to-do is checked
    todoList.appendChild(todoItem);
  } else {
    todoItem.classList.remove('checked', 'green');
    todoList.insertBefore(todoItem, todoList.firstChild);
  }
}

// Function to delete a to-do item
function deleteTodo(event) {
  const todoItem = event.target.parentNode;
  todoItem.classList.add('deleted', 'red');
  setTimeout(() => todoItem.remove(), 500);
}

// Function to play the 'ding' sound when a to-do is checked
function playDingSound() {
  const dingSound = new Audio('ding.mp3'); 
  dingSound.play();
}

// Event listener for the add button
addButton.addEventListener('click', addTodo);

// Event listener for Enter key press in the input field
todoInput.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    addTodo();
  }
});
