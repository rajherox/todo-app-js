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
        let taskNode = document.createElement("span");
        let statusUpdate = document.createElement("span");

        taskNode.innerText = `${item.task}`;
        taskNode.classList.add("toDoChilds");
        statusUpdate.innerText = item.status;
        statusUpdate.classList.add("toDoChilds");

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
        removeBtn.classList.add("toDoChilds");

         removeBtn.addEventListener(("click"), () => {
            taskArr.splice(index, 1);
            render();
        });

        // Adding task edit functionality
        taskNode.addEventListener("click", () => {
            let editTask = document.createElement("input");
            editTask.value = item.task;
            
            // we can use only one of them or both 
            // editTask.addEventListener(("blur"), () => {
                //     item.task = editTask.value;
                //     render();
                // }) 
                // editTask.addEventListener(("keydown"),(e) => {
                    //     if (e.key === "Enter" ) {
                        //         item.task = editTask.value;
                        //         render();
                        //     };
                        // });

            // But using both can cause double execution issue
            // So
            function saveEdit() {
                item.task = editTask.value;
                render();
            };

            editTask.addEventListener(("keydown"), (e) => {
                if (e.key === "Enter") {
                    saveEdit();
                };
            });
            editTask.addEventListener("blur", saveEdit);

            toDo.replaceChild(editTask, taskNode);
            editTask.focus();
        });

        toDo.appendChild(taskNode);
        toDo.appendChild(statusUpdate);
        toDo.appendChild(removeBtn);
        ul.appendChild(toDo);    
    });
    };



