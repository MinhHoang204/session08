"use strict";
function squareNumber(input) {
    if (typeof input === 'number') {
        return input ** 2;
    } else if (Array.isArray(input)) {
        return input.map(num => num ** 2);
    } else {
        throw new Error('Invalid input');
    }
}

console.log(squareNumber(5)); 
console.log(squareNumber([1, 2, 3, 4, 5]));