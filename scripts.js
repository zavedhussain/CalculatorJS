const add = (num1, num2) => {
  return num1 + num2;
};

const subtract = (num1, num2) => {
  return num1 - num2;
};

const multiply = (num1, num2) => {
  return num1 * num2;
};

const divide = (num1, num2) => {
  if (num2 === 0) {
    alert("Division by 0 is illegal!!");
    //reset
    return 0;
  } else return num1 / num2;
};

//call an operation with two numbers
const operate = (num1, num2, operator) => {};
