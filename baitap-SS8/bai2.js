"use strict";
function validatePerson(obj) {
    if (
        typeof obj.name === 'string' &&
        typeof obj.age === 'number' &&
        typeof obj.address === 'object'
    ) {
        return true;
    }
    return false;
}

const person = {
    name: "John Doe",
    age: 30,
    address: { street: "123 Street", city: "City", country: "Country" }
};
console.log(validatePerson(person)); 

const invalidPerson = {
    name: "Jane Doe",
    age: "30", 
    address: { street: "456 Street", city: "City", country: "Country" }
};
console.log(validatePerson(invalidPerson)); 