let $addBtn; // task adding button
let $todoInput; // a place to write tasks
let $alertInfo; // information when the task place is empty
let $ulList; // our tasks list <ul>
let $newTask; // our tasks <li>
let $popup;
let $popupInfo;
let $addPopupBtn;
let $closeTodoBtn;



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

    

}
const prepareDOMEvents = () => {
    
    $addBtn.addEventListener('click', addNewTask);
    $ulList.addEventListener('click', checkClick);
    $closeTodoBtn.addEventListener('click', closePopup);
}

const addNewTask = () => {
    if($todoInput.value !== ''){
       $newTask = document.createElement('li');
       $newTask.innerText = $todoInput.value;
        $ulList.appendChild($newTask);
        $todoInput.value = '';
        $alertInfo.innerText = '';
        createToolsArea();

    }else { $alertInfo.innerText = "You haven't written any task"};


}

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

const checkClick = e => {
 if(e.target.closest('button').classList.contains('complete')){
    e.target.closest('li').classList.toggle('completed');
    e.target.closest('button').classList.toggle('completed');
 } else if (e.target.closest('button').className === 'edit') {
    editTask()
 } else if (e.target.closest('button').className === 'delete') {

 }
}

const editTask = () => {
    $popup.style.display = "flex";
}

const closePopup = () => {
  $popup.style.display = "none";
}



document.addEventListener('DOMContentLoaded', main)