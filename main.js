(()=> {
let todos = [];

const todoElement = document.getElementById('todo');
const taskButtonElement = document.getElementById('taskButton');
const listElement = document.getElementById('list');

taskButtonElement.addEventListener('click', (event)=>{
  
  const todo = todoElement.value;
  todoElement.value = '';


  if (todo) {
    todos.push(todo);
    showTodos();
  }
})

const showTodos = () => {

  while(listElement.firstChild){
    listElement.removeChild(listElement.firstChild);
  }

  todos.forEach((todo, index) => {
    const todoItem = document.createElement('li');
    const taskNumber = index + 1;

    todoItem.textContent = `${taskNumber}:${todo}`;
    listElement.appendChild(todoItem);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '削除';
    todoItem.appendChild(deleteButton);
    
    deleteButton.addEventListener('click', (event) => {
      deleteTodos(index);
    });
  })
}

const deleteTodos = (index) => {
  todos.splice(index, 1);
  showTodos();
}
  

})();
