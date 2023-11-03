const search_engine = document.getElementById("search-engine-div-one");
const search_engine_h3 = document.getElementById("searc-engine-h3-one");
const search_engine_inp = document.getElementById("inp-search-engine");
const createTasks = document.getElementById("Create");
const tasks_naimer = document.getElementById("tasks-container-naimer");
const txt_tasks_naimer_name = document.getElementById("inp-txt-tasks-name");
const aprove = document.getElementById("aprove-tasks-naimer");

while (true){
    search_engine_h3.hidden = false;
    tasks_naimer.hidden = true;
    break;
}

search_engine.addEventListener("click", function(){
    search_engine_h3.hidden = true;
    search_engine_inp.style.zIndex = 1;
    search_engine.style.borderColor = "transparent";
    search_engine_inp.style.borderColor = "black";
});

let Inode = 0;
let Imove = 39;
let Imoveh3 = 41;
let Inodeh3name = 0;
let IMGnode = 39;

createTasks.addEventListener("click", function(){
    Inode = Inode + 1;
    Imove = Imove + 7;
    Imoveh3 = Imoveh3 + 7;
    Inodeh3name = Inodeh3name + 1;
    IMGnode = IMGnode + 7;

    const txt_tasks_name = prompt("Enter task name: ");
    const txt_tasks_description = prompt("Enter task description: ");

    const tasks = document.createElement("div");
    tasks.style.position = "absolute";
    tasks.style.top = Imove+"%";
    tasks.style.left = "17%";
    tasks.style.borderColor = "black";
    tasks.style.borderWidth = "1px";
    tasks.style.borderStyle = "solid";
    tasks.style.width = "78%";
    tasks.style.height = "7%";
    tasks.style.backgroundColor = "white";
    tasks.id = "tasks"+Inode;

    // txt for tasks'names
    const txt_tasks_name_h3 = document.createElement("h3");
    txt_tasks_name_h3.innerHTML = txt_tasks_name;
    txt_tasks_name_h3.style.position = "absolute";
    txt_tasks_name_h3.style.top = Imoveh3+"%";
    txt_tasks_name_h3.style.left = "20%";
    txt_tasks_name_h3.style.color = "black";
    txt_tasks_name_h3.id = "tasks_h3"+Inodeh3name;

    // txt to create tasks'description
    const txt_description_task = document.createElement("h3");
    txt_description_task.innerHTML = txt_tasks_description;
    txt_description_task.style.position = "absolute";
    txt_description_task.style.top = Imoveh3+"%";
    txt_description_task.style.right = "17%";
    txt_description_task.style.color = "black";
    txt_description_task.id = "task_h3_one"+Inodeh3name;

    //create the check image
    const checkImage = document.createElement("img");
    checkImage.src = "./images/check-mark-emoji.png";
    checkImage.style.position = "absolute";
    checkImage.style.top = IMGnode+"%";
    checkImage.style.right = "12%";
    checkImage.id = "img-check-image"+Inodeh3name;
    checkImage.style.width = "40px";
    checkImage.style.height = "40px";

    document.body.appendChild(tasks);
    document.body.appendChild(txt_tasks_name_h3);
    document.body.appendChild(txt_description_task);
    document.body.appendChild(checkImage);
});