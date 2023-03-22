//query selectors
let digitButtons = document.querySelectorAll('.digitBtn');
let operationButtons = document.querySelectorAll('.operationBtn');
let display = document.querySelector('input[type="text"]');
display.value = '';

//functions
const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const multiply = function (num1, num2) {
  return num1 * num2;
};

const divide = function (num1, num2) {
  return num1 / num2;
};

const operate = function (num1, operator, num2) {
  if (operator === '+') return add(num1, num2);
  else if (operator === '-') return subtract(num1, num2);
  else if (operator === '*') return multiply(num1, num2);
  else if (operator === '/') return divide(num1, num2);
};

const updateDisplay = function (e) {
  display.value = add(display.value, e.target.value);
};

const operation = function (e) {
  if (e.target.value === '=') {
    num2 = Number(display.value);
    display.value = operate(num1, operator, num2);
    operator = '';
  } else if (operator !== '') {
  } else {
    num1 = Number(display.value);
    operator = e.target.value;
    display.value = '';
  }
};

//variables
let num1 = 0;
let num2 = 0;
let operator = '';

//Dom
digitButtons.forEach((button) => {
  button.addEventListener('click', updateDisplay);
});
operationButtons.forEach((button) => {
  button.addEventListener('click', operation);
});
