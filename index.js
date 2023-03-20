let todoList = [
  { category: 'toBuy', priority: 2, content: 'Milk', icon: '🥛' },
  { category: 'work', priority: 1, content: 'Finish project', icon: '💻' },
  { category: 'school', priority: 3, content: 'Study for exam', icon: '📚' },
  { category: 'toBuy', priority: 4, content: 'Eggs', icon: '🥚' },
  { category: 'work', priority: 2, content: 'Schedule meeting', icon: '📅' }
];

const container = document.querySelector('#todo-container');

todoList.forEach(item => {
  const todoItem = document.createElement('p');
  const icon = document.createElement('span');
  icon.textContent = item.icon;
  todoItem.textContent = item.content;
  todoItem.insertBefore(icon, todoItem.firstChild);

  const toBuyContainer = document.querySelector('#to-buy-container');
  const workContainer = document.querySelector('#work-container');
  const schoolContainer = document.querySelector('#school-container');
  
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
        default:
        console.log(`Unknown category: ${item.category}`);
    }
});