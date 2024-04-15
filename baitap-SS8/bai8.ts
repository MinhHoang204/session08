interface ObjectA {
    a: number;
    b: string;
}

interface ObjectB {
    c: boolean;
    d: number[];
}
function combineObjects(objA: ObjectA, objB: ObjectB): ObjectA & ObjectB {
    return { ...objA, ...objB };
}

const objA: ObjectA = { a: 1, b: 'hello' };
const objB: ObjectB = { c: true, d: [1, 2, 3] };
const combinedObj: ObjectA & ObjectB = combineObjects(objA, objB);
console.log(combinedObj);
