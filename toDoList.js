function todofunc() {
    var taskElement = document.getElementById('input');
    var task = taskElement.value;
    document.getElementById('lists').innerHTML += "<p>" + task + "</p>";
    taskElement.value = '';
}
function reset() {
    var list = document.getElementById('lists');
    if (list.children.length > 0) {
        list.children[0].remove();
    }
}
