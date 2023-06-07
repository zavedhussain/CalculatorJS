let value1, value2, operatorG;

const resetCurrent = () => {
  const screenCurrent = document.querySelector(".screen-current");
  screenCurrent.textContent = 0;
  screenCurrent.classList.remove("inactive");
  screenCurrent.classList.add("active");
};

const setNumber = (num) => {
  //set new number
  const screenCurrent = document.querySelector(".screen-current");
  screenCurrent.textContent = num;
  screenCurrent.classList.remove("active");
  screenCurrent.classList.add("inactive");
};
const concatNumber = (num) => {
  //concat to existing number
  const screenCurrent = document.querySelector(".screen-current");
  screenCurrent.textContent += String(num);
};
const handleOperator = (operator) => {
  const screenLast = document.querySelector(".screen-last");
  if (screenLast.textContent && !screenLast.textContent.includes("=")) {
    // for continuous operation

    const screenCurrent = document.querySelector(".screen-current");
    value2 = screenCurrent.textContent;
    value1 = String(operate(value1, value2, operatorG));
    screenLast.textContent = value1 + operator;
  } else {
    //for first/single operation
    operatorG = operator;
    // storevalue1()
    const screenCurrent = document.querySelector(".screen-current");
    value1 = screenCurrent.textContent;

    //set screen last
    screenLast.textContent = value1 + operator;

    //   set screen current to active
    screenCurrent.classList.remove("inactive");
    screenCurrent.classList.add("active");
  }
};

const handleEquals = () => {
  //store value2
  const screenCurrent = document.querySelector(".screen-current");
  value2 = screenCurrent.textContent;

  //set screen last to last +=
  const screenLast = document.querySelector(".screen-last");
  screenLast.textContent += `${value2}=`;

  //set screen current to operate\
  const result = operate(value1, value2, operatorG);

  screenCurrent.textContent = result != null ? result : 0;
  value1 = null;
  value2 = null;
  operatorG = null;
};

const handleClear = () => {
  //clear screen-current
  resetCurrent();

  //clear screen-last
  const screenLast = document.querySelector(".screen-last");
  screenLast.textContent = "";
  value1 = null;
  value2 = null;
  operatorG = null;
};
const handleDelete = () => {
  //delete last number screen-current
  const screenCurrent = document.querySelector(".screen-current");
  const current = screenCurrent.textContent;
  const n = current.length;
  if (n <= 1) {
    resetCurrent();
  } else {
    screenCurrent.textContent = current.slice(0, n - 1);
  }
};

const handleDot = () => {
  const screenCurrent = document.querySelector(".screen-current");
  if (!screenCurrent.textContent.includes(".")) {
    screenCurrent.textContent += ".";
  }
};
