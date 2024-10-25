var add = document.getElementById("add");
var task = document.querySelector(".task");

add.addEventListener("click", function () {
var taskInput = document.getElementById("task-input").value;

  // creacion del contenedor
var taskContainer = document.createElement("div");
taskContainer.classList.add("task-item");

  // creacion del input
var nuevaTarea = document.createElement("input");
nuevaTarea.textContent = taskInput;
nuevaTarea.classList.add("input-task");
taskContainer.appendChild(nuevaTarea);

var complete = document.createElement("button")
complete.classList.add("btn", "btn-complete");
complete.innerHTML = '<i class="bi bi-check-circle-fill"></i>'
taskContainer.appendChild(complete)

var edit = document.createElement("button")
edit.classList.add("btn", "btn-edit");
edit.innerHTML = '<i class="bi bi-pencil-fill"></i>'
taskContainer.appendChild(edit)

var eraser = document.createElement("button")
eraser.classList.add("btn" , "btn-edit")
eraser.innerHTML ='<i class="bi bi-trash-fill"></i>';
taskContainer.appendChild(eraser)



task.appendChild(taskContainer);
});
