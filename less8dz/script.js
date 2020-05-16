const input = document.querySelector('.addCase');
const addBtn = document.querySelector('#addBtn');
const list = document.querySelector('.toDoList');

addBtn.addEventListener('click', onAddBtnClick);

function onAddBtnClick(){
    const li = document.createElement('li');
    li.textContent = input.value;
    list.append(li);
    input.value = '';
}
