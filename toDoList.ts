function todofunc() {
    let taskElement = <HTMLInputElement>document.getElementById('input');
    let task: string = taskElement.value;
    document.getElementById('lists').innerHTML += `<p>${task}</p>`;
    taskElement.value = '';
}

function reset() {
    let list = <HTMLInputElement>document.getElementById('lists');
    if(list.children.length > 0){
        list.children[0].remove();
    }
}