'use strict';

const FizzBuzz = require('../src/FizzBuzz');

const chai   = require('chai');
const assert = chai.assert;

describe('Fizz Buzz', function() {

  const _this = this;

  beforeEach(() => {
  		_this.FizzBuzz = new FizzBuzz();
	});

  it('it should return error when number is 0', () => {
    const expected = false;

    _this.FizzBuzz.number = 0;

    assert.equal(expected, _this.FizzBuzz.output);
  });

  it('it should return error when number is string', () => {
    const expected = false;

    _this.FizzBuzz.number = 'test';

    assert.equal(expected, _this.FizzBuzz.output);
  });

  it('it should return Fizz, divide number by 3, the remainder is 0 ', () => {
    const expected = 'Fizz';

    _this.FizzBuzz.number = 3;

    assert.equal(expected, _this.FizzBuzz.output);
  });

  it('it should return Fizz, divide number by 12, the remainder is 0 ', () => {
    const expected = 'Fizz';

    _this.FizzBuzz.number = 12;

    assert.equal(expected, _this.FizzBuzz.output);
  });

  it('it should return Buzz, divide number by 5, the remainder is 0 ', () => {
    const expected = 'Buzz';

    _this.FizzBuzz.number = 5;

    assert.equal(expected, _this.FizzBuzz.output);
  });

  it('it should return Buzz, divide number by 10, the remainder is 0 ', () => {
    const expected = 'Buzz';

    _this.FizzBuzz.number = 5;

    assert.equal(expected, _this.FizzBuzz.output);
  });

  it('it should return FizzBuzz, divide number by 15, the remainder is 0 ', () => {
    const expected = 'FizzBuzz';

    _this.FizzBuzz.number = 15;

    assert.equal(expected, _this.FizzBuzz.output);
  });

  it('it should return FizzBuzz, divide number by 30, the remainder is 0 ', () => {
    const expected = 'FizzBuzz';

    _this.FizzBuzz.number = 30;

    assert.equal(expected, _this.FizzBuzz.output);
  });

  it('it should return sequence after give multi number ', () => {
    const expected = [1, 2, 'Fizz', 4, 'Buzz', 'Fizz'];
    const min = 1;
    const max = 6;

    for (let i = min; i <= max; i++) {
      _this.FizzBuzz.number = i;
    }

    assert.deepEqual(expected, _this.FizzBuzz.outputSequence);
  });

});
