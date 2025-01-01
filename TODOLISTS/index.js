const inputElement = document.querySelector(".js-name-input");
const addButton = document.querySelector(".add-btn");
const result = document.querySelector(".js-todo-list")
const dateElement = document.querySelector(".js-due-date-input")

console.log(localStorage)

const todoLists = [];

renderTodoLists()

function renderTodoLists() {
    let todoListsHtml = ''

    todoLists.forEach((todoObject, index) => {
        const {name,  dueDate} = todoObject;

        const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
                <button onclick="
                     todoLists.splice(${index}, 1);
                     renderTodoLists();
                " class="delete-btn">Delete</button>
        `;

        todoListsHtml += html;
    })

    result.innerHTML = todoListsHtml
}


function addTodo() {
    const name = inputElement.value;
    const dueDate = dateElement.value;

    todoLists.push({name, dueDate});
    inputElement.value = "";

    renderTodoLists()
}


