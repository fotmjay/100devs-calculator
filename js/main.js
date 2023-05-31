const calculatorBody = document.querySelector("section");
const resultPanel = document.querySelector("#result");
let numberStored = 0;
let operation = "";
resultPanel.value = "";

//  MODIFICATIONS TO MAKE IT OOP FROM HERE
// function CreateCalculator() {

//     this.clickedCalc = function(click) {
//       if (isClickValid(click)) {
//         const target = click.target.innerText;
//         if (isOperation(target)) {
//           operatorUsed(target);
//         } else if (target === OPERATIONS.CLEAR) {
//           resultPanel.value = "";
//           numberStored = 0;
//         } else {
//           resultPanel.value += target;
//         }
//       }
//     }

//   function isOperation(target) {
//     return (
//       target === OPERATIONS.MULTIPLY ||
//       target === OPERATIONS.DIVIDE ||
//       target === OPERATIONS.ADD ||
//       target === OPERATIONS.SUBSTRACT ||
//       target === OPERATIONS.EQUALS
//     );
//   }

//   function isClickValid(click){
//     return (
//       click.target.tagName === ACTIONS.OPERATIONS ||
//       click.target.tagName === ACTIONS.CLEAR
//     );
//   }

//   function operatorUsed(ope) {
//     let currentValue = resultPanel.value;
//     if (ope !== OPERATIONS.EQUALS) {
//       operation = ope;
//       numberStored = currentValue;
//       resultPanel.value = "";
//     } else {
//       if (operation === OPERATIONS.MULTIPLY) {
//         resultPanel.value = +numberStored * +currentValue;
//       } else if (operation === OPERATIONS.DIVIDE) {
//         resultPanel.value = +numberStored / +currentValue;
//       } else if (operation === OPERATIONS.SUBSTRACT) {
//         resultPanel.value = +numberStored - +currentValue;
//       } else {
//         resultPanel.value = +numberStored + +currentValue;
//       }
//     }
//   }
// }

// function clickedCalc(click) {
//   if (isClickValid(click)) {
//     const target = click.target.innerText;
//     if (isOperation(target)) {
//       operatorUsed(target);
//     } else if (target === OPERATIONS.CLEAR) {
//       resultPanel.value = "";
//       numberStored = 0;
//     } else {
//       resultPanel.value += target;
//     }
//   }
// }

// function operatorUsed(ope) {
//   let currentValue = resultPanel.value;
//   if (ope !== OPERATIONS.EQUALS) {
//     operation = ope;
//     numberStored = currentValue;
//     resultPanel.value = "";
//   } else {
//     if (operation === OPERATIONS.MULTIPLY) {
//       resultPanel.value = +numberStored * +currentValue;
//     } else if (operation === OPERATIONS.DIVIDE) {
//       resultPanel.value = +numberStored / +currentValue;
//     } else if (operation === OPERATIONS.SUBSTRACT) {
//       resultPanel.value = +numberStored - +currentValue;
//     } else {
//       resultPanel.value = +numberStored + +currentValue;
//     }
//   }
// }

// function isOperation(target) {
//   return (
//     target === OPERATIONS.MULTIPLY ||
//     target === OPERATIONS.DIVIDE ||
//     target === OPERATIONS.ADD ||
//     target === OPERATIONS.SUBSTRACT ||
//     target === OPERATIONS.EQUALS
//   );
// }

// function isClickValid(click) {
//   return (
//     click.target.tagName === ACTIONS.OPERATIONS ||
//     click.target.tagName === ACTIONS.CLEAR
//   );
// }

class Calculator {
  clickedCalc = (click) => {
    if (this.isClickValid(click)) {
      const target = click.target.innerText;
      if (this.isOperation(target)) {
        this.operatorUsed(target);
      } else if (target === OPERATIONS.CLEAR) {
        resultPanel.value = "";
        numberStored = 0;
      } else {
        resultPanel.value += target;
      }
    }
  };

  isOperation = (target) => {
    return (
      target === OPERATIONS.MULTIPLY ||
      target === OPERATIONS.DIVIDE ||
      target === OPERATIONS.ADD ||
      target === OPERATIONS.SUBSTRACT ||
      target === OPERATIONS.EQUALS
    );
  };

  isClickValid = (click) => {
    return (
      click.target.tagName === ACTIONS.OPERATIONS ||
      click.target.tagName === ACTIONS.CLEAR
    );
  };

  operatorUsed = (ope) => {
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
  };
}

const calculator = new Calculator();
calculatorBody.addEventListener("mouseup", calculator.clickedCalc);
