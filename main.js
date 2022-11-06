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

function onAppReady(){
  const taskElement = document.querySelector('#tasks');
  todoList.forEach(function(todoListItem){
    renderTodoItem(taskElement, todoListItem);
  })
}

document.addEventListener('DOMContentLoaded', onAppReady);
