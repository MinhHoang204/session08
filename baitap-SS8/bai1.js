"use strict";
function parseInput(input) {
    switch (input) {
        case "number":
            return 42; 
        case "boolean":
            return true; 
        case "string":
            return "Hello, TypeScript!";
        case "null":
            return null;
        case "undefined":
            return undefined;
        default:
            throw new Error("Invalid input");
    }
}

console.log(parseInput("number")); 
console.log(parseInput("boolean")); 
console.log(parseInput("string")); 
console.log(parseInput("null")); 
console.log(parseInput("undefined"));