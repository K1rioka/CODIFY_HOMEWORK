const inputField  = document.getElementById("add_text_input");
const addButton   = document.getElementById("add_task");
const myList   = document.getElementById("tasks");

// addButton.addEventListener("click", function() {
//     // Получаем значение из input
//     const inputValue = inputField.value;

//     // Создаем новый элемент списка
//     const listItem = document.createElement("li");
//     listItem.textContent = inputValue;
//     listItem.classList.add('task')

//     // Добавляем новый элемент в список
//     myList.appendChild(listItem);

//     // Очищаем поле input после добавления элемента
//     inputField.value = "";
// });

let mas = []

addButton.addEventListener("click", function(event) {
    const inputValue = inputField.value;
    console.log(inputValue)
    mas.push({ value: inputValue, id: Date.now() })
    render()
})

function render () {
    console.log(mas)
    let final = mas.map((item, idx) => {
        let res = ''
        res += `<li id="task">
        <p>${item.value}</p>
        <button id="button_delete" onclick="removeItem(${item.id})" />
        </button>
      </li>
    `
    return res
    })

    myList.innerHTML = final
}

function removeItem(id) {
    mas = mas.filter(item => item.id !== id)
    render()
}
