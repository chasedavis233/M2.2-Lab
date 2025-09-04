import {helloWorld, add} from '../js/main.js';
// Import the sinon library to allow us to create a spy on the console.log function
import sinon from 'sinon';

if (typeof globalThis.alert === 'undefined') 
{
  globalThis.alert = function () {};
}

QUnit.module('main.js tests', function() {

   QUnit.test('helloWorld should alert "Hello World"', function(assert) {
    // Arrange
    const alertStub = sinon.stub(globalThis, 'alert');
    // Act
    const returned = helloWorld();
    // Assert
    assert.ok(alertStub.calledOnce, 'alert should be called once');
    assert.ok(alertStub.calledWith('Hello World'), 'alert should be called with "Hello World"');
    if (typeof returned === 'string') {
        assert.strictEqual(returned, 'Hello World', 'helloWorld returns the same message');
    }
    alertStub.restore();
});


    QUnit.test('add should return the sum of two numbers', function(assert) {
        //Arrange
        const num1 = 2;
        const num2 = 3;
        const expected = 5;
        //Act
        const result = add(num1, num2);
        //Assert
        assert.equal(result, expected, 'add(2, 3) should return 5');
    });

    QUnit.test('add should return the sum of negative numbers', function(assert) {
        //Arrange
        const num1 = -2;
        const num2 = -3;
        const expected = -5;
        //Act
        const result = add(num1, num2);
        //Assert
        assert.equal(result, expected, 'add(-2, -3) should return -5');
    });

    QUnit.test('add should return the sum of a positive and a negative number', function(assert) {
        //Arrange
        const num1 = 2;
        const num2 = -3;
        const expected = -1;
        //Act
        const result = add(num1, num2);
        //Assert
        assert.equal(result, expected, 'add(2, -3) should return -1');
    });

   QUnit.test('helloWorld should also alert "Hello World"', function(assert) {
        const alertStub = sinon.stub(globalThis, 'alert'); 
        const returned = helloWorld();
        assert.ok(alertStub.calledOnce, 'alert should be called once');
        assert.ok(alertStub.calledWith('Hello World'), 'alert called with "Hello World"');
        if (typeof returned === 'string') {
            assert.strictEqual(returned, 'Hello World', 'helloWorld returns the same message');
        }
        alertStub.restore();
    });

    QUnit.test('add should throw when inputs are missing', function(assert) {
        assert.throws(() => add(1), /provide two numbers/i, 'throws if one arg missing');
        assert.throws(() => add(), /provide two numbers/i, 'throws if both args missing');
    });

    QUnit.test('add should throw when inputs are not numbers', function(assert) {
        assert.throws(() => add('a', 2), /provide two numbers/i, 'throws if first arg not number');
        assert.throws(() => add(2, 'b'), /provide two numbers/i, 'throws if second arg not number');
        assert.throws(() => add('1', '2'), /provide two numbers/i, 'throws if both not numbers');
    });

    QUnit.test('helloWorld should return "Hello World"', function(assert) {
  assert.strictEqual(helloWorld(), 'Hello World');
});


});

