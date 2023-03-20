class ToDo {
  constructor(category, priority, content, icon) {
    this.category = category;
    this.priority = priority;
    this.content = content;
    this.icon = icon;
  }
}

let todoList = [];

todoList.push(
  new ToDo('toBuy', '2', 'Water', '🥛') ,
  new ToDo('work', '1', 'Finish project', '💻'),
  new ToDo('school', '3', 'Study for exam', '📚'),
  new ToDo('toBuy', '4', 'Eggs', '🥚'),
  new ToDo('work', '2', 'Schedule meeting', '📅')
)

todoList.forEach(item => { 

  decideCategory(item);

});

function decideCategory(item){
  const todoItem = document.createElement('p');
  const icon = document.createElement('span');

  icon.textContent = item.icon;
  todoItem.textContent = item.content;
  todoItem.insertBefore(icon, todoItem.firstChild);

  const toBuyContainer = document.querySelector('#to-buy-container');
  const workContainer = document.querySelector('#work-container');
  const schoolContainer = document.querySelector('#school-container');

  todoItem.onclick = function() { todoItem.style.textDecoration = "line-through" };

  switch (item.category) {
    case 'toBuy':
    toBuyContainer.appendChild(todoItem);
    break;
    case 'work':
    workContainer.appendChild(todoItem);
    break;
    case 'school':
    schoolContainer.appendChild(todoItem);
    break;
  }

  switch (item.priority) {
    case "1":
      todoItem.classList.add("prio1");
    break;
    case "2":
      todoItem.classList.add("prio2");    
    break;
    case "3":
      todoItem.classList.add("prio3");  
    break;
    case "4":
      todoItem.classList.add("prio4");
    break;
  } 
}


function addNewItem(){
  let category = document.querySelector('#category');
  let priority = document.querySelector('#priority');
  let content = document.querySelector('#content');
  let icon = document.querySelector('#icon');

  if(content.value == "" || content.value.length  < "4" || category.value == "" ){
    alert("rossz bemeneti paraméterek!");
  }
  else{
    let item = new ToDo(category.value,priority.value,content.value,icon.value);

    todoList.push(item);
  
    decideCategory(item);
  }



}