const add = (num1, num2) => {
  return parseFloat((num1 + num2).toFixed(4));
};

const subtract = (num1, num2) => {
  return parseFloat((num1 - num2).toFixed(4));
};

const multiply = (num1, num2) => {
  return parseFloat((num1 * num2).toFixed(4));
};

const divide = (num1, num2) => {
  if (num2 === 0) {
    handleClear();
    alert("Division by 0 is illegal!!");
    return null;
  } else return parseFloat((num1 / num2).toFixed(4));
};

//call an operation with two numbers
const operate = (num1, num2, operator) => {
  if (operator === "+") {
    return add(parseFloat(num1), parseFloat(num2));
  }
  if (operator === "-") {
    return subtract(parseFloat(num1), parseFloat(num2));
  }
  if (operator === "×") {
    return multiply(parseFloat(num1), parseFloat(num2));
  }
  if (operator === "÷") {
    return divide(parseFloat(num1), parseFloat(num2));
  }
};

const handleClick = (e) => {
  const buttonClass = [...e.target.classList];
  const screenCurrent = document.querySelector(".screen-current");
  const currentClass = [...screenCurrent.classList];
  if (buttonClass.includes("number")) {
    const num = parseFloat(e.target.innerText);
    if (currentClass.includes("active")) {
      setNumber(num);
    } else {
      concatNumber(num);
    }
  }
  if (buttonClass.includes("operator")) {
    handleOperator(e.target.innerText);
  }
  if (buttonClass.includes("equals")) {
    handleEquals();
  }
  if (buttonClass.includes("dot")) {
    handleDot();
  }
  if (buttonClass.includes("clear")) {
    handleClear();
  }
  if (buttonClass.includes("delete")) {
    handleDelete();
  }
};

//handle button clicks
const buttons = document.querySelectorAll(".buttons button");
buttons.forEach((button) => {
  button.addEventListener("click", handleClick);
});
