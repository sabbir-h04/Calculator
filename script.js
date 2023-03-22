//query selectors
let digitButtons = document.querySelectorAll('.digitBtn');
let operationButtons = document.querySelectorAll('.operationBtn');
let display = document.querySelector('input[type="text"]');
let equalBtn = document.querySelector('.equalBtn');
let clearBtn = document.querySelector('.clearBtn');
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
  display.value = add(display.value, e.target.value); //string concat
};

const operation = function (e) {
  if (display.value === '' && num1 === '' && operator === '')
    alert('Please enter a digit!');
  else if (num1 !== '' && operator !== '') {
    if (display.value !== '') {
      num2 = Number(display.value);
      num1 = operate(num1, operator, num2);
    }
    operator = e.target.value;
    display.value = '';
  } else {
    num1 = Number(display.value);
    operator = e.target.value;
    display.value = '';
  }
};

const showResult = function () {
  if (display.value === '') alert('Please enter a digit!');
  else {
    num2 = Number(display.value);
    display.value = operate(num1, operator, num2);
  }
};

const clearCalculator = function () {
  display.value = '';

  //reset everything
  num1 = '';
  num2 = '';
  operator = '';
};

//variables
let num1 = '';
let num2 = '';
let operator = '';

//Dom
digitButtons.forEach((button) => {
  button.addEventListener('click', updateDisplay);
});
operationButtons.forEach((button) => {
  button.addEventListener('click', operation);
});
clearBtn.addEventListener('click', clearCalculator);
equalBtn.addEventListener('click', showResult);
