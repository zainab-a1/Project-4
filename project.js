// Variables

const addTask = document.getElementById('add-task');
const taskConatiner = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');

// EVENT LISTENER FOR ADD BUTTON

addTask.addEventListener('click', function(){

    let task = document.createElement('div');
    task.classList.add('task');


    let li = document.createElement('li');
    li.innerText = inputTask.value;
    task.appendChild(li);

    let checkButton = document.createElement("button");
    checkButton.innerHTML = '<i class="fa-solid fa-check">';
    checkButton.classList.add('checkTask');
    task.appendChild(checkButton);


    let deleteButton= document.createElement("button");
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add('deleteTask');
    task.appendChild(deleteButton);

    let editButton = document.createElement("button");
    editButton.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
    editButton.classList.add('editTask');
    task.appendChild(editButton);


    if(inputTask.value === "") {
        alert("Please enter a task");
    }else {
        taskConatiner.appendChild(task);
    }

    inputTask.value = "";

    
// CHECK BUTTON

    checkButton.addEventListener('click', function(){


        if (checkButton.parentElement.style.textDecoration === "line-through") {
            checkButton.parentElement.style.textDecoration = "";
  
        } else {
            checkButton.parentElement.style.textDecoration = "line-through";


        }

    });

// DELETE BUTTON
    deleteButton.addEventListener('click', function(e){

        let target = e.target;

        task.remove();

        console.log(e);

    });

    // EDIT BUTTON
    editButton.addEventListener('click', function(e) {

        let target = e.target;
        task.edit();

    })
});
