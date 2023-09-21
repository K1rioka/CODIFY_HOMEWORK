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

addButton.addEventListener("click", function() {
    const inputValue = inputField.value;
    mas.push(inputValue)
    render()
})

function render () {
    let final = mas.map((item) => {
        let res = ''
        res += `<li id="task">
        <p>${item}</p>
        <button id="button_delete" onclick="removeItem(0)" />
        </button>
      </li>
    `
    return res
    })

    myList.innerHTML = final
}

function removeItem(index) {
    const myList = document.getElementById("tasks");
    if (index >= 0 && index < myList.children.length) {
        myList.removeChild(myList.children[index]);
    }
}
