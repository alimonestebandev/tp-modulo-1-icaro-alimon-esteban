class calculate {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }

  sum() {
    return this.num1 + this.num2;
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

const numberOne = document.getElementById("number-one");
const numberTwo = document.getElementById("number-two");

const finalValue = document.getElementById("final-value");

var calc_nums = new calculate(numberOne, numberTwo);

const sum_btn = document.getElementById("sum-btn");
const subtract_btn = document.getElementById("subtract-btn");
const divide_btn = document.getElementById("divide-btn");
const multiply_btn = document.getElementById("multiply-btn");

sum_btn.addEventListener("click", set_final_value(calc_nums.sum()));
subtract_btn.addEventListener("click", set_final_value(calc_nums.subtract()));
divide_btn.addEventListener("click", set_final_value(calc_nums.divide()));
multiply_btn.addEventListener("click", set_final_value(calc_nums.multiply()));

const set_final_value = (newValue) => {
  finalValue.value = newValue;
};
