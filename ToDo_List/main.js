function getElement(identificator){
    return document.querySelector(identificator)
}

const form = getElement(".input_div")
const input = getElement('#add_text_input')
const btn = getElement('#add_task')
const list = getElement('.todo_list')
const toaster = getElement('.toaster')

let todoList = JSON.parse(localStorage.getItem('todos')) || []
let todoText = ''

input.addEventListener('input', ({target: {value}})=>{
    todoText = value
})

form.addEventListener('submit', (event)=>{
    event.preventDefault()
    addTodo(todoText)
})

document.addEventListener('click', (event) => {
    const element = event.target
    if(element.classList.contains('btn_delete')){
        const id = + element.getAttribute('id')
        deleteTodo(id)
    }

    if (element.classList.contains('btn_edit')){
    editTodo(element)
    }

    if(element.classList.contains('btn_complete')){
        const id = + element.getAttribute('id')
        completeTodo(id)
    }
})

function addToLocalStorage(){
    localStorage.setItem('todos', JSON.stringify(todoList))
}
function addTodo(text){
    if(!text.trim()){
        toaster.classList.remove("toaster_hide")
        input.focus()
        return
    }
    const newTodo = {
        title: text,
        isCompleted: false,
        id: Date.now()
    }
    todoList.unshift(newTodo)
    addToLocalStorage()
    clear()
    render()
    input.focus()
}

function clear(){
    todoText = ''
    input.value = ''
}

function deleteTodo(id){
    todoList = todoList.filter(todo => todo.id !== id)
    addToLocalStorage()
    render()
}

function editTodo(btn){
    const listItem = btn.closest('li')
    const taskText = listItem.querySelector('span').textContent.trim()

    const newInput = document.createElement('input')
    newInput.type = 'text'
    newInput.value = taskText

    const newButton = document.createElement('button')
    newButton.innerHTML = 'Save'

    newButton.onclick = function(){
        const newText = newInput.value.trim()
        if(newText){
            listItem.querySelector('span').textContent = newText
            todoList = todoList.map(todo =>{
                return todo.id == btn.id ? {...todo, title: newText} : todo
            })
        } 
        addToLocalStorage()

        listItem.style.display = 'block'
        list.removeChild(newInput)
        list.removeChild(newButton)
    }

    listItem.style.display = 'none'
    listItem.before(newInput)
    listItem.before(newButton)
}

function completeTodo() {
    todoList = todoList.map(todo=>{
        return todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo
    })
}

function render(){
    list.innerText = ''
    todoList.forEach((todo)=>{
        const li = document.createElement('li')
        li.innerHTML=`
        <input class='btn_conmplete'  id='${todo.id}' type='checkbox' ${todo.isCompleted} ? 'checked' : ''/>
        <span>${todo.title}</span>
        <div id='task'>
            <button class='btn_delete'  id='${todo.id}'>DELETE</button>
            <button class='btn_edit' id='${todo.id}'>EDIT</button>
        </div>
        `
        list.append(li)
    })
}

render()








// const inputField  = document.getElementById("add_text_input");
// const addButton   = document.getElementById("add_task");
// const myList   = document.getElementById("tasks");

// // addButton.addEventListener("click", function() {
// //     // Получаем значение из input
// //     const inputValue = inputField.value;

// //     // Создаем новый элемент списка
// //     const listItem = document.createElement("li");
// //     listItem.textContent = inputValue;
// //     listItem.classList.add('task')

// //     // Добавляем новый элемент в список
// //     myList.appendChild(listItem);

// //     // Очищаем поле input после добавления элемента
// //     inputField.value = "";
// // });

// let mas = []

// addButton.addEventListener("click", function(event) {
//     const inputValue = inputField.value;
//     console.log(inputValue)
//     mas.push({ value: inputValue, id: Date.now() })
//     render()
// })

// function render () {
//     console.log(mas)
//     let final = mas.map((item, idx) => {
//         let res = ''
//         res += `<li id="task">
//         <p>${item.value}</p>
//         <button id="button_delete" onclick="removeItem(${item.id})" />
//         </button>
//       </li>
//     `
//     return res
//     })

//     myList.innerHTML = final
// }

// function removeItem(id) {
//     mas = mas.filter(item => item.id !== id)
//     render()
// }
