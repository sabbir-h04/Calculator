//query selectors
let buttons = document.querySelectorAll('.btn');
let digitButtons = document.querySelectorAll('.digitBtn');
let operationButtons = document.querySelectorAll('.operationBtn');
let display = document.querySelector('input[type="text"]');
let equalBtn = document.querySelector('.equalBtn');
let clearBtn = document.querySelector('.clearBtn');
let backBtn = document.querySelector('.backBtn');
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
  if (display.value.length > 12) alert('Max number limit reached!');
  else display.value = add(display.value, e.target.value); //string concat
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

const showResult = function (e) {
  if (display.value === '')
    alert('Please enter a digit!'); //prevents unusual '=' keypress
  else if (num1 === '') alert('Please enter a operator!');
  else {
    num2 = Number(display.value);
    display.value = operate(num1, operator, num2);
    clearCalculator(e);
  }
};

const backSpace = function () {
  display.value = display.value.slice(0, -1);
};

const clearCalculator = function (e) {
  if (e.target.value !== '=') display.value = '';

  //reset everything
  num1 = '';
  num2 = '';
  operator = '';
};

const playSound = function () {
  let audio = new Audio('./audio/button03.mp3');
  audio.play();
  audio.volume = 0.5;
};

//variables
let num1 = '';
let num2 = '';
let operator = '';

//Dom
buttons.forEach((button) => {
  button.addEventListener('click', playSound);
});
digitButtons.forEach((button) => {
  button.addEventListener('click', updateDisplay);
});
operationButtons.forEach((button) => {
  button.addEventListener('click', operation);
});
clearBtn.addEventListener('click', clearCalculator);
equalBtn.addEventListener('click', showResult);
backBtn.addEventListener('click', backSpace);
