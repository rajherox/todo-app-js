let taskInput = document.getElementById("taskInput");
let button = document.getElementById("addbtn");
let ul = document.getElementById("todoContainer");

let taskArr = [];
button.addEventListener(("click"), () => {

    // Adding taks to our newTask ( An array of objects).
    let newTask = {
        task: taskInput.value,
        status: "pending"
    };
    taskArr.push(newTask);
    taskInput.value = "";
    render ( );
});

// Rendering 
function render () {
        ul.innerHTML = "";
        taskArr.forEach((item, index) => {
        let toDo = document.createElement("li");
        toDo.innerText = `${item.task} - ${item.status}`;

        let removeBtn = document.createElement("button");
        removeBtn.innerText = "❎";

         removeBtn.addEventListener(("click"), () => {
            taskArr.splice(index, 1);
            render();
        });
        toDo.appendChild(removeBtn);
        ul.appendChild(toDo);    
    });
    };



