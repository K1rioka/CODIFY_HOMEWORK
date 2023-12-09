class Todo {
    constructor(id, title, isCompleted = false) {
      this.id = id;
      this.title = title;
      this.isCompleted = isCompleted;
    }
  }
  
  class TodoList {
    constructor() {
      this.todos = JSON.parse(localStorage.getItem('todos')) || [];
      this.todoText = '';
      this.form = document.querySelector('.input_div');
      this.input = document.querySelector('#add_text_input');
      this.btn = document.querySelector('#add_task');
      this.list = document.querySelector('.todo_list');
      this.toaster = document.querySelector('.toaster');
  
      this.input.addEventListener('input', ({ target: { value } }) => {
        this.todoText = value;
      });
  
      this.form.addEventListener('submit', (event) => {
        event.preventDefault();
        this.addTodo();
      });
  
      this.list.addEventListener('click', (event) => {
        this.handleButtonClick(event);
      });
  
      this.render();
    }
  
    addToLocalStorage() {
      localStorage.setItem('todos', JSON.stringify(this.todos));
    }
  
    addTodo() {
      if (!this.todoText.trim()) {
        this.toaster.classList.remove('toaster_hide');
        this.input.focus();
        return;
      }
  
      const newTodo = new Todo(Date.now(), this.todoText);
      this.todos.unshift(newTodo);
      this.addToLocalStorage();
      this.clear();
      this.render();
      this.input.focus();
    }
  
    clear() {
      this.todoText = '';
      this.input.value = '';
    }
  
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
      this.addToLocalStorage();
      this.render();
    }
  
    editTodo(btn) {
      const listItem = btn.closest('li');
      const taskText = listItem.querySelector('span').textContent.trim();
  
      const newInput = document.createElement('input');
      newInput.type = 'text';
      newInput.value = taskText;
      newInput.classList.add('edit_input')
  
      const newButton = document.createElement('button');
      newButton.innerHTML = 'Save';
      newButton.classList.add('save_btn')
  
      newButton.onclick = () => {
        const newText = newInput.value.trim();
        if (newText) {
          listItem.querySelector('span').textContent = newText;
          this.todos = this.todos.map((todo) =>
            todo.id == btn.id ? { ...todo, title: newText } : todo
          );
        }
        this.addToLocalStorage();
  
        listItem.style.display = 'block';
        this.list.removeChild(newInput);
        this.list.removeChild(newButton);
        this.render();
      };
  
      listItem.style.display = 'none';
      listItem.before(newInput);
      listItem.before(newButton);
    }
  
    completeTodo(id) {
      this.todos = this.todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      );
      this.addToLocalStorage();
      this.render();
    }
  
    handleButtonClick(event) {
      const element = event.target;
      if (element.classList.contains('btn_delete')) {
        const id = +element.getAttribute('id');
        this.deleteTodo(id);
      }
  
      if (element.classList.contains('btn_edit')) {
        this.editTodo(element);
      }
  
      if (element.classList.contains('btn_complete')) {
        const id = +element.getAttribute('id');
        this.completeTodo(id);
      }
    }
  
    render() {
      this.list.innerHTML = '';
      this.todos.forEach((todo) => {
        const li = document.createElement('li');
        li.innerHTML = `
          
          <div id='task'>
          <input class='btn_complete' id='${todo.id}' type='checkbox' ${
            todo.isCompleted ? 'checked' : ''
          }/>
            <span>${todo.title}</span>
            <button class='btn_delete' id='${todo.id}'></button>
            <button class='btn_edit' id='${todo.id}'></button>
          </div>
        `;
        this.list.append(li);
      });
    }
  }
  
  const todoList = new TodoList();

// class Todo {
//     constructor(id, title, isCompleted = false) {
//       this.id = id;
//       this.title = title;
//       this.isCompleted = isCompleted;
//     }
//   }
  
//   class TodoList {
//     constructor() {
//       this.todos = JSON.parse(localStorage.getItem('todos')) || [];
//       this.todoText = '';
//       this.form = document.querySelector('.input_div');
//       this.input = document.querySelector('#add_text_input');
//       this.btn = document.querySelector('#add_task');
//       this.list = document.querySelector('.todo_list');
//       this.toaster = document.querySelector('.toaster');
  
//       this.input.addEventListener('input', ({ target: { value } }) => {
//         this.todoText = value;
//       });
  
//       this.form.addEventListener('submit', (event) => {
//         event.preventDefault();
//         this.addTodo();
//       });
  
//       this.list.addEventListener('click', (event) => {
//         this.handleButtonClick(event);
//       });
  
//       this.render();
//     }
  
//     addToLocalStorage() {
//       localStorage.setItem('todos', JSON.stringify(this.todos));
//     }
  
//     addTodo() {
//       if (!this.todoText.trim()) {
//         this.toaster.classList.remove('toaster_hide');
//         this.input.focus();
//         return;
//       }
  
//       const newTodo = new Todo(Date.now(), this.todoText);
//       this.todos.unshift(newTodo);
//       this.addToLocalStorage();
//       this.clear();
//       this.render();
//       this.input.focus();
//     }
  
//     clear() {
//       this.todoText = '';
//       this.input.value = '';
//     }
  
//     deleteTodo(id) {
//       this.todos = this.todos.filter((todo) => todo.id !== id);
//       this.addToLocalStorage();
//       this.render();
//     }
  
//     editTodo(btn) {
//       const listItem = btn.closest('li');
//       const taskText = listItem.querySelector('span').textContent.trim();
      
//       const editDiv = document.createElement('div')
//       editDiv.classList.add('edit_div')
//       const newInput = document.createElement('input');
//       newInput.type = 'text';
//       newInput.classList.add('edit_input')
//       newInput.value = taskText;
//       editDiv.appendChild(newInput)
  
//       const newButton = document.createElement('button');
//       newButton.innerHTML = 'Save';
//       newButton.classList.add('save_btn')
//       editDiv.appendChild(newButton)
  
//       newButton.onclick = () => {
//         const newText = newInput.value.trim();
//         if (newText) {
//           listItem.querySelector('span').textContent = newText;
//           this.todos = this.todos.map((todo) =>
//             todo.id == btn.id ? { ...todo, title: newText } : todo
//           );
//         }
//         this.addToLocalStorage();
  
//         listItem.style.display = 'block';
//         this.list.removeChild(newInput);
//         this.list.removeChild(newButton);
//         this.render();
//       };
  
//       listItem.style.display = 'none';
//       listItem.before(newInput);
//       listItem.before(newButton);
//     }
  
//     completeTodo(id) {
//       this.todos = this.todos.map((todo) =>
//         todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
//       );
//       this.addToLocalStorage();
//       this.render();
//     }
  
//     handleButtonClick(event) {
//       const element = event.target;
//       if (element.classList.contains('btn_delete')) {
//         const id = +element.getAttribute('id');
//         this.deleteTodo(id);
//       }
  
//       if (element.classList.contains('btn_edit')) {
//         this.editTodo(element);
//       }
  
//       if (element.classList.contains('btn_complete')) {
//         const id = +element.getAttribute('id');
//         this.completeTodo(id);
//       }
//     }
  
//     render() {
//       this.list.innerHTML = '';
//       this.todos.forEach((todo) => {
//         const li = document.createElement('li');
//         li.innerHTML = `
//           <div id='task'>
//           <div class= 'btn_complete_div'>
//           <input class='btn_complete' name="input_complete" id='${todo.id}' type='checkbox' ${
//           todo.isCompleted ? 'checked' : ''
//         }/>
//         <label for="input_complete">input_complete</label>
//         <p class= "new_span">${todo.title}</p>
//         </div>
//             <button class='btn_delete' id='${todo.id}'></button>
//             <button class='btn_edit' id='${todo.id}'></button>
//           </div>
//         `;
//         this.list.append(li);
//       });
//     }
//   }
  
// const todoList = new TodoList();
  