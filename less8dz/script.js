const input = document.querySelector('.addCase');
const addBtn = document.querySelector('#addBtn');
const list = document.querySelector('.toDoList');

console.log(input.value);

function onAddBtnClick(){
    const li = document.createElement('li');
    li.textContent = input.value;
    list.append(li);
    input.value = '';

console.log(li);
}


addBtn.addEventListener('click', onAddBtnClick);
addBtn.addEventListener('click', onAddBtnClick);

console.log(addBtn);
console.log(list);