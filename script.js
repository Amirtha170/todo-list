function addTask(){
    let input = document.getElementById("taskInput");
    let task=input.value;

     if(task ===""){
        alert("please enter a task");
        return;
     }
     let li = document.createElement("li");
     li.innerHTML =task;
     li.onclick =function(){
        li.classList.toggle("completed");
     };
     let deleteBtn = document.createElement("button");
     deleteBtn.innerHTML ="delete";
     deleteBtn.onclick = function (){
        li.remove();
     };
     li.appendChild(deleteBtn);
     document.getElementById("tasklist").appendChild(li);

     input.value = "";
}