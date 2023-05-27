const calculatorBody = document.querySelector("section");
const resultPanel = document.querySelector("#result");
let numberStored = 0;
let operation = "";

resultPanel.value = "";

calculatorBody.addEventListener("mouseup", clickedCalc);

function clickedCalc(click) {
  if (isClickValid(click)) {
    const target = click.target.innerText;
    if (isOperation(target)) {
      operatorUsed(target);
    } else if (target === OPERATIONS.CLEAR) {
      resultPanel.value = "";
      numberStored = 0;
    } else {
      resultPanel.value += target;
    }
  }
}

function operatorUsed(ope) {
  let currentValue = resultPanel.value;
  if (ope !== OPERATIONS.EQUALS) {
    operation = ope;
    numberStored = currentValue;
    resultPanel.value = "";
  } else {
    if (operation === OPERATIONS.MULTIPLY) {
      resultPanel.value = +numberStored * +currentValue;
    } else if (operation === OPERATIONS.DIVIDE) {
      resultPanel.value = +numberStored / +currentValue;
    } else if (operation === OPERATIONS.SUBSTRACT) {
      resultPanel.value = +numberStored - +currentValue;
    } else {
      resultPanel.value = +numberStored + +currentValue;
    }
  }
}

function isOperation(target) {
  return (
    target === OPERATIONS.MULTIPLY ||
    target === OPERATIONS.DIVIDE ||
    target === OPERATIONS.ADD ||
    target === OPERATIONS.SUBSTRACT ||
    target === OPERATIONS.EQUALS
  );
}

function isClickValid(click) {
  return (
    click.target.tagName === ACTIONS.OPERATIONS ||
    click.target.tagName === ACTIONS.CLEAR
  );
}
