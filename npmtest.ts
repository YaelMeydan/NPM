// Define a few types
let username: string = "Alice";
let age: number = 30;
let isActive: boolean = true;

// Define an array of numbers
let scores: number[] = [85, 90, 78, 92];

// Define a tuple
let user: [string, number] = [username, age];

// Function to greet the user
function greetUser(name: string): string {
    return `Hello, ${name}!`;
}

// Using console.log
console.log("User Information:");
console.log("Username:", username);
console.log("Age:", age);
console.log("Is Active:", isActive);
console.log("Scores:", scores);
console.log("User Tuple:", user);
console.log(greetUser(username));
