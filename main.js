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
  console.log(event);
  event.preventDefault();
  const submittedForm = event.target
  const input = submittedForm.title
  console.log(input.value)

  todoList.push({
    title: input.value,
    isCompeleted: false,
  })
  renderTodoList();
}

function renderTodoList (){
  const taskElement = document.querySelector('#tasks');
  taskElement.innerHTML = '';
  todoList.forEach(function(todoListItem){
    renderTodoItem(taskElement, todoListItem);
  })
}

function onAppReady(){
  const todoForm = document.querySelector('#todo-form'); 
  todoForm.addEventListener('submit', onSubmit);
  renderTodoList();
}

document.addEventListener('DOMContentLoaded', onAppReady);


