"use strict";
function combineObjects(objA, objB) {
    return { ...objA, ...objB };
}

const objA = { a: 1, b: 'hello' };
const objB = { c: true, d: [1, 2, 3] };
const combinedObj = combineObjects(objA, objB);
console.log(combinedObj);    