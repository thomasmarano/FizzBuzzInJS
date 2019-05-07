describe('Javabuzz', function(){
    var  javabuzz;

    beforeEach(function() {
        javabuzz = new Javabuzz();
    });

    describe('know  when a number is', function(){

        it('divisible by 3', function(){
            expect(javabuzz.isDivisibleByThree(3)).toBe(true);
        });

        it('divisible by 5', function() {
            expect(javabuzz.isDivisibleByFive(5)).toBe(true)
        });

        it('divisible by 3 and 5', function() {
            expect(javabuzz.isDivisibleByFiveAndThree(15)).toBe(true)
        });
    });

    describe('know when a number is NOT', function() {

        it('divisible by 3', function(){
            expect(javabuzz.isDivisibleByThree(1)).toBe(false);
        });

        it('divisible by 5', function() {
            expect(javabuzz.isDivisibleByFive(2)).toBe(false)
        });

        it('divisible by 3 and 5', function() {
            expect(javabuzz.isDivisibleByFiveAndThree(4)).toBe(false)
        });
    });

    describe('when playing, says', function() {

        it('fizz', function() {
            expect(javabuzz.says(3)).toEqual('fizz')
        });

        // describe('buzz', function() {
        //
        // });
        //
        // describe('fizzbuzz', function() {
        //
        // });
        //
        // describe('your number', function() {
        //
        // });
    });
});