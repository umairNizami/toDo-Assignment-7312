if (!JSON.parse(localStorage.getItem("data"))) {
    var todos = [];
} else {
    var todos = JSON.parse(localStorage.getItem("data"));
}

function Todo(title, location, description) {
    this.title = title,
        this.location = location,
        this.description = description
}



function adding() {
    var tit = document.getElementById("tit").value;
    var loc = document.getElementById("location").value;
    var des = document.getElementById("description").value;

    var todo = new Todo(tit, loc, des);
    todos.push(todo);
    localStorage.setItem("data", JSON.stringify(todos));
    document.getElementById("tit").value = document.getElementById("location").value = document.getElementById("description").value = null;
    alert("ToDo has been Added");
}

function validate() {
    var tit = document.getElementById("tit").value;
    var loc = document.getElementById("location").value;
    var des = document.getElementById("description").value;

    if (tit == "" || loc == "" || des == "") {
        alert("Please Fill All The Field");
    } else {
        adding();
    }
}

if (!JSON.parse(localStorage.getItem("data"))) {
    var arr = [];
} else {

    var arr = JSON.parse(localStorage.getItem("data"));
}


for (var i = 0; i < arr.length; i++) {

    var tableRow = document.createElement("tr");
    tableRow.setAttribute("class", "blue lighten-4");
    var titleIdBox = document.createElement("td");
    var titleIdData = document.createTextNode(i + 1);
    var titleBox = document.createElement("th");
    var check = document.createElement("td");
    var titleData = document.createTextNode(arr[i].title);
    var locBox = document.createElement("td");
    var locData = document.createTextNode(arr[i].location);
    var descBox = document.createElement("td");
    var descData = document.createTextNode(arr[i].description);
    var controlBox = document.createElement("td");
    controlBox.innerHTML = "<a href='#' class='secondary-content'><i class='material-icons' onclick='del(this)' > close </i> </a>";

    //Append Data to show in the Box

    titleIdBox.appendChild(titleIdData);
    check.innerHTML = "<label><input type='checkbox' class='checkbox' onclick='lineThrough(this)' /><span></span></label>";
    titleBox.appendChild(titleData);
    locBox.appendChild(locData);
    descBox.appendChild(descData);

    tableRow.appendChild(titleIdBox);
    tableRow.appendChild(check);
    tableRow.appendChild(titleBox);
    tableRow.appendChild(locBox);
    tableRow.appendChild(descBox);
    tableRow.appendChild(controlBox);

    document.getElementById("tableBody").appendChild(tableRow);


}

function remove() {
    var delIndex = prompt("Enter ID to delete ToDo");
    if (delIndex <= arr.length) {

        arr.splice(delIndex - 1, "1");
        localStorage.setItem("data", JSON.stringify(arr));
        location.reload();
        alert("ToDo at ID " + delIndex + " has been removed");

    } else {
        alert(delIndex + " ID does not exist in ToDo list")
    }
}

function removeAll() {
    localStorage.removeItem("data");
    location.reload();
    alert("All ToDos has been removed");
}

function del(e) {
    var delIndex = e.parentElement.parentElement.parentElement.firstChild.innerText;
    arr.splice(delIndex - 1, "1");
    localStorage.setItem("data", JSON.stringify(arr));
    location.reload();
    alert("ToDo has been deleted");
}

function lineThrough(e) {
    if (e.checked) {
        for (var i = 0; i < 5; i++) {

            var lineIndex = e.parentElement.parentElement.parentElement.childNodes[i];
            lineIndex.style.textDecoration = "line-through";

        }
    } else {
        for (var i = 0; i < 5; i++) {

            var lineIndex = e.parentElement.parentElement.parentElement.childNodes[i];
            lineIndex.style.textDecoration = "none";

        }

    }
}
