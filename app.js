// Declaring Variables

const todoInput = document.querySelector(".todo-input");
const submitButton = document.querySelector(".Submit_button");
const todoContainer = document.querySelector(".todo-container");
const todoList = document.querySelector(".todo-list");
const selectMenu = document.querySelector(".selectmenu");
const removeCompletedtasks = document.querySelector(".removeCompleted"); 
const totalTasks = document.querySelector(".totalTasksCounter");
const completedTasks = document.querySelector(".completedCounter");

let totalTasksCounter = 0;
let compltedTasksCounter = 0;

// Adding event Listners

submitButton.addEventListener("click",addTodo);

todoList.addEventListener("click",deletecheck);

selectMenu.addEventListener("click",filterTodo);

removeCompletedtasks.addEventListener("click",removetasks);

// Functions

function addTodo(event){
    event.preventDefault();
    
    // make a new todo div
    const toDoDiv = document.createElement("div");
    toDoDiv.classList.add("todo-div");
    
    // Create LI
    const newToDo = document.createElement("li");
    newToDo.classList.add("todo-LI");
    newToDo.innerText=todoInput.value;
    toDoDiv.appendChild(newToDo);

    // create Compete buttom
    const completebtn = document.createElement("button");
    completebtn.classList.add('complete-btn');
    completebtn.innerHTML='<i class="fas fa-check"></i>';
    toDoDiv.appendChild(completebtn);

    // create trash buttom
    const trashbtn = document.createElement("button");
    trashbtn.classList.add('trash-btn');
    trashbtn.innerHTML='<i class="fas fa-trash"></i>';
    toDoDiv.appendChild(trashbtn);

    // append todoDIV to DIV todo-list
    todoList.appendChild(toDoDiv);

    // make toDoInput empty
    todoInput.value="";

    //increase total tasks counter
    totalTasksCounter+=1;
    totalTasks.innerText = totalTasksCounter;

}

function deletecheck(event){
    const currElement = event.target;
    const todo = currElement.parentElement;
    if(currElement.classList[0] === "complete-btn"){
        if(todo.classList.contains("completed")){
            todo.classList.toggle("completed");
            compltedTasksCounter-=1;
            completedTasks.innerText = compltedTasksCounter;
        }
        else{
            todo.classList.toggle("completed");
            compltedTasksCounter+=1;
            completedTasks.innerText = compltedTasksCounter;
        }
        
    }

    if(currElement.classList[0] === "trash-btn"){
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });

    }  
    
}

// func for Filtering ToDo according to the seclect menu

function filterTodo(e){
    const list = todoList.childNodes;

    const currclickedoption = e.target.value;


    for(let i=1; i<list.length; i++){
        if(currclickedoption === "all"){
            list[i].style.display = "flex";
        }
        else if(currclickedoption === "completed"){
            if(list[i].classList.contains("completed")){
                list[i].style.display = "flex";
            }
            else{
                list[i].style.display = "none";
            }
        }
        else{
            if(!list[i].classList.contains("completed")){
                list[i].style.display = "flex";
            }
            else{
                list[i].style.display = "none";
            }
        }
    }
    
}

function removetasks(e){
    e.preventDefault();
    const list = todoList.childNodes;
    let count=0;
    for(let i=1; i<list.length; i++){
        if(list[i].classList.contains("completed")){
            list[i].remove();
            count++;
        }
    }

    for(let i=1; i<list.length; i++){
        if(list[i].classList.contains("completed")){
            list[i].remove();
            count++;
        }
    }

    if(count===0){
        alert("No Tasks To Remove");
    }

}
 