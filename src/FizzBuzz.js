'use strict';

class FizzBuzz {

  constructor() {
    this._number = 0;
    this._numbers = [];
  }

  set number(number) {
    number = parseInt(number);

    if (isNaN(number)) {
      return false;
    }

    this._number = number;
    this._numbers.push(number);
  }

  filter(number) {
    if (number === 0) return false;
    if (number % 15 === 0) return 'FizzBuzz';
    if (number % 5 === 0) return 'Buzz';
    if (number % 3 === 0) return 'Fizz';

    return number;
  }

  get output() {
    return this.filter(this._number);
  }

  get outputSequence() {
    let numbers = this._numbers.map(n => this.filter(n));

    return numbers;
  }
}

module.exports = FizzBuzz;
