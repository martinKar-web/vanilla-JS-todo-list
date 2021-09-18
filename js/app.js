const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.addTodo-btn');
const todoList = document.querySelector('.todo-list');

const filterOption = document.querySelector('.filter-todo');

// TODO Add todo  logic
todoButton.addEventListener('click', (e) => {
  e.preventDefault();
  const todoWrapper = document.createElement('div');
  todo.classList.add('todo-wrapper');

  //* Create li element
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  todo.appendChild(newTodo);

  //* Create check icon
  const checkBtn = document.createElement('button');
  checkBtn.innerHTML = '<i class="fas fa-check"></i>';
  checkBtn.classList.add('check-btn');
  todo.appendChild(checkBtn);

  //* Create trash_can icon
  const dustBin = document.createElement('button');
  dustBin.innerHTML = '<i class="fas fa-trash"></i>';
  dustBin.classList.add('trash-can');
  todo.appendChild(dustBin);

  //* Append to list
  todoList.appendChild(todo);

  //* Clear todo Input value
  todoInput.value = '';
});

todoList.addEventListener('click', (e) => {
  const item = e.target;
  const todo = item.parentElement;

  //* delete todo
  if (item.classList[0] === 'trash-can') {
    todo.classList.add('fall');

    todo.addEventListener('transitionend', () => {
      todo.remove();
    });
  }

  //* check todo
  if (item.classList[0] === 'check-btn') {
    todo.classList.toggle('completed');
  }
});

// todo Filter logic
filterOption.addEventListener('click', (e) => {
  const todos = todoList.children;
  let todosArr = Array.from(todos);
  todosArr.forEach((todo) => {
    switch (e.target.value) {
      case 'all':
        todo.style.display = 'flex';
        break;
      case 'completed':
        if (todo.classList.contains('completed')) {
          todo.style.display = 'flex';
        } else {
          todo.style.display = 'none';
        }
        break;
      case 'uncompleted':
        if (!todo.classList.contains('completed')) {
          todo.style.display = 'flex';
        } else {
          todo.style.display = 'none';
        }
        break;
    }
  });
});

// TODO Implement Local Storage
const saveLocalTodos = (todo) => {
  // CHECK---HEY Do I already have things in there?
  let todos;
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  todos.push(todo);
};

localStorage.setItem('todos', JSON.stringify(todos));
