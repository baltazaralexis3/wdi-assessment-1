
var fieldInp = document.querySelector('#inp');
var plus = document.querySelector('#add');
var minus = document.querySelector('#sub');
var result = document.querySelector('#res');

fieldInp.value = 1;

plus.addEventListener('click', addNum);
minus.addEventListener('click', subtractNum);



function addNum() {
    for (var i = 0; i < fieldInp.value; i++) {
        result.textContent = parseInt(result.textContent) + 1;
    }
    if (parseInt(result.textContent) >= 0) {
        result.style.color = 'black';
    }
}

function subtractNum() {
    for (var i = 0; i < fieldInp.value; i++) {
        result.textContent = parseInt(result.textContent) - 1;
    }
    if (parseInt(result.textContent) < 0) {
        result.style.color = 'red';
    }
}

