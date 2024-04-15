interface Square {
    kind: 'square';
    sideLength: number;
}

interface Circle {
    kind: 'circle';
    radius: number;
}
type Shape = Square | Circle;

function calculateArea(shape: Shape): number {
    switch (shape.kind) {
        case 'square':
            return shape.sideLength ** 2;
        case 'circle':
            return Math.PI * shape.radius ** 2;
        default:
            throw new Error('Invalid shape');
    }
}

const square: Square = { kind: 'square', sideLength: 5 };
const circle: Circle = { kind: 'circle', radius: 3 };
console.log(calculateArea(square)); 
console.log(calculateArea(circle)); 