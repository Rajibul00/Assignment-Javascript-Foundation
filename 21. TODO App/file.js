const todoInput = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");
const todoList = document.getElementById("todo-list");

addButton.addEventListener("click", function() {
  const todoText = todoInput.value;
  if (todoText.trim() !== "") {
    const li = document.createElement("li");
    li.textContent = todoText;
    todoList.appendChild(li);
    todoInput.value = "";
  }
});
