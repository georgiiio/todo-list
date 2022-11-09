const todoList = [
  {
    title: 'Learn Serbian',
    isCompeleted: false,
  }, 
  {
    title: 'Learn Eng',
    isCompeleted: true,
  }, 
]

let tasksElement, buttonElement, intputTitle, todoForm

function renderTodoItem (parentElement, todoItem, index){
  parentElement.innerHTML = parentElement.innerHTML + `<li class="item ${todoItem.isCompeleted ? 'completed' : ''}" data-idx="${index}">
  <p>${todoItem.title}</p>
  <div class="item-btn">
    <i class="fa-solid fa-pen-to-square item-complete"></i>
    <i class="fa-solid fa-xmark item-delete"></i>
  </div>
</li>
`
}

function onSubmit(event){
  event.preventDefault();
  const submittedForm = event.target
  const input = submittedForm.title
  todoList.push({
    title: input.value,
    isCompeleted: false,
  })
  renderTodoList();
  input.value = '';
  buttonElement.setAttribute('disabled', '');
}

function renderTodoList (){
  tasksElement.innerHTML = '';
  todoList.forEach(function(todoListItem, index){
    renderTodoItem(tasksElement, todoListItem, index);
  })
}

function onInput(event) {
  const value = event.target.value
  if (value === ''){
    buttonElement.setAttribute('disabled', '');
  } else {
    buttonElement.removeAttribute('disabled');
  }
}

function itemComplete(index) {
  console.log('itemComplete', index);
  todoList[index].isCompeleted = !todoList[index].isCompeleted;
  renderTodoList();
}

function itemDelete(index){
  console.log('itemDelete', index);
  todoList.splice(index, 1);
  renderTodoList();
}

function onClickTasks (event){
  const target = event.target
  const clickedItem = target.parentElement.parentElement;
  if (target.classList.contains('item-complete')) {
    itemComplete(Number(clickedItem.dataset.idx))
  } else if (target.classList.contains('item-delete')){
    itemDelete(Number(clickedItem.dataset.idx))
  }
}


function onAppReady() {
  intputTitle = document.querySelector('#task-title');
  todoForm = document.querySelector('#todo-form');
  tasksElement = document.querySelector('#tasks');
  buttonElement = document.querySelector('#add-btn');
  
  tasksElement.addEventListener('click',onClickTasks);
  intputTitle.addEventListener('input', onInput); 
  todoForm.addEventListener('submit', onSubmit);

  renderTodoList();
}



document.addEventListener('DOMContentLoaded', onAppReady);


