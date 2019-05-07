var Javabuzz = function () {};

Javabuzz.prototype.isDivisibleByThree = function(number) {
    return (number % 3 === 0);
};

Javabuzz.prototype.isDivisibleByFive = function(number) {
    return (number % 5 === 0);
};

Javabuzz.prototype.isDivisibleByFiveAndThree = function(number) {
    return ((number % 5 === 0) && (number % 3 === 0));
};