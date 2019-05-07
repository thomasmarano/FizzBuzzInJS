var Javabuzz = function () {};

Javabuzz.prototype.says = function(number) {
  if (this.isDivisibleByThree(number)) {
      return 'fizz'
  }
  if (this.isDivisibleByFive(number)) {
      return 'buzz'
  }
};

Javabuzz.prototype.isDivisibleByThree = function(number) {
    return (this._isDivisibleBy(number, 3));
};

Javabuzz.prototype.isDivisibleByFive = function(number) {
    return (this._isDivisibleBy(number, 5));
};

Javabuzz.prototype.isDivisibleByFiveAndThree = function(number) {
    return (this._isDivisibleBy(number, 15));
};

Javabuzz.prototype._isDivisibleBy = function(number, divisor) {
    return (number % divisor === 0);
};