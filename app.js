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
        let statusUpdate = document.createElement("span");
        statusUpdate.innerText = item.status;

        // adding event listner for status update
        statusUpdate.addEventListener(("click"), () => {
            if (item.status == "pending") {
                item.status = "completed";
            } else {
                item.status = "pending";
            }
            render();
        });
        let removeBtn = document.createElement("button");
        removeBtn.innerText = "❎";

         removeBtn.addEventListener(("click"), () => {
            taskArr.splice(index, 1);
            render();
        });

        toDo.appendChild(statusUpdate);
        toDo.appendChild(removeBtn);
        ul.appendChild(toDo);    
    });
    };



