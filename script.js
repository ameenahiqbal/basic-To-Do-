const taskInput = document.getElementById('taskInput');
const listItems = document.getElementById('list-items');
const addTaskBtn = document.querySelector('.btn');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const listItem = document.createElement('li'); // Create a new list item
    const checkbox = document.createElement('input'); // Create a checkbox
    checkbox.type = 'checkbox'; // Set checkbox type

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            listItem.classList.add('checked');
        } else {
            listItem.classList.remove('checked');
        }
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'x';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function () {
        listItem.remove(); // Remove the task when delete button is clicked
    });

    listItem.textContent = taskText; // Set the text content of the list item
    listItem.prepend(checkbox); // Add checkbox to the list item
    listItem.appendChild(deleteBtn); // Add delete button to the list item
    listItems.appendChild(listItem); // Append the list item to the unordered list

    taskInput.value = ''; // Clear the input field
}

addTaskBtn.addEventListener('click', addTask);

// Allow adding tasks by pressing Enter key
taskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});