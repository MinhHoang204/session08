function processInput(input: string | string[]) {
    if (typeof input === 'string') {
        console.log(input);
    } else {
        input.forEach(item => console.log(item));
    }
}

processInput("Hello");  
processInput(["Apple", "Banana", "Orange"]);