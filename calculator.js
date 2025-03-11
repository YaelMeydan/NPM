const args = process.argv.slice(2);

if (args.length < 3) {
    console.log("Usage: node calculator.js <number1> <operator> <number2>");
    process.exit(1);
}

const num1 = parseFloat(args[0]);
const operator = args[1];
const num2 = parseFloat(args[2]);
let result;

switch (operator) {
    case '+':
        result = num1 + num2;
        break;
    case '-':
        result = num1 - num2;
        break;
    case ' * ':
        result = num1 * num2;
        break;
    case ' / ':
        if (num2 === 0) {
            console.log("Error: Division by zero");
            process.exit(1);
        }
        result = num1 / num2;
        break;
    default:
        console.log("Unknown operator. Use +, -, *, or /");
        process.exit(1);
}

console.log(`Result: ${result}`);

