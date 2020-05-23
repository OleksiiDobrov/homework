const figure = document.getElementById('figure');
const actionSelect = document.getElementById('choiceform');
const choiceColorFigure = document.getElementById('colorInput');

actionSelect.addEventListener('click', onChoiceElement);
choiceColorFigure.addEventListener('change', onInputColor);
document.addEventListener('keydown', onMoveFigure);


function onChoiceElement() {
    hideContainers();
    hideClass();
    const element = actionSelect.value;
    figure.classList.remove('hidden');
    switch (element) {
        case 'square':
            figure.classList.add('square');
            break;
        case 'circle':
            figure.classList.add('circle');
            break;
        case 'triangle':
            figure.classList.add('triangle');
            break;
    }
}

function hideContainers() {
    figure.classList.add('hidden');
    figure.classList.remove('square', 'circle', 'triangle');
}

function hideClass() {
    figure.style.borderBottomColor = '';
    figure.style.backgroundColor = '';

}

function onInputColor() {
    const element = actionSelect.value;
    console.log(element);
    switch (element) {
        case 'triangle':
            figure.style.borderBottomColor = choiceColorFigure.value;
            break;
        case 'circle':
            figure.style.backgroundColor = choiceColorFigure.value;
            break;
        case 'square':
            figure.style.backgroundColor = choiceColorFigure.value;
            break;
    }
}

function onMoveFigure(e) {
    if (e.keyCode == 38) {
        let goUp = figure.offsetTop;
        figure.style.top = goUp - 10 + "px";
    }
    if (e.keyCode == 40) {
        let goDown = figure.offsetTop;
        figure.style.top = goDown + 10 + "px";
    }
    if (e.keyCode == 37) {
        let goLeft = figure.offsetLeft;
        figure.style.left = goLeft - 10 + "px";
    }
    if (e.keyCode == 39) {
        let goRight = figure.offsetLeft;
        figure.style.left = goRight + 10 + "px";
    }
}