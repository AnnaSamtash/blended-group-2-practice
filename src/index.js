/**
 * Створи список справ.
 * На сторінці є два інпути які має вводиться назва і текст задачі.
 * Після натискання на кнопку "Додати" завдання додається до списку #task-list.
 *
 * Розмітка картки задачі
 * <li class="task-list-item">
 *     <button class="task-list-item-btn">Видалити</button>
 *     <h3>Заголовок</h3>
 *     <p>Текст</p>
 * </li>
 *
 * У кожної картки має бути кнопка "Видалити", щоб можна було
 * прибрати завдання зі списку.
 * Список із завданнями має бути доступним після перезавантаження сторінки.
 */

const form = document.querySelector('.header-form');
const listOfNotes = document.querySelector('.tasks-list');
const STORAGE_KEY = "notes";

form.addEventListener('submit', handlerSubmit);

function handlerSubmit(event) {
    event.preventDefault();
    const nameTask = event.currentTarget.elements.taskName.value.trim();
    const textTask = event.currentTarget.elements.taskText.value.trim();
    console.log(nameTask, textTask);
    if (nameTask === "" || textTask === "") {
        alert("Please, fill all fields");
        return;
    }
    const arrayData = JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [];
    const taskObj = { nameTask, textTask, id : Date.now() };
    arrayData.push(taskObj);
    const jsn = JSON.stringify(arrayData);
    localStorage.setItem(STORAGE_KEY, jsn);
    event.currentTarget.reset();  
    addToList();
}

addToList();



function addToList() {
    const arrayFromLocalStorage = JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [];
    const markup = arrayFromLocalStorage.map(({ nameTask, textTask, id }) => `<li class="task-list-item" data-id="${id}" >
      <button class="task-list-item-btn">Видалити</button>
      <h3>${nameTask}</h3>
      <p>${textTask}</p>
  </li>`
    ).join("");
    listOfNotes.innerHTML = markup;
}
