document.querySelector('section').addEventListener('mouseup', clickedCalc);
document.querySelector('#result').value = '';
let numberStored = 0;
let operation = '';

function clickedCalc(click) {
    const target = click.target.innerText;
    if (target === 'X' || target === '/' || target === '+' || target === '-' || target === '=') {
        operatorUsed(target);
    } else if (target === 'C') {
        document.querySelector('#result').value = '';
        numberStored = 0;
    }else {
        document.querySelector('#result').value += target;
    }
}

function operatorUsed(ope) {
    let currentValue = document.querySelector('#result').value;
    if (ope !== '=') {
        operation = ope;
        numberStored = currentValue;
        document.querySelector('#result').value = '';
    } else {
        if (operation === 'X') {
            document.querySelector('#result').value = +numberStored * +currentValue;
        } else if (operation === '/') {
            document.querySelector('#result').value = +numberStored / +currentValue;
        } else if (operation === '-') {
            document.querySelector('#result').value = +numberStored - +currentValue;
        } else {
            document.querySelector('#result').value = +numberStored + +currentValue;
        } 
    }

}