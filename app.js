let taskInput = document.getElementById("taskInput");
let button = document.getElementById("addbtn");
let ul = document.getElementById("todoContainer");

// Adding tasks to To-do array
let taskArr = [];
button.addEventListener(("click"), () => {

    taskArr = taskInput.value;
    console.log(taskArr);

    //  Creating To-do nodes
    let toDo = document.createElement("li");
    function toDoNodes ( ) {
        toDo.innerText = taskArr;
    }
    
    // rendering lis to DOM
    function render ( ) {
        ul.appendChild(toDo);
        taskInput.value = "";
    }

    /* -------------- Adding additonal functionalites ---------------- */

    // Removing to-do node on User's request
    function removeToDo ( ) {
        const removeBtn = document.createElement("button");
        removeBtn.innerText = "❎";
        toDo.appendChild(removeBtn);

        removeBtn.addEventListener(("click"), () => {
            toDo.remove();
        });
    }

    toDoNodes( );
    render ( );
    removeToDo( );
});



