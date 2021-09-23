const input = document.querySelector('.input-text');
const submit = document.querySelector('.submit-task');
const tasks = document.querySelector('.tasks');

submit.addEventListener('click', addTask);
tasks.addEventListener('click', deleteATask);

function addTask(event) {
    event.preventDefault();
    if (input.value === "") {
        alert("Task can't be empty!");
        return false;
    }
    const div = document.createElement("div");
    div.classList.add("containerTask");
    const taskName = document.createElement("li");
    taskName.classList.add("taskName");
    taskName.innerText = ` ${input.value} `;
    div.appendChild(taskName);
    const compeletedTask = document.createElement('button');
    compeletedTask.innerHTML = '<img src="https://cdn.pixabay.com/photo/2016/03/31/14/37/check-mark-1292787__340.png" width="20rem" class="tick">';
    compeletedTask.classList.add("tick-mark");
    div.appendChild(compeletedTask);
    const deleteTask = document.createElement('button');
    deleteTask.innerHTML = '<img src="https://www.pngall.com/wp-content/uploads/6/Delete-Button-PNG-High-Quality-Image.png" width="20rem" class="trash">';
    deleteTask.classList.add("trash-mark");
    div.appendChild(deleteTask);
    tasks.appendChild(div);
    input.value="";
}

function deleteATask(e){
    const item = e.target;
    if(item.classList[0] === 'trash-mark') {
        const task = item.parentElement;
        task.remove();
    }
    if(item.classList[0] === 'tick-mark') {
    const task = item.parentElement;
    task.classList.toggle('completed');
    }
}
