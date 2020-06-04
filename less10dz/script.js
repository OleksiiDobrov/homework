const input = document.getElementById('addCase');
const addBtn = document.getElementById('addBtn');
const list = document.getElementById('toDoList');
const toDoListTemplate = document.getElementById('toDoListTemplate').innerHTML;

addBtn.addEventListener('click', onAddBtnClick);
list.addEventListener('click', onListClick);


function onAddBtnClick() {
    list.innerHTML += toDoListTemplate
        .replace('{{1}}', input.value);
    input.value = '';
}

function onListClick(e) {
    console.log('cliked', e.target);
    e.target.classList.toggle('completed');
    onRemoveDeal();
}


function onRemoveDeal() {
    let dealRemove = document.getElementsByName("remove-button");
    console.log(dealRemove);
    dealRemove.forEach(function(item) {
        item.addEventListener('click', function(){
            item.parentNode.parentNode.removeChild(item.parentNode);
        });
    });
    
}

