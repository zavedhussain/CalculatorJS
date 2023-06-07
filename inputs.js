let value1, value2, operatorG;

const setNumber = (num) => {
  const screenCurrent = document.querySelector(".screen-current");
  screenCurrent.textContent = num;
  screenCurrent.classList.remove("active");
  screenCurrent.classList.add("inactive");
};
const concatNumber = (num) => {
  const screenCurrent = document.querySelector(".screen-current");
  screenCurrent.textContent += String(num);
};
const handleOperator = (operator) => {
  operatorG = operator;
  // storevalue1()
  const screenCurrent = document.querySelector(".screen-current");
  value1 = screenCurrent.textContent;

  //set screen last
  const screenLast = document.querySelector(".screen-last");
  screenLast.textContent = value1 + operator;

  //   set screen current to active
  screenCurrent.classList.remove("inactive");
  screenCurrent.classList.add("active");
};

const handleEquals = () => {
  console.log("=");

  //store value2
  const screenCurrent = document.querySelector(".screen-current");
  value2 = screenCurrent.textContent;

  //operate value1,value2,)
  console.log(operate(value1, value2, operatorG));

  //set screen last to last +=
  const screenLast = document.querySelector(".screen-last");
  screenLast.textContent += `${value2}=`;

  //set screen current to operate
  screenCurrent.textContent = operate(value1, value2, operatorG);
};

const handleClear = () => {
  const screenCurrent = document.querySelector(".screen-current");
  screenCurrent.textContent = 0;
  screenCurrent.classList.remove("inactive");
  screenCurrent.classList.add("active");

  const screenLast = document.querySelector(".screen-last");
  screenLast.textContent = "";
  value1 = null;
  value2 = null;
  operatorG = null;
};
const handleDelete = () => {
  const screenCurrent = document.querySelector(".screen-current");
  const current = screenCurrent.textContent;
  const n = current.length;
  console.log(n);
  if (n <= 1) {
    const screenCurrent = document.querySelector(".screen-current");
    screenCurrent.textContent = 0;
    screenCurrent.classList.remove("inactive");
    screenCurrent.classList.add("active");
  } else {
    screenCurrent.textContent = current.slice(0, n - 1);
  }
};

const handleDot = () => {
  console.log(".");
};
