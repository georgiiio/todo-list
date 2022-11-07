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

let taskElement, buttonElement, intputTitle, todoForm

function renderTodoItem (parentElement,todoItem){
  parentElement.innerHTML = parentElement.innerHTML + `<li class="item ${todoItem.isCompeleted ? 'completed' : ''}">
  <p>${todoItem.title}</p>
  <div class="item-btn">
    <i class="fa-solid fa-pen-to-square"></i>
    <i class="fa-solid fa-xmark"></i>
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
  taskElement.innerHTML = '';
  todoList.forEach(function(todoListItem){
    renderTodoItem(taskElement, todoListItem);
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

function onAppReady() {
  intputTitle = document.querySelector('#task-title');
  todoForm = document.querySelector('#todo-form');
  taskElement = document.querySelector('#tasks');
  buttonElement = document.querySelector('#add-btn');

  intputTitle.addEventListener('input', onInput); 
  todoForm.addEventListener('submit', onSubmit);

  renderTodoList();
}



document.addEventListener('DOMContentLoaded', onAppReady);


