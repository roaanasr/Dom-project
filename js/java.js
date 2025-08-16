// const todolist=document.getElementById("todolist");
// const task1=document.getElementById("task1");
// const task2=document.getElementById("task2");
// const button=document.getElementById("btn");
// button.addEventListener("click",function(){
// //  todolist.textContent="";
// //  const task1=document.getElementById("task1");
// //  const task2=document.getElementById("task2");
// todolist.removeChild(task2)
// })  
const button=document.getElementById("btn");
const text=document.getElementById("inner-containe")
button.addEventListener("click",function(){
    const newDiv = document.createElement("div");
 newDiv.textContent = "hi";
 document.querySelector("#parentList").appendChild(newDiv);
  newDiv.style.border="solid ";
  newDiv.style.color="white ";
});
 function  deleteItem(){
    e.parentElement.remove()
 }

    
