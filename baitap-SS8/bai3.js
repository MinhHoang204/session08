"use strict";
function calculateArea(shape) {
    switch (shape.kind) {
        case 'square':
            return shape.sideLength ** 2;
        case 'circle':
            return Math.PI * shape.radius ** 2;
        default:
            throw new Error('Invalid shape');
    }
}

const square = { kind: 'square', sideLength: 5 };
const circle = { kind: 'circle', radius: 3 };
console.log(calculateArea(square)); 
console.log(calculateArea(circle)); 