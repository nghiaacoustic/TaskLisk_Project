var valid = new Validation();
var taskList = new TaskList();
getLocalStorage();

function getEle(id) {
    return document.getElementById(id);
}

function taoBang(arr) {
    var todo = "";
    var completed = "";
    getEle("todo").innerHTML = "";
    getEle("completed").innerHTML = "";
    arr.forEach(function(item) {
        if (item.status === "todo") {
            todo += createHTML(item);
            getEle("todo").innerHTML = todo;
        } else if (item.status === "completed") {
            completed += createHTML(item);
            getEle("completed").innerHTML = completed;
        }
    });
}
getEle("addItem").addEventListener("click", function() {
    var input = getEle("newTask").value;
    var isValid = true;
    isValid &= valid.isEmpty(input, "notiInput", "(*) Vui lòng nhập nội dung") && valid.checkDup(input, "notiInput", "Task này đã có trong List", taskList.arr);
    if (!isValid) return;

    var id = Math.random();
    var task = new Task(id, input, "todo");
    taskList.addTask(task);
    taoBang(taskList.arr);
    setLocalStorage();
});

function createHTML(item) {
    return `<li>
      <span>${item.name}</span>
      <div class="buttons">
        <button
          class="remove"
          onclick="deleteTask(${item.id})"
        >
          <i class="fa fa-trash-alt"></i>
        </button>
        <button
          class="complete"
          onclick="changeStatus(${item.id})"
        >
          <i class="far fa-check-circle"></i>
          <i class="fas fa-check-circle"></i>
        </button>
      </div>
    </li>`;
}

function changeStatus(id) {
    var task = taskList.FindTask(id);
    task.status = "todo" ? "completed" : "todo";
    taskList.updateTask(task);
    taoBang(taskList.arr);
    setLocalStorage();
}

function deleteTask(id) {
    taskList.deleteTask(id);
    taoBang(taskList.arr);
    setLocalStorage();
}

function setLocalStorage() {
    localStorage.setItem("TaskList", JSON.stringify(taskList.arr));
}

function getLocalStorage() {
    if (localStorage.getItem("TaskList")) {
        taskList.arr = JSON.parse(localStorage.getItem("TaskList"));
        taoBang(taskList.arr);
    }
}