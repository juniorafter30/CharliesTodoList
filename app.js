let $addBtn; // task adding button
let $todoInput; // a place to write tasks
let $alertInfo; // information when the task place is empty
let $ulList; // our tasks list <ul>
let $newTask; // our tasks <li>


const main = () => {
    prepareDOMElements()
    prepareDOMEvents()
}

const prepareDOMElements = () => {
    $addBtn = document.querySelector('.addBtn')
    $todoInput = document.querySelector('.todoInput')
    $alertInfo = document.querySelector('.alertInfo')
    $ulList = document.querySelector('.todoList ul')

}
const prepareDOMEvents = () => {

    $addBtn.addEventListener('click', addNewTask)
    
}

const addNewTask = () => {
    if($todoInput.value !== ''){
       $newTask = document.createElement('li');
       $newTask.innerText = $todoInput.value;
        $ulList.appendChild($newTask);
        $todoInput.value = '';
        $alertInfo.innerText = '';

    }else { $alertInfo.innerText = "You haven't written any task"};
}

document.addEventListener('DOMContentLoaded', main)