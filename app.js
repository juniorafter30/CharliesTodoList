let $addBtn; // task adding button
let $todoInput; // a place to write tasks
let $alertInfo; // information when the task place is empty
let $ulList; // our tasks list <ul>
let $newTask; // our tasks <li>
let $popup; // popup where we gonna edit our tasks
let $popupInfo; //information if task field is empty or not
let $editedTodo; // the content of todo we want to edit
let $addPopupBtn; // our accepting button
let $closeTodoBtn; // button to close popup
let $idNumber = 0; // used to manage unique id for every new task
let $allTasks; // all new added <li>



const main = () => {
    prepareDOMElements()
    prepareDOMEvents()

}

const prepareDOMElements = () => {

    $addBtn = document.querySelector('.addBtn')
    $todoInput = document.querySelector('.todoInput')
    $alertInfo = document.querySelector('.alertInfo')
    $ulList = document.querySelector('.todoList ul')
    $popup = document.querySelector('.popup');
    $popupInfo = document.querySelector('.popupInfo');
    $popupInput = document.querySelector('.popupInput');
    $addPopupBtn= document.querySelector('.accept');
    $closeTodoBtn = document.querySelector('.cancel');
    $allTasks = $ulList.getElementsByTagName('li');
    

    
}
const prepareDOMEvents = () => {
    
    $addBtn.addEventListener('click', addNewTask);
    $ulList.addEventListener('click', checkClick);
    $closeTodoBtn.addEventListener('click', closePopup);
    $addPopupBtn.addEventListener('click', changeTodo);
    $todoInput.addEventListener('keyup', enterCheck);


}

const addNewTask = () => {
    if($todoInput.value !== ''){
        $idNumber++
        $newTask = document.createElement('li');
        $newTask.innerText = $todoInput.value;
        $newTask.setAttribute('id', `todo-${$idNumber}`)
        $ulList.appendChild($newTask);

        $todoInput.value = '';
        $alertInfo.innerText = '';
        createToolsArea();

    }else { $alertInfo.innerText = "You haven't written any task"};


}

//checking if user clicked enter

const enterCheck = () => {
    if(event.keyCode === 13){
        addNewTask();
    }

}

// adding our font-awesome tools to every task
const createToolsArea = () => {
    const toolsPanel = document.createElement('div');
    toolsPanel.classList.add('tools')
    $newTask.appendChild(toolsPanel)

    const completeBtn = document.createElement('button');
    completeBtn.classList.add('complete')
    completeBtn.innerHTML = '<i class="fas fa-check"></i>'

    const editBtn = document.createElement('button');
    editBtn.classList.add('edit')
    editBtn.innerText = 'EDIT';

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete');
    deleteBtn.innerHTML = '<i class="fas fa-times"></i>'

    toolsPanel.appendChild(completeBtn)
    toolsPanel.appendChild(editBtn)
    toolsPanel.appendChild(deleteBtn)

}
// buttons clicking options
const checkClick = e => {
 if(e.target.closest('button').classList.contains('complete')){
    e.target.closest('li').classList.toggle('completed');
    e.target.closest('button').classList.toggle('completed');
 } else if (e.target.closest('button').className === 'edit') {
    editTask(e)
 } else if (e.target.closest('button').className === 'delete') {
    deleteTask(e);

 }
}

//open popup to edit our task
const editTask = e => {
    const oldTodo = e.target.closest('li').id;
    $editedTodo = document.getElementById(oldTodo);
    $popupInput.value = $editedTodo.firstChild.textContent;

    $popup.style.display = "flex";
}

//changing the input content
const changeTodo = () => {
    if ($popupInput.value !== '') {
        $editedTodo.firstChild.textContent = $popupInput.value;
        $popup.style.display = "none";
        $popup.innerHTML = "";
    } else {
        $popupInfo.innerText = "You have to write something!"
    }
}

//closing our editing popup
const closePopup = () => {
  $popup.style.display = "none";
  $popup.innerHTML = "";
    
}

//deleting tasks
const deleteTask = e => {
    const deleteTodo = e.target.closest('li');
    deleteTodo.remove();

    if($allTasks.length === 0) {
        $alertInfo.innerText = 'No tasks so far, add something :)';
    }
}



document.addEventListener('DOMContentLoaded', main)