add = document.getElementById("add");
del = document.getElementById("delete");
let task;

onclick = function() {
  task = document.getElementById("task").value;
  if (task != "") {
    let li = document.createElement("li");
    let deletebtn = document.createElement("button");

    deletebtn.textContent = document.getElementById("delete");
    li.appendChild(document.createTextNode(task));
    li.appendChild(deletebtn);
    document.getElementById("list").appendChild(li);
    document.getElementById("task").value = "";
    deletebtn.onclick = function() {
        li.remove();
        }
    console.log(task);
  }
}