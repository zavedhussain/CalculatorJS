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
const operate = (num1, num2, operator) => {
  if (operator === "+") {
    return add(parseInt(num1), parseInt(num2));
  }
  if (operator === "-") {
    return subtract(parseInt(num1), parseInt(num2));
  }
  if (operator === "×") {
    return multiply(parseInt(num1), parseInt(num2));
  }
  if (operator === "÷") {
    return divide(parseInt(num1), parseInt(num2));
  }
};

const handleClick = (e) => {
  const buttonClass = [...e.target.classList];
  const screenCurrent = document.querySelector(".screen-current");
  const currentClass = [...screenCurrent.classList];
  // const buttonText=e.target.innerText;
  if (buttonClass.includes("number")) {
    const num = parseInt(e.target.innerText);
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
