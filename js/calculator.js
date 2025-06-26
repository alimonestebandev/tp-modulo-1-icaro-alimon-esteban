class calculate {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }

  sum() {
    return parseInt(this.num1) + parseInt(this.num2);
  }
  subtract() {
    return this.num1 - this.num2;
  }
  divide() {
    return this.num1 / this.num2;
  }
  multiply() {
    return this.num1 * this.num2;
  }
}

const numberOne = document.getElementById("num-one");
const numberTwo = document.getElementById("num-two");

const finalValue = document.getElementById("final-value");
var calc_nums = new calculate(numberOne.value, numberTwo.value);

const sum_btn = document.getElementById("sum-btn");
const subtract_btn = document.getElementById("subtract-btn");
const divide_btn = document.getElementById("divide-btn");
const multiply_btn = document.getElementById("multiply-btn");

sum_btn.addEventListener("click", () => {
  calc_nums = new calculate(numberOne.value, numberTwo.value);
  var newValue = calc_nums.sum();
  finalValue.value = newValue;
});
subtract_btn.addEventListener("click", () => {
  calc_nums = new calculate(numberOne.value, numberTwo.value);
  var newValue = calc_nums.subtract();
  finalValue.value = newValue;
});
divide_btn.addEventListener("click", () => {
  calc_nums = new calculate(numberOne.value, numberTwo.value);
  var newValue = calc_nums.divide();
  finalValue.value = newValue;
});
multiply_btn.addEventListener("click", () => {
  calc_nums = new calculate(numberOne.value, numberTwo.value);
  var newValue = calc_nums.multiply();
  finalValue.value = newValue;
});

//Prueba de funcionamiento --OK
// var test_calc = new calculate(3, 3).subtract();
// console.log(test_calc);
